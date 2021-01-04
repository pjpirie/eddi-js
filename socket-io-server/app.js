const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const port = process.env.PORT || 4001;
const indexRoute = require('./routes/index');

const app = express();

app.use(cors())
app.use(indexRoute);

const httpServer = http.createServer(app);

// Sets the Allow Origin Header To Allow the Frontend Client
const io = socketIo(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let interval;

io.on('connection', socket => {
    console.log("New Client Connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log("Client Disconnected");
        clearInterval(interval);
    })
});

const getApiAndEmit = socket => {
    const response = new Date().getTime();
    socket.emit('FromAPI', response);
};



httpServer.listen(port, () => {
    console.log(`Listening on port ${port}`);
});