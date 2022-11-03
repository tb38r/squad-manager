//sends a new user entry to the server
const AddPlayerToDB= (obj)=> {
    
    fetch('/addplayer', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
        .then(async (response) => {
            resp = await response.json();
            return resp;
        })
        .then((data) => {
   
            if(data.type === 'success'){
                populateTableOnOpen()
                displaySuccessMessage(`${data.resp.name} has been added to the database!`,2000)
            }else if(data.type === 'failure'){
                displayErrorMessage(`${data.resp} is already in the database!`, 2000)

            }
        });
}



//Deletes a player from the database
const DeletePlayer =(parentnode) => {
    let first = parentnode.getAttribute('firstname');
    let last = parentnode.getAttribute('lastname');
  
    let playerToDelete = (first + " "+ last)


   
  fetch('/deleteplayer', {
    method: 'Post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:playerToDelete.trim()})
})
    .then(async (response) => {
        resp = await response.json();
        return resp;
    })
    .then((data) => {
        
        if(data.resp.name === data.name){
            console.log('Player successfully deleted', data)
            populateTableOnOpen()
            displayErrorMessage(`${data.name} has been removed from the database!`, 2000)

        }else{

            displayErrorMessage(`Error removing ${data.name} from the database!`, 2000)
            console.log('error deleting user', data);
        }

    });
  
  }
  

  //displays a message to the user on a successful outcome
  const displaySuccessMessage=(message, delay)=>{
      let successdiv = document.getElementById('successmessage')
      successdiv.innerText = message
      successdiv.style.display = 'block'
      setTimeout(()=>{
        successdiv.style.display = 'none'
        //window.location.reload()
    }, delay)

  }



  //displays a message to the user on a negative outcome
  const displayErrorMessage=(message, delay)=>{
    let errordiv = document.getElementById('errormessage')
    errordiv.innerText = message
    errordiv.style.display = 'block'
    setTimeout(()=>{
        errordiv.style.display = 'none'
  }, delay)

}




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
   
          populateTableFromDB(data)
        });
  }



  //DB request to toggle availabilty status
const UpdateAvailability =(player, value) => {
    

  fetch('/toggleavailablity', {
    method: 'Post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:player, value: value})
})
    .then(async (response) => {
        resp = await response.json();
        return resp;
    })
  
  }




  
  
  
  
  
  
  
    //Handles form, close modal
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
      
      const data = new FormData(e.target);
      data.append("availability", "Y")
      data.append("type", "addplayer")
  
  userJSON = Object.fromEntries(data.entries());
  userJSON.name = (userJSON.name).trim()
  
  //Send to server
  AddPlayerToDB(userJSON)
  
       
      addPlayerModal.style.display = "none"
  
        console.log('new user sent to client', userJSON);
    
        form.reset()
    
        
    });
    
  
  

  
