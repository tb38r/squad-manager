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
      data.append("notes", "Click here to create notes, don't forget to save changes!")

      
  
  userJSON = Object.fromEntries(data.entries());
  userJSON.name = (userJSON.name).trim()
  
  //Send to server
  AddPlayerToDB(userJSON)
    
      addPlayerModal.style.display = "none"
        form.reset()
    
        
    });
    
  
  

  //Queries profile specific data from the DB 
const GetProfileData =(parentnode) => {
    let first = parentnode.getAttribute('firstname');
    let last = parentnode.getAttribute('lastname');
  
    let playerToGet = (first + " "+ last)


   
  fetch('/profilemodaldata', {
    method: 'Post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:playerToGet.trim()})
})
    .then(async (response) => {
        resp = await response.json();
        return resp;
    })
    .then((resp) => {

        let nickname

        if(resp.data.nickname !== "") {
            nickname = resp.data.nickname
        }else{
            nickname = resp.data.name
        }

        const position ={
        Goalkeeper:"GK",
        Defender :"D",
        Midfielder: "MF",
        Forward:"F"        
};


document.getElementById('profile-modal-phone').innerText = resp.data.phone
       document.getElementById('profile-modal-email').innerText = resp.data.email
       document.getElementById('profile-name').innerText = nickname
       document.getElementById('profile-position').innerText = position[resp.data.position]
       document.getElementById('profile-modal-notes').innerText = resp.data.notes

       userProfileModal.setAttribute('player-id', resp.data._id )
       userProfileModal.style.display = 'block'
        
    });
  
  }


    //Queries profile specific data from the DB 
const GetEditData =(parentnode) => {

   

    let first = parentnode.getAttribute('firstname');
    let last = parentnode.getAttribute('lastname');
  
    let playerToGet = (first + " "+ last)


   
  fetch('/editmodaldata', {
    method: 'Post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:playerToGet.trim()})
})
    .then(async (response) => {
        resp = await response.json();
        return resp;
    })
    .then((resp) => {

        let nickname

        if(resp.data.nickname !== "") {
            nickname = resp.data.nickname
        }else{
            nickname = ""
        }

        editName.value = resp.data.name
        editEmail.value = resp.data.email
       editAge.value = resp.data.age
       editPosition.value = resp.data.position
       
        editContact.value = resp.data.phone 
        editNickname.value = resp.data.nickname

       editPlayerModal.setAttribute('player-id', resp.data._id )
       editPlayerModal.style.display = 'block'
       //editPlayerModal.style.display = 'block'
        
    });
  
  }

  const EditPlayerFromProfile = ()=>{
    let id = userProfileModal.getAttribute('player-id')


   
  fetch('/editplayerfromprofile', {
    method: 'Post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

    body: JSON.stringify({_id:id})
})
    .then(async (response) => {
        resp = await response.json();
        return resp;
    })
    .then((resp) => {
        console.log('returned player details', resp);


        let nickname

        if(resp.data.nickname !== "") {
            nickname = resp.data.nickname
        }else{
            nickname = ""
        }

        editName.value = resp.data.name
        editEmail.value = resp.data.email
       editAge.value = resp.data.age
        editContact.value = resp.data.phone 
        editNickname.value = resp.data.nickname

       editPlayerModal.setAttribute('player-id', resp.data._id )
       userProfileModal.style.display = 'none'
       editPlayerModal.style.display = 'block'

    //     let nickname

    //     if(resp.data.nickname !== "") {
    //         nickname = resp.data.nickname
    //     }else{
    //         nickname = ""
    //     }

    //     editName.value = resp.data.name
    //     editEmail.value = resp.data.email
    //    editAge.value = resp.data.age
    //     editContact.value = resp.data.phone 
    //     editNickname.value = resp.data.nickname

    //    editPlayerModal.setAttribute('player-id', resp.data._id )
    //    editPlayerModal.style.display = 'block'
    //    //editPlayerModal.style.display = 'block'
        
    });



  }


  const sendEditedData =(obj) =>{

    fetch('/sendediteddata', {
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
        .then((resp) => {
        
            if(resp.data.acknowledged === true) {
                populateTableOnOpen()
            }else{
                displayErrorMessage(`Error editing ${resp.data.name}'s details`)
            }    
        });
  }




    //Handles form, close modal
    editPlayerBtn.addEventListener('click', (e) => {
      e.preventDefault(); 

      let playerProfile = {}
      let objID = editPlayerModal.getAttribute('player-id')

playerProfile['id']= objID
      playerProfile['name'] = editName.value.trim()
      playerProfile['position'] = editPosition.value
      playerProfile['email'] = editEmail.value
      playerProfile['age']=editAge.value
      playerProfile['contact']=editContact.value
      playerProfile['nickname']=editNickname.value

sendEditedData(playerProfile)
editPlayerModal.style.display = 'none'

    });
    



  

  const GetIDFromProfileModal=()=>{
    const userProfileNode = document.getElementById('userProfileModal')
    const idFromModal = userProfileNode.getAttribute('player-id')
    return idFromModal
  }




const DeleteProfile =()=>{
    const idToDelete = GetIDFromProfileModal()

    fetch('/deleteprofile', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id:idToDelete})
    })
        .then(async (response) => {
            resp = await response.json();
            return resp;
        })
        .then((data) => {



            
            if(data.resp._id === idToDelete){
                userProfileModal.style.display = 'none'
                populateTableOnOpen()
                displayErrorMessage(`${data.resp.name} has been removed from the database!`, 2000)
    
            }else{
    
                displayErrorMessage(`Error removing ${data.resp.name} from the database!`, 2000)
                console.log('error deleting user', data);
            }
    
        });

}



const SaveEditedNotes =()=>{
   const idToEdit = GetIDFromProfileModal()
   const Notes = document.getElementById('profile-modal-notes').innerText

    fetch('/editnotes', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id:idToEdit, note: Notes})
    })
        .then(async (response) => {
            resp = await response.json();
            return resp;
        })
        .then((data) => {

        
            if(data.resp.acknowledged == true){
               
                displaySuccessMessage(`Note successfully edited`, 2000)
    
            }else{
    
                displayErrorMessage(`Error editing notes`, 2000)
            }
    
        });




}

const GetSortedHeaders=(header, sortby)=>{

    fetch('/sortheaders', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: header,
        number: sortby})
    })
        .then(async (response) => {
            resp = await response.json();
            return resp;
        })
        .then((data) => {
            populateTableFromDB(data.resp)
     
    
        });


}

const ResetUnclickedHeaders =(element)=>{
    const headers = document.getElementsByClassName('tableHeader')

    for (const item of headers) {
        if(item !== element){
            item.classList = 'tableHeader'

    }

    }
}



//close modal on mouseclick outside + further functionality
    document.addEventListener('click', (e)=>{
    if(e.target === addPlayerModal) addPlayerModal.style.display = "none"

    if(e.target === userProfileModal) userProfileModal.style.display = "none"

    if(e.target === editPlayerModal) editPlayerModal.style.display = "none"


    if(e.target.classList[0]==='tableHeader'){

      //e.target.style.backgroundColor = "red"
      let sortNumber 

      let clickedHeader = e.target.id
      let clickedClasses = e.target.classList
      let clickedClassArr = Array.from(clickedClasses)
      
      if(clickedClassArr.includes('header-asc')) {
        sortNumber = -1
        e.target.classList.remove('header-asc')
        e.target.classList.add('header-desc')
        ResetUnclickedHeaders(e.target)

      }else if (clickedClassArr.includes('header-desc')){
        sortNumber = 1
        e.target.classList.remove('header-desc')
        e.target.classList.add('header-asc')
        ResetUnclickedHeaders(e.target)


      }else{
        sortNumber = 1
        e.target.classList.add('header-asc')
        ResetUnclickedHeaders(e.target)


      }


      switch(clickedHeader){
        case 'name': GetSortedHeaders(clickedHeader, sortNumber);
        break;
        case 'position': GetSortedHeaders(clickedHeader, sortNumber);
        break;
        case 'age': GetSortedHeaders(clickedHeader, sortNumber);
        break;
        case 'phone': GetSortedHeaders(clickedHeader, sortNumber);
        break;
        case 'email': GetSortedHeaders(clickedHeader, sortNumber);
        break;
        case 'availability': GetSortedHeaders(clickedHeader, sortNumber);
        break;
      }
     



    }


    if(e.target.id==='availability-div'){
      let firstname = e.target.getAttribute('firstname')
      let lastname = e.target.getAttribute('lastname')
      let player

      if(lastname.length === 0){
        player = firstname
      }else{
          player = firstname + " " + lastname

      }

   if(e.target.classList.contains('available')){
    e.target.classList = 'unavailable'
    e.target.innerText = 'N'
    UpdateAvailability(player,"N")
   }else{
    e.target.classList = 'available'
    e.target.innerText = 'Y'
    UpdateAvailability(player,"Y")

   }


    }

      
    })
    
    