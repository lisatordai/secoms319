// Author: Lisa Tordai
// ISU Netid : ltordai@iastate.edu
// Date : October 04th, 2023
fetch("./data_index.json")
  .then(response => response.json())
  .then(myTopics => loadTopics(myTopics));

function loadTopics(myTopics) {
  var mainContainer = document.getElementById("indextopics");
  //console.log(myTopics);
  // Create a new row for each set of columns
  let row = document.createElement("div");
  row.className = "row";
  for (var i = 0; i < myTopics.researchTopics.length; i++) {
    let title = myTopics.researchTopics[i].title;
    let text = myTopics.researchTopics[i].text;
    let url = myTopics.researchTopics[i].url;

    //console.log(title);

    //DOM
    // Create a column for the element
    let column = document.createElement("div");
    column.className = "col-lg-4";
    column.innerHTML = `
      <h2 class="fw-normal"><strong>${title}</strong></h2>
      <p>${text}</p>
      <p><a class="btn btn-secondary" href="${url}">View details &raquo;</a></p>
    `;

    // Append the column to the row and the row to the main container
    row.appendChild(column);
    mainContainer.appendChild(row);
  }
}