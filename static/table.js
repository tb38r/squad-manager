const table = document.querySelector("table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");

let headers = [
    "Name",
    "Position",
    "Email",
    "Age",
    "Contact",
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


let user = {
  a:  "N Kanu",
 b:   "bb",
   c: "cb",
    d:"db",
    e: "eb",
    f: `<div id="availability-div" >Available</div>`,
    g: `<i class="fa-solid fa-bars"></i>`

}


let user2 = {
    a:  "JJ Okocha",
   b:   "truck",
     c: "cb",
      d:"more",
      e: "eb",
      f: "dgwgd",
      g: `<i class="fa-solid fa-bars"></i>`
  
  }

let users = [user, user2]

let tableData = "";


for (const user of users) {
    tableData += `<tr>
    <td>${user.a}</td>
    <td>${user.b}</td>
    <td>${user.c}</td>
    <td>${user.d}</td>
    <td>${user.e}</td>
    <td>${user.f}</td>
    <td>${user.g}</td>
    
    </tr>
    `
    
}


tableBody.innerHTML = tableData




const action = document.getElementsByClassName('fa-solid fa-bars')

for (const item of action) {
    item.onclick =()=>{
        console.log('hi');
    }
    
}

console.log(action);




















// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
