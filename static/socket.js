
//client-side implementation

//TO DO: serve this file outside this folder




//queries the database once a connection is established and gets data needed to fill the table
const populateTableOnOpen= ()=> {
    
  fetch('/getdataonopen', {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
  })
      .then(async (response) => {
          resp = await response.json();
          return resp;
      })
      .then((data) => {
 
         console.log('FROM OPEN', populateTableFromDB(data))
      });
}



//populateTableOnOpen()






  //Handles form, close modal
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const data = new FormData(e.target);
    data.append("availability", "Y")
    data.append("type", "addplayer")

userJSON = Object.fromEntries(data.entries());
userJSON.name = (userJSON.name).trim()

//Post to server
AddPlayerToDB(userJSON)


    // //write to server
    // socket.emit('completed form', userJSON
    // );
     
       modal.style.display = "none"

      console.log('new user sent to client', userJSON);
  
      form.reset()
  
      
  });
  





