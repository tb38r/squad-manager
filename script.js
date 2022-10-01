
const express = require('express')
const app = express()
app.listen(5000, ()=>{
    console.log('Sever is running on port 5000');
})
const mongoose = require('mongoose')

//1QqQCbMG0CbEwFLf

//Database
const mongoAtlasURL = 'mongodb+srv://tb38r:1QqQCbMG0CbEwFLf@cluster0.nw2skdu.mongodb.net/?retryWrites=true&w=majority'
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






















//pass: 1QqQCbMG0CbEwFLf