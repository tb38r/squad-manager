const Player = require("../player")


//AddPlayer adds a new player to the db
async function AddPlayer(playerObj){
    
    try{
        const user = await Player.create(playerObj)
     console.log('async user', user);

    }catch(e){
        console.log('error adding player --->', e.message)
    }
}

module.exports = {AddPlayer}