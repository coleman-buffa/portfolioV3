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
    let html = `<li><a href=#>${element.title}</a><li>`;
    $("#projectList").append(html);
  });
}

function renderProjectCards(input) {
  console.log(input);
};