const table = document.querySelector("table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");

let headers = [
    "Name",
    "Position",
    "Email",
    "Age",
    "Contact",
    "Nickname",
]

tableHead.innerHTML = "<tr></tr>";
tableBody.innerHTML = "";

for (const headerText of headers) {
    const headerElement = document.createElement("th");
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
}


let user = {
  a:  "abb",
 b:   "bb",
   c: "cb",
    d:"db",
    e: "eb",
    f: "dgwgd"

}

let tableData = "";


tableData += `<tr>
<td>${data.a}</td>
<td>${data.b}</td>
<td>${data.c}</td>
<td>${data.d}</td>
<td>${data.e}</td>
<td>${data.f}</td>

</tr>
`


tableBody.innerHTML = tableData




// <table id="table">
// <thead></thead>
// <tbody id="tbody" style="text-align: center"></tbody>
// </table>
// <button id="prevButton">Previous</button>
// <button id="nextButton">Next</button>



// </table> 
