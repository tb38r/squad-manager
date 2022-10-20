
//client-side implementation

//TO DO: serve this file outside this folder



let socket = io()



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
    data.append("type", "addplayer")
    userJSON = Object.fromEntries(data.entries());


    //write to server
      // socket.emit('completed form', userJSON);

     
      
       modal.style.display = "none"

  
      console.log('new user sent to client', userJSON);
  
      form.reset()
  
      
  });
  






//received from server
socket.on('new player added', function(msg) {
  addPlayerToTable(msg)
console.log('new player added from server', msg);

 });

