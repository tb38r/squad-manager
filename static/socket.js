
//client-side implementation

//TO DO: serve this file outside this folder



let socket = io()
//const Table = require('./table');




//received from server
socket.on('on open', function(msg) {
  try{

    populateTableFromDB(msg)
  }
  catch(err){
    console.log('Error parsing data', err);
  }
});





//validate form
//send to server

  //Handles form, close modal
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const data = new FormData(e.target);
    data.append("availability", "Y")
    data.append("type", "addplayer")

userJSON = Object.fromEntries(data.entries());
userJSON.name = (userJSON.name).trim()

//Post to server
NewEntry(userJSON)


    // //write to server
    // socket.emit('completed form', userJSON
    // );
     
       modal.style.display = "none"

      console.log('new user sent to client', userJSON);
  
      form.reset()
  
      
  });
  



//received from server
socket.on('new player added', function(msg) {
  addPlayerToTable(msg)
console.log('new player added from server', msg);

 });




const DeletePlayer =(parentnode) => {
  let first = parentnode.getAttribute('firstname');
  let last = parentnode.getAttribute('lastname');

  let playerToDelete = (first + " "+ last)
console.log(playerToDelete);

}



