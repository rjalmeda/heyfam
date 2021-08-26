const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4040;

const channels = {};
const clients = {};
const streamers = {};

let defaultChannel = 'https://www.youtube.com/embed/NAbQimfaRyw?autoplay=1'; 

const ioExpressMiddleware = (() => {
    return {
        socket: {},
        express: (req, res, next) => {

            if (this.socket && this.socket.joinChannel) {
                this.socket.joinChannel(req.params);
            }
            next();
        },
        io: (socket, next) => {
            this.socket = socket;
            next();
        }
    }
})();

app.use('/:room/client', ioExpressMiddleware.express, express.static("./client/dist/client"));

app.use('/:room', ioExpressMiddleware.express, express.static("./streamer/dist/streamer"));

// app.get('/', (req, res) => {
//     res.send("hello");
// });

io.on('connection', socket => {
    const connection = {
        sessionId: socket.id,
        name: ''
    }

    socket.joined = false;

    let currentList = [];

    socket.joinChannel = ({room}) => {
        if (!socket.joined) {
            socket.join(room)
            socket.room = room;
            socket.joined = true;
            streamers[room] = streamers[room] || [];
            currentList = streamers[room];
            currentList.push(connection);
            socket.emit('channelJoined', '');
            socket.emit('allStreamers', streamers[room]);
        }
        
    }

    channels[socket.room] = channels[socket.room] || defaultChannel;

    socket.emit('currentChannel', channels[socket.room]);

    socket.on('updateChannel', channel => {
        channel = checkUrl(channel);
        channels[socket.room] = channel;
        socket.broadcast.emit('currentChannel', channels[socket.room])
    })

    socket.on('registerClient', () => {
        clients[socket.room] = clients[socket.room] || [];
        currentList = clients[socket.room];
        socket.broadcast.emit("newClientConnected", connection);
    })

    socket.on('registerStreamer', () => {
        streamers[socket.room] = streamers[socket.room] || [];
        currentList = streamers[socket.room];
        socket.broadcast.emit("newStreamerConnected", connection);
    })

    socket.broadcast.emit('newUserConnected', connection)

    socket.on('sendMessage',  (message) => {
        socket.broadcast.emit('sendMessage', message)
    })

    socket.on('disconnect', () => {
        currentList = streamers[socket.room] || [];
        const idx = currentList.findIndex(c => c.sessionId === socket.id);
        socket.broadcast.emit('userDisconnected', socket.id)
        if (idx > -1) {
            currentList.splice(idx, 1);
        }
    })

    socket.on('offer', (to, from, offer) => {
        socket.broadcast.to(to).emit('offer', from, offer);
    })

    socket.on('answer', (to, from, answer) => {
        socket.broadcast.to(to).emit('answer', from, answer);
    })

    socket.on('iceCandidate', (to, from, iceCandidate) => {
        socket.broadcast.to(to).emit('iceCandidate', from, iceCandidate);
    })

    // socket.emit('allStreamers', streamers);
    // socket.emit('allClients', clients);
})

http.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})

function checkUrl(url) {
    // sample Youtube url 'https://www.youtube.com/watch?v=SeW5Eh2U79c'
    // sample Twitch url 'https://player.twitch.tv/?channel=cdprojektred&parent=herokuapp.com'

    // Check if youtube
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('youtube')) {
        url = url.replace('watch?v=', 'embed/');
        const u = url.split('?');
        url = `${u[0]}?autoplay=1`

    } else if (lowerUrl.includes('youtu.be')) {
        url = lowerUrl.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
    } else if (lowerUrl.includes('twitch')) {
        const u = url.split('?');
        const params = !!u[1] ? u[1].split('&') : [];
        const parentIdx = params.findIndex(p => p.includes('parent'));
        let parent = process.env.ENVIRONMENT === 'heroku' ? 'parent=rj-stream-test.herokuapp.com' : 'parent=localhost';
        if (parentIdx > -1) {
            params.splice(parentIdx, 1, parent);
        } else {
            params.push(parent);
        }
        url = `${u[0]}?${params.join('&')}`
    }

    return url;
}

io.use(ioExpressMiddleware.io);