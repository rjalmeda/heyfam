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
            console.log(req.params);
            if (this.socket && this.socket.joinChannelStreamer && !this.socket.isClient) {
                this.socket.joinChannelStreamer();
            }
            next();
        },
        io: (socket, next) => {
            

            function getClient() {
                let url = socket.handshake.headers.referer.split(socket.handshake.headers.host)[1];
                return !!url.split('/')[2];
            }

            socket.isClient = getClient();

            this.socket = socket;

            next();
        }
    }
})();

app.get('/', (req, res) => {
    res.redirect('/main');
});

app.get('/client', (req, res) => {
    res.redirect('/main/client');
})

app.use('/:room/client', express.static("./client/dist/client"));

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
    socket.streamJoined = false;

    let currentList = [];

    function getRoom() {
        let url = socket.handshake.headers.referer.split(socket.handshake.headers.host)[1];
        return url.split('/')[1];
    }


    function checkJoined() {
        const room = getRoom();
        console.log(room);
        if (!socket.joined) {
            console.log(`${socket.id}: check joining ${room}`);
            const room = getRoom();
            socket.join(room)
            socket.joined = true;
            if (!socket.isClient && !socket.streamJoined) {
                currentList = streamers[room];
                currentList.push(connection);
                socket.emit('channelJoined', '');
                socket.emit('allStreamers', streamers[room]);
            }
            socket.emit('channelJoined', '');
        }
    }

    socket.joinChannelStreamer = () => {
        const room = getRoom();
        console.log(room);
        if (!socket.joined) {
            console.log(socket.id + ' joining ' + room);
            socket.join(room)
            socket.joined = true;
            socket.streamJoined = true;
            streamers[room] = streamers[room] || [];
            currentList = streamers[room];
            currentList.push(connection);
            socket.emit('channelJoined', '');
            socket.emit('allStreamers', streamers[room]);
        }
        
        channels[room] = channels[room] || defaultChannel;
    }


    socket.emit('currentChannel', channels[getRoom()]);

    socket.on('updateChannel', channel => {
        checkJoined();
        channel = checkUrl(channel);
        const room = getRoom();
        channels[room] = channel;
        socket.in(room).broadcast.emit('currentChannel', channels[room])
    })

    socket.on('registerClient', () => {
        checkJoined();
        // const room = getRoom();
        // clients[room] = clients[room] || [];
        // currentList = clients[room];
        // socket.in(room).broadcast.emit("newClientConnected", connection);
    })

    socket.on('registerStreamer', () => {
        checkJoined();
        const room = getRoom();
        streamers[room] = streamers[room] || [];
        currentList = streamers[room];
        socket.in(room).broadcast.emit("newStreamerConnected", connection);
    })

    // socket.broadcast.emit('newUserConnected', connection)

    socket.on('sendMessage',  (message) => {
        checkJoined();
        const room = getRoom();
        socket.in(room).broadcast.emit('sendMessage', message)
    })

    socket.on('disconnect', () => {
        checkJoined();
        const room = getRoom();
        const idx = currentList.findIndex(c => c.sessionId === socket.id);
        socket.in(room).broadcast.emit('userDisconnected', socket.id)
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
        url = url.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
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