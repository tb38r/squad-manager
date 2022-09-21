const fs = require('fs')
const dbName = 'db.json'

function readDb() {
    // read JSON object from file
    const data = fs.readFileSync(dbName, 'utf8')
    return JSON.parse(data)
}



function writeDb(obj) {
    fs.appendFile('db.json', JSON.stringify(obj, null, 2), function(err){
    });
    // if (!obj) return console.log('Please provide data to save')
    // try {
    //     fs.writeFileSync(dbName, JSON.stringify(obj, null, 2)) //overwrites current data
    //     return console.log('SAVE SUCESS')
    // } catch (err) {
    //     return console.log('FAILED TO WRITE')
    // }
}



module.exports = { readDb, writeDb }