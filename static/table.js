const table = document.querySelector("table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");
const actionTabs = document.getElementsByClassName('fa-solid fa-bars')








let headers = [
    "Name",
    "Position",
    "Age",
    "Phone",
    "Email",
    "Availability",
    "Action",
]

tableHead.innerHTML = "<tr></tr>";
tableBody.innerHTML = "";

for (const headerText of headers) {
    const headerElement = document.createElement("th");
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
}




const populateTableFromDB = (data) =>{

  let tableData = "";
  let  firstname 
  let lastname
  
  
  for (let player of data) {
    if((player.name).includes(" ")){

        firstname = (player.name).split(" ")[0] 
        lastname = (player.name).split(" ")[1] 

    }else{
        firstname = player.name
     lastname = ""

    }




    
    tableData += `<tr>
      
      <td>${player.name}</td>
      <td>${player.position}</td>
      <td>${player.age}</td>
      <td>${player.phone}</td>
      <td>${player.email}</td>
      <td><div id="availability-div">${player.availability}</div></td>
      <td>${`<i class="fa-solid fa-bars" firstname=${firstname} lastname= ${lastname}></i>`}</td>
      
      </tr>
      ` 
  }

  //      <td onclick="FindPlayer('${player.name}')">${`<i class="fa-solid fa-bars" id=${player.name}></i>`}</td>

  
  
  tableBody.innerHTML += tableData

}

const addPlayerToTable = (data) =>{
    let tableData = "";
    let  firstname 
    let lastname
    console.log('data from addPlayerToTablefn', data);
    
    

      if((data.name).includes(" ")){
  
          firstname = (data.name).split(" ")[0] 
          lastname = (data.name).split(" ")[1] 
  
      }else{
          firstname = data.name
       lastname = ""
      }
      

          // Insert a row at the end of the table
  let newRow = table.insertRow()
  nameCell = newRow.insertCell(0).innerHTML = data.name
  positionCell = newRow.insertCell(1).innerHTML = data.position
  ageCell = newRow.insertCell(2).innerHTML = data.age
  phoneCell = newRow.insertCell(3).innerHTML = data.phone
  emailCell = newRow.insertCell(4).innerHTML = data.email
availabilityCell = newRow.insertCell(5).innerHTML = data.availability
actionCell = newRow.insertCell(6).innerHTML = `<i class="fa-solid fa-bars" firstname=${firstname} lastname= ${lastname}></i>`




 
    // tableData += `<tr>
      
    //   <td>${data.name}</td>
    //   <td>${data.position}</td>
    //   <td>${data.age}</td>
    //   <td>${data.phone}</td>
    //   <td>${data.email}</td>
    //   <td><div id="availability-div">Yes</div></td>
    //   <td>${`<i class="fa-solid fa-bars" firstname=${firstname} lastname= ${lastname}></i>`}</td>
      
    //   </tr>
    //   ` 
  

  //      <td onclick="FindPlayer('${player.name}')">${`<i class="fa-solid fa-bars" id=${player.name}></i>`}</td>

  
  //tableBody.innerHTML = tableData

console.log('successfully added to table', data);


//hello
    }
//sends a new user entry to the server
const NewEntry= (obj)=> {
    
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
         addPlayerToTable(data.resp)
                return
            }
console.log("Player exists boolean --->", resp)
return
        });
}



// module.exports = { NewEntry};



// for(const tab of actionTabs){

// console.log("tab", tab)
//     tab.addEventListener('click', ()=>{
//         console.log('div clicked');
//         let test = {
//             data: "test"
//         }
      
//         document.getElementById('playerprofile').style.display = 'block'
//     })
// }










// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
