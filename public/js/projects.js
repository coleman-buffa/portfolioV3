$(document).ready(function () {
  //Populate navigation dropdown menu with list from database
  $.get("/api/navprojects").then((response) => {
    renderProjectList(response);
  });

  //Populate project cards with database items
  $.get("/api/allprojects").then((response) => {
    renderProjectCards(response);
  });

  //Get all projectskills WIP
  $.get("/api/projectskills").then((response) => {
    console.log(response);
  })

});

function renderProjectList(input) {
  input.forEach(element => {
    let html = `<li><a href=#"${element.title}" data-magellan-target="${element.title}">${element.title}</a><li>`;
    $("#projectList").append(html);
  });
}

function renderProjectCards(input) {
  input.forEach(element => {
    let html = 
    `<div class="work-feature-block grid-x" ID="${element.title}">
    <div class="cell medium-7">
      <img class="work-feature-block-image" src="https://placehold.it/600x400" />
    </div>
    <div class="cell medium-5"> 
      <h2 class="work-feature-block-header"><a href="${element.link}">${element.title}</a></h2>
      <p>${element.description}</p>
      <h2>Project Skills</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  </div>`

  $("#projectCard").append(html);
  });

};