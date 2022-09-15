const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require('path');


app.use(express.static(path.join(__dirname, 'static')));

//console.log('test----',path.join(__dirname, 'static'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static'+'/squad.html');
});


io.on('connection', (socket) => {
    console.log('a user connected');

    //received from client
    socket.on('completed form', (msg) => {
      console.log('message: ' , msg);
      //response to client
        io.emit('chat message', msg);

      });

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
  

server.listen(8080, () => {
  console.log('listening on *:8080');
});
