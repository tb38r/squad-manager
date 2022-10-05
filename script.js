
const express = require('express')
const app = express()
app.listen(5000, ()=>{
    console.log('Sever is running on port 5000');
})
const mongoose = require('mongoose')
const User = require("./user")

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

//CREATING A USER 

/*v1

 const user = new User({name: "Tolu", age:36})
 user.save().then(()=>console.log('User saved'));
 console.log(user);
*/


/*v2

run()
async function run(){
    // const user = new User({name: "Tolu", age:36})
await user.save()
// console.log(user);
}
*/


let userObj = {
    name: "Tolu", 
    age:36,
hobbies:["Gym, Tennis"],
address:{
    street: "Main St"
},
email:"t@hotmail.com",
}

// run(userObj)

// async function run(userObj){
    
//     try{
//         const user = await User.create(userObj)
//      console.log('async user', user);

//     }catch(e){
//         console.log('error --->', e.message)
//     }
// }



//Find by ID
/*

async function run(userObj){
    
    try{
       const user = await User.findById("633c9cf37ff8be8b440d5ea4")
  console.log(user)
    }catch(e){
        console.log('error --->', e.message)
    }
}
*/

//Find by Username
search()

async function search(userObj){
    
    try{
       const user = await User.findOne({name:"Tolu", email:"t@hotmail.com"})
       console.log(user)
       await user.save()
    }catch(e){
        console.log('error --->', e.message)
    }
}


//Best Friend

// bfriend()

// async function bfriend(userObj){
    
//     try{
//        const user = await User.findById("633ca56cf6c927509ff34b6c").populate("bestFriend")
//     //    user.bestFriend = "633ca572afd0333d6377d990"
//     user
//       await user.save()
//   console.log(user)
//     }catch(e){
//         console.log('error --->', e.message)
//     }
// }

//24.18 mins














//pass: 1QqQCbMG0CbEwFLf