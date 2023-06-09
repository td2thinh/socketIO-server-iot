const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

let data = []

// setInterval(() => {
//     let sensorData = 100
//     if (Math.random() > 0.5) {
//         sensorData += Math.random() * 200;
//     } else {
//         sensorData -= Math.random() * 200;
//     }
//     data.push({
//         "x": Date.now(),
//         "y": sensorData,
//     });
// }, 30);



io.on('connection', (socket) => {
    console.log(`a user connected: ${socket.id}`);
    setInterval(() => {
        let sensorData = 100
        if (Math.random() > 0.5) {
            sensorData += Math.random() * 200;
        } else {
            sensorData -= Math.random() * 200;
        }
        data = {
            "x": new Date().getTime(),
            "y": sensorData,
        };
        socket.emit('data', data);
        // data = [];
    }, 5);
    socket.on('disconnect', () => {
        console.log(`user disconnected: ${socket.id}`);

    });
});

server.listen(8080, () => {
    console.log('listening on *:8080');
}
);