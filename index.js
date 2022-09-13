const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    //response to client
    socket.on('chat message', (msg) => {
        //console.log('message: ' + msg);
        io.emit('chat message', msg);

      });

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
  

server.listen(8080, () => {
  console.log('listening on *:8080');
});
