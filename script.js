
const express = require('express')
const app = express()
app.listen(5000, ()=>{
    console.log('Sever is running on port 5000');
})
const mongoose = require('mongoose')

//mongoose.connect("")

//1QqQCbMG0CbEwFLf



//Database
const database = (module.exports = ()=>{
const connectionParams ={
    useNewUrlParser :true,
    useUnifiedTopology: true,
}

try{
    mongoose.connect ('mongodb+srv://tb38r:1QqQCbMG0CbEwFLf@cluster0.nw2skdu.mongodb.net/?retryWrites=true&w=majority',
    connectionParams)
    console.log('Database connected succesfully');
    }catch(error){
        console.log(error);
        console.log('Database connection failed');


}

})





database()






















//pass: 1QqQCbMG0CbEwFLf