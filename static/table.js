const table = document.querySelector("table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");
const actionTabs = document.getElementsByClassName('fa-solid')








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





const action = document.getElementsByClassName('fa-solid fa-bars')

for (const item of action) {
    item.onclick =()=>{
        console.log('hi');
    }
    
}




const populateTableFromDB = (data) =>{

  let tableData = "";
  
  
  for (let player of data) {
      tableData += `<tr>
      <td>${player.name}</td>
      <td>${player.position}</td>
      <td>${player.age}</td>
      <td>${player.phone}</td>
      <td>${player.email}</td>
      <td><div id="availability-div">Yes</div></td>
      <td>${`<i class="fa-solid fa-bars" id=${player.name}</i>`}</td>
      
      </tr>
      ` 
  }
  
  
  tableBody.innerHTML = tableData

}

const addPlayerToTable = (data) =>{
    let newRow = table.insertRow(-1);


    tableData += `<tr>
    <td>${data.name}</td>
    <td>${data.position}</td>
    <td>${data.age}</td>
    <td>${data.phone}</td>
    <td>${data.email}</td>
    <td><div id="availability-div">Yes</div></td>
    <td>${`<i class="fa-solid fa-bars" id=${data.name}</i>`}</td>
    
    </tr>
    ` 
    let newCell = newRow.insertCell(0);

newCell.appendChild(tableData)


}


for(const tab of actionTabs){
    tab.addEventListener('click', ()=>{
        console.log('div clicked');
        document.getElementById('playerprofile').style.display = 'block'
    })
}











// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
