const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 4040;

const connections = [];

app.use(express.static("./client/dist/client"))

app.get('/', (req, res) => {
    res.send("hello");
});

io.on('connection', socket => {
    console.log('A user has connected');
    const connection = {
        sessionId: socket.id,
        name: ''
    }

    connections.push(connection)

    socket.broadcast.emit('newUserConnected', connection)

    socket.on('updateName', name => {
        connection.name = name;
        socket.broadcast.emit('nameUpdated', connection)
    })

    socket.on('disconnect', () => {
        const idx = connections.findIndex(c => c.sessionId === socket.id);
        socket.broadcast.emit('userDisconnected', socket.id)
        connections.splice(idx, 1);
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

})

http.listen(port, () => {
    console.log(`Now listening on port ${port}`)

})