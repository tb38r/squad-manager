const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require('path');
const mongoose = require('mongoose')
const Player = require("./player")


//1QqQCbMG0CbEwFLf



//Database
const mongoAtlasURL = 'mongodb+srv://tb38r:1QqQCbMG0CbEwFLf@cluster0.nw2skdu.mongodb.net/squad-manager'
const database = (module.exports = ()=>{
const connectionParams ={
    useNewUrlParser :true,
    useUnifiedTopology: true,
}

try{
  mongoose.connect (mongoAtlasURL,
  connectionParams)
  mongoose.connection.on('connected', ()=>{
     
    if(mongoose.connection.readyState != 1){
      console.log("Error connecting to MongoDb, ready state = ",mongoose.connection.readyState);
    }else{
      console.log("Database connected succesfully with a ready state of",mongoose.connection.readyState);
    }
  });
  }catch(error){
      console.log(error);
      console.log('Database connection failed');
}
})



database()

// name :{
//   type: String,
//   required: true,
// },
// position: String,
// age:  Number,
// phone: Number,
// email: String,
// availability: String,
// Notes: notesSchema,



let playerObj = {
    name: "Tolu", 
    age:36,
position: "Defender",
phone: "02081234567",
email:"t@hotmail.com",
availability: "Yes",
Notes:{
  name: "T",
  position: "D",
  notes: "Versatile defender, can play accross the line"
}
}

run(playerObj)

async function run(playerObj){
    
    try{
        const user = await Player.create(playerObj)
     console.log('async user', user);

    }catch(e){
        console.log('error --->', e.message)
    }
}




app.use(express.static(path.join(__dirname, 'static')));

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
