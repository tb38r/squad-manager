const Player = require('../player');

//returns all players within the db
function GetAllPlayers() {
    try {
        return Player.find();
    } catch (e) {
        console.log('error adding player --->', e.message);
    }
}

//AddPlayer adds a new player to the db
async function AddPlayer(playerObj) {
    try {
        const user = await Player.create(playerObj);
       return user
    } catch (e) {
        console.log('error adding player --->', e.message);
    }
}



//Check if player exists
async function CheckIfExists(name){
    const findObj = await Player.find({name:{$exists:true, $in:[name]}}).exec()

    if(findObj.length == 0){
        return false
        
    }
    return true
        
}


//Deletes a player from the database
async function DeletePlayer(obj){

 try{
    const findObj = await Player.findOneAndDelete(obj)
    return findObj
 }catch(e){
    console.log('error deleting player--->', e);
    console.log(obj)
 }   

}


//db.users.updateOne({name:"T"},{$set:{age:36}})  - updates where name is T, alternatively 

//Update the availabilty value within the database
async function ToggleAvailability(player, value){
    try{
   
       const findObj = await Player.updateOne({name:player},{$set:{availability:value}})
       return findObj
    }catch(e){
       console.log('error updating availablity value--->', e);
    }   
   
   }
   

//Get user profile data from the db
async function ProfileDataFromDB(obj){

    try{

        const findObj = await Player.findOne(obj)
        return findObj
     }catch(e){
        console.log('error finding player--->', e);
        console.log(obj)
     }   
    
   }
   

   //Deletes a player from the database using their id
async function DeleteProfile(obj){
    //db.users.deleteOne({_id: ObjectId("633315153463fb5bf6ed65a2")}) 
    
    try{
        
        const findObj = await Player.findOneAndDelete(obj)
       return findObj
    }catch(e){
       console.log('error deleting player--->', e);
       console.log(obj)
    }   
   
   }


      //Edit the notes stored on the db 
async function EditNotes(obj){

    try{
   
       const newNote= await Player.updateOne({_id:`${obj._id}`},{$set:{notes:`${obj.note}`}})
       return newNote
    }catch(e){
       console.log('error editing notes--->', e);
    }   
   
   }


   //returns collection sorted either asc or desc
   async function SortHeaders(header, sortby){


      try{
                 
         const sortedData = await Player.find({}).sort({[`${header}`]:sortby})
         return sortedData


      }catch(e){
         console.log('error sorting headers--->', e);
      }   
     
     }




module.exports = { AddPlayer, GetAllPlayers, CheckIfExists, DeletePlayer, ToggleAvailability, ProfileDataFromDB, DeleteProfile, EditNotes, SortHeaders};
