
//client-side implementation


//TO DO: serve this file outside this folder

let test = document.getElementById("test")

const fillin =(data)=> test.innerHTML = data[0].name

let socket = io()

const hello=(msg)=> console.log(msg[0].nickname);








//received from server
socket.on('on open', function(msg) {
  try{

    populatePlayers(msg)
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
       socket.emit('completed form', userJSON);
       modal.style.display = "none"

  
      console.log('user', userJSON);
  
      form.reset()
  
      
  });
  






//received from server
socket.on('chat message', function(msg) {
console.log('received from server', msg );

 });

