const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
var path = require('path');
const mongoose = require('mongoose');
const Crud = require('./db/crudops');
const { resolveSoa } = require('dns');
const port = 8080

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




app.use(express.json())  

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static" + "/squad.html");
});




app.get('/getdataonopen', (req, res) => {
    Crud.GetAllPlayers()
        .then((data) => res.json(data))
        
});


app.post('/addplayer', (req, res) => {
    Crud.CheckIfExists(req.body.name)
    .then(data=>{
        if(data){res.json({msg:'Player already exists, please edit existing user',
    resp:req.body.name,
    type: 'failure'
    })}else{
            Crud.AddPlayer(req.body)
            .then(data=>{
                res.json({resp: data,
                    msg: 'player added to DB',
                    type: 'success',
})
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


app.post('/toggleavailablity', (req, res) => {
    Crud.ToggleAvailability(req.body.name, req.body.value)
    .then((data)=>{
        res.json({
            msg: 'availability switched', 
            data: data,
        })
    })

});

app.post('/profilemodaldata', (req, res) => {
    Crud.ProfileDataFromDB(req.body)
    .then((data)=>{
        res.json({
            msg: `${req.body.name} found`, 
            data: data,
        })
    })

});

app.post('/deleteprofile', (req, res) => {

    Crud.DeletePlayer(req.body)
    .then((data)=>{
        res.json({resp: data,
            msg: 'player deleted', 
        name:req.body.name})
    })

});


app.post('/editnotes', (req, res) => {
    
    Crud.EditNotes(req.body)
    .then((data)=>{
        res.json({resp: data,
            msg: 'notes edited', 
        name:req.body.name})
    })

});



app.post('/sortheaders', (req, res) => {
    
    Crud.SortHeaders(req.body.value, req.body.number)
    .then((data)=>{
        res.json({resp: data,
            msg: 'data sorted', 
        })
    })

});

app.post('/editmodaldata', (req, res) => {
    Crud.ProfileDataFromDB(req.body)
    .then((data)=>{
        res.json({
            msg: `${req.body.name} found`, 
            data: data,
        })
    })

});

app.post('/sendediteddata', (req, res) => {
    Crud.EditPlayer(req.body)
    .then((data)=>{
        res.json({
            msg: `${req.body.name} edited`, 
            data: data,
        })
    })

});


app.post('/editplayerfromprofile', (req, res) => {
    Crud.ProfileDataFromDB(req.body)
    .then((data)=>{
        res.json({
            data
        })
    })

});


server.listen(port, () => {
    console.log(`listening on port ${port}`);
});