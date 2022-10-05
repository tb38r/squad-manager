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

userSchema.methods.sayHi = function(){
console.log(`Hi, My name is ${this.name}`)
}


userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, "i")})
}


userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, "i")})
}

//Virtual is a property not predefined within the schema based on other properties
userSchema.virtual('namedEmail').get(function(){
    return `${this.name} < ${this.email}`
})


//MIDDLEWARE

userSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
})


userSchema.post('save', function(doc,next){
doc.sayHi()
    next()
})


module.exports = mongoose.model("User", userSchema)