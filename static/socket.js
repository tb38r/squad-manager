
//client-side implementation


//TO DO: serve this file outside this folder

let socket = io();

//received from server
socket.on('on open', function(msg) {
  console.log('received from server')

  console.log(msg)


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
       socket.emit('completed form', userJSON);
       modal.style.display = "none"

  
      console.log('user', userJSON);
  
      form.reset()
  
      
  });
  






//received from server
socket.on('chat message', function(msg) {
console.log('received from server', msg );

 });