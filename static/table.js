const table = document.querySelector("table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");








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




const populatePlayers = (data) =>{

    let tableData = "";
    
    
    for (let player of data) {
        tableData += `<tr>
        <td>${player.name}</td>
        <td>${player.position}</td>
        <td>${player.age}</td>
        <td>${player.phone}</td>
        <td>${player.email}</td>
        <td><div id="availability-div">Yes</div></td>
        <td>${`<i id=${player.name} class="fa-solid fa-bars"></i>`}</td>
        
        </tr>
        ` 
    }
    
    
    tableBody.innerHTML = tableData
  
  }
  
















// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
