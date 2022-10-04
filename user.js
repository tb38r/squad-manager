const mongoose = require('mongoose')


//schema describes the user object

//model is an individual user object that you can interact with 

//query against the db 

const addressSchema= new mongoose.Schema({
    street:String,
    city:String
})



const userSchema = new mongoose.Schema({

    name :{
        type: String,
        required: true,
    },
    email: String,
    age: {
        type: Number,
        min: 10,
         max:75,
         validate: {
            validator:v=> v%2 === 0,
            message: props => `${props.value} is not an even number`
         }
    },
    createdAt :{
        type:Date,
        immutable:true,
        default:()=> Date.now()
    },
    updatedAt:{
        type:Date,
        default:()=> Date.now()
    },
    bestFriend:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
},
    hobbies:[],
    address: addressSchema,

})

module.exports = mongoose.model("User", userSchema)