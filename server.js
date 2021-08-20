const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 4040;

const connections = [];
const clients = [];
const streamers = [];

app.use('/client', express.static("./client/dist/client"));

app.use(express.static("./streamer/dist/streamer"));

// app.get('/', (req, res) => {
//     res.send("hello");
// });

io.on('connection', socket => {
    console.log('A user has connected');
    const connection = {
        sessionId: socket.id,
        name: ''
    }

    let currentList;

    socket.on('registerClient', () => {
        currentList = clients;
        clients.push(connection);
        socket.broadcast.emit("newClientConnected", connection);
    })

    socket.on('registerStreamer', () => {
        currentList = streamers;
        streamers.push(connection);
        socket.broadcast.emit("newStreamerConnected", connection);
    })

    connections.push(connection)

    socket.broadcast.emit('newUserConnected', connection)

    socket.on('updateName', name => {
        connection.name = name;
        socket.broadcast.emit('nameUpdated', connection)
    })

    socket.on('disconnect', () => {
        const idx = currentList.findIndex(c => c.sessionId === socket.id);
        socket.broadcast.emit('userDisconnected', socket.id)
        currentList.splice(idx, 1);
    })

    socket.on('offer', (to, from, offer) => {
        console.log('offer received');
        socket.broadcast.to(to).emit('offer', from, offer);
    })

    socket.on('answer', (to, from, answer) => {
        console.log('answer received');
        socket.broadcast.to(to).emit('answer', from, answer);
    })

    socket.on('iceCandidate', (to, from, iceCandidate) => {
        console.log('ice candidate received');
        socket.broadcast.to(to).emit('iceCandidate', from, iceCandidate);
    })

    socket.emit('allUsers', connections);
    socket.emit('allStreamers', streamers);
    socket.emit('allClients', clients);
})

http.listen(port, () => {
    console.log(`Now listening on port ${port}`)

})