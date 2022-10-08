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


let user = {
  a:  "N Kanu",
 b:   "Striker",
 c:"45",
 d: "0202465285544",
 e: "NK@gmail.com",
    f: "Available",
    g: `<i class="fa-solid fa-bars"></i>`

}


let user2 = {
    a:  "JJ Okocha",
   b:   "Midfielder",
   c: "46",
   d:"01412521454",
      e: "jj@gmail.com",
      f: "No",
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
    <td><div id="availability-div">${user.f}</div></td>
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





















// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
