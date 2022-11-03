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
    headerElement.classList = 'tableHeader'
    headerElement.id = headerText
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
}




const populateTableFromDB = (data) =>{
  tableBody.innerHTML = ""

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
      
      <td >${player.name}</td>
      <td>${player.position}</td>
      <td>${player.age}</td>
      <td>${player.phone}</td>
      <td>${player.email}</td>
      <td><div id="availability-div" class= "available"  firstname=${firstname} lastname= ${lastname} >${player.availability}</div></td>
      <td >${`<div onclick="displayDropdown(${firstname}Dropdown)"  class="dropdown">
      <div id="${firstname}Dropdown" class="dropdown-content" firstname=${firstname} lastname= ${lastname}>
      <a onclick="showPlayerModal()" class="dropdown-options"value="profile">Profile</a>
      <a class="dropdown-options"value ="edit">Edit</a>
      <a onclick="DeletePlayer(this.parentNode)" value= "delete" style="color:red;" >Delete</a>
    </div>
      
      
      <i class="fa-solid fa-bars" firstname=${firstname} lastname= ${lastname} ></i>  </div>
      `}</td>
      
      </tr>
      ` 
  }

  //      <td onclick="FindPlayer('${player.name}')">${`<i class="fa-solid fa-bars" id=${player.name}></i>`}</td>

  
  
  tableBody.innerHTML += tableData

}

const showPlayerModal = () => userProfileModal.style.display = 'block'




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



console.log('successfully added to table', data);

    }

    













