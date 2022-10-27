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
                console.log('success adding player to db', resp);

                //returned from the server
                window.location.reload()
         //addPlayerToTable(data.resp)
                return
            }
console.log("Player exists boolean --->", resp)
return
        });
}



//Deletes a player from the database
const DeletePlayer =(parentnode) => {
    let first = parentnode.getAttribute('firstname');
    let last = parentnode.getAttribute('lastname');
  
    let playerToDelete = (first + " "+ last)
  console.log(playerToDelete);

   
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
        console.log('DATA.RESP', data.resp.acknowledged );
        
        //TO ADD ERROR DIV LOGIC
        if(data.resp.acknowledged == true){
            //console.log("PLAYER DELETED!")
            console.log('returned data post delete', data);
            
            window.location.reload()

            return
        }else{
            console.log('error deleting user', data);
        }

    });
  
  }
  








  
