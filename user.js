const mongoose = require('mongoose')


//schema describes the user object

//model is an individual user object that you can interact with 

//query against the db 

const addressSchema= new mongoose.Schema({
    street:String,
    city:String
})



const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email :String,
    createdAt :Date,
    updatedAt: Date,
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies:[],
    address: addressSchema,

})

module.exports = mongoose.model("User", userSchema)