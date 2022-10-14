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
        console.log('async user', user);
    } catch (e) {
        console.log('error adding player --->', e.message);
    }
}

module.exports = { AddPlayer, GetAllPlayers };
