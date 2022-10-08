
const mongoose = require('mongoose')


//schema describes the user object
//model is an individual user object that you can interact with 
//query against the db 

const notesSchema= new mongoose.Schema({
    name:String,
    position:String,
    notes: String,
})



const playerSchema = new mongoose.Schema({

    name :{
        type: String,
        required: true,
    },
    position: String,
    age:  Number,
    phone: String,
    email: String,
    availability: String,
    Notes: notesSchema,

       
    createdAt :{
        type:Date,
        immutable:true,
        default:()=> Date.now()
    },
    updatedAt:{
        type:Date,
        default:()=> Date.now()
    },

})

playerSchema.methods.sayHi = function(){
console.log(`Hi, My name is ${this.name}`)
}


playerSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, "i")})
}


playerSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, "i")})
}

//Virtual is a property not predefined within the schema based on other properties
playerSchema.virtual('namedEmail').get(function(){
    return `${this.name} < ${this.email}`
})


//MIDDLEWARE

playerSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
})


playerSchema.post('save', function(doc,next){
doc.sayHi()
    next()
})


module.exports = mongoose.model("players", playerSchema)


