 let tableFields = [
     "Name",
     "Position",
     "Email",
     "Age",
     "Contact",
     "Nickname",
 ]

 console.log(tableFields);

 export{tableFields}


 
 <script >
    
     const table = document.querySelector("table");
     const tableHead = table.querySelector("thead");
     const tableBody = table.querySelector("tbody");
    
     let tableFields = [
         "Name",
         "Position",
         "Email",
         "Age",
         "Contact",
         "Nickname",
     ]

     tableHead.innerHTML = "<tr></tr>";
     tableBody.innerHTML = "";

     for (const headerText of tableFields) {
         const headerElement = document.createElement("th");
         headerElement.setAttribute("th", "data-sort");
         headerElement.setAttribute("data-column", `${headerText}`);
         headerElement.setAttribute("data-order", `asce`);
         headerElement.textContent = headerText;
         tableHead.querySelector("tr").appendChild(headerElement);
     }

    

 </script> 

  <table id="table">
 <thead></thead>
 <tbody id="tbody" style="text-align: center"></tbody>
 </table>
 <button id="prevButton">Previous</button>
 <button id="nextButton">Next</button>

 </table> 
