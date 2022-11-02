const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
var path = require('path');
const mongoose = require('mongoose');
const Crud = require('./db/crudops');
const { resolveSoa } = require('dns');

//1QqQCbMG0CbEwFLf

//Database
const mongoAtlasURL =
    'mongodb+srv://tb38r:1QqQCbMG0CbEwFLf@cluster0.nw2skdu.mongodb.net/squad-manager';
const database = (module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(mongoAtlasURL, connectionParams);
        mongoose.connection.on('connected', () => {
            if (mongoose.connection.readyState != 1) {
                console.log(
                    'Error connecting to MongoDb, ready state = ',
                    mongoose.connection.readyState
                );
            } else {
                console.log(
                    'Database connected succesfully with a ready state of',
                    mongoose.connection.readyState
                );
            }
        });
    } catch (error) {
        console.log(error);
        console.log('Database connection failed');
    }
});

database();

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
    name: 'Tolu',
    age: 36,
    position: 'Defender',
    phone: '02081234567',
    email: 't@hotmail.com',
    availability: 'Yes',
    Notes: {
        name: 'T',
        position: 'D',
        notes: 'Versatile defender, can play accross the line',
    },
};
let allplayers;

//Crud.AddPlayer(playerObj)
app.use(express.json())  

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static" + "/squad.html");
});

/*
// app.get('/', (req, res) => {
//     Crud.GetAllPlayers()
//         .then((data) => (allplayers = data))
//         .then(res.sendFile(__dirname + '/static' + '/squad.html'));
// });
*/


//sends a new user entry to the server
const populateTableOnOpen= ()=> {
    
    fetch('/getdataonopen', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(async (response) => {
            resp = await response.json();
            return resp;
        })
        .then((data) => {
   
           console.log('From Open', data)
        });
  }
  


app.get('/getdataonopen', (req, res) => {
    Crud.GetAllPlayers()
        .then((data) => res.json(data))
        
});


app.post('/addplayer', (req, res) => {
    Crud.CheckIfExists(req.body.name)
    .then(data=>{
        if(data){res.json({msg:'Player already exists, please edit existing user',
    resp:req.body.name
    })}else{
            Crud.AddPlayer(req.body)
            .then(data=>{
                res.json({resp: data,
                    msg: 'player added to DB'})
            })
        
        }
    })
  
});

app.post('/deleteplayer', (req, res) => {
    Crud.DeletePlayer(req.body)
    .then((data)=>{
        res.json({resp: data,
            msg: 'player deleted', 
        name:req.body.name})
    })

});










io.on('connection', (socket) => {
    console.log('a user connected');


    socket.emit('on open', allplayers);


    //received from client
    socket.on('completed form', (msg) => {
        if (msg.type == 'addplayer'){

        Crud.CheckIfExists(msg.name)
        .then((resp)=>console.log('server check if player exits', resp))

        socket.emit('new player added', msg);
    }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});






server.listen(8080, () => {
    console.log('listening on *:8080');
});