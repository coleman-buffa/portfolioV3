$(document).ready(function () {
  $.get("/api/navprojects").then((response) => {
    renderProjectList(response);
  });

  $.get("/api/allprojects").then((response) => {
    renderProjectCards(response);
  });

});

function renderProjectList(input) {
  input.forEach(element => {
    let html = `<li><a href=#${element.title}>${element.title}</a><li>`;
    $("#projectList").append(html);
  });
}

function renderProjectCards(input) {
  console.log(input);
  input.forEach(element => {
    let html = 
    `<div class="work-feature-block grid-x" ID="${element.title}">
    <div class="cell medium-7">
      <img class="work-feature-block-image" src="https://placehold.it/600x400" />
    </div>
    <div class="cell medium-5">
      <h2 class="work-feature-block-header">${element.title}</h2>
      <p>${element.description}</p>
      <h2>Project Details</h2>
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