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
   
            if(data.msg === 'player added to DB'){
                displaySuccessMessage(`${data.resp.name} has been added to the database!`,2000)
                return
            }
           displayErrorMessage(`${data.resp} is already in the database!`, 2000)
            return
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
        console.log('dddddd', data)
        //TO ADD ERROR DIV LOGIC
        if(data.resp.name === data.name){
            console.log('Player successfully deleted', data)
            populateTableOnOpen()
            displayErrorMessage(`${data.name} has been removed from the database!`, 2000)

            return
        }else{
            console.log('error deleting user', data);
        }

    });
  
  }
  

  const displaySuccessMessage=(message, delay)=>{
      let successdiv = document.getElementById('successmessage')
      successdiv.innerText = message
      successdiv.style.display = 'block'
      setTimeout(()=>{
        successdiv.style.display = 'none'
        //window.location.reload()
    }, delay)

  }




  const displayErrorMessage=(message, delay)=>{
    let errordiv = document.getElementById('errormessage')
    errordiv.innerText = message
    errordiv.style.display = 'block'
    setTimeout(()=>{
        errordiv.style.display = 'none'
  }, delay)

}





  
