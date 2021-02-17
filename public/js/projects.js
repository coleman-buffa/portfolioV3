$(document).ready(function () {
  $.get("/api/allprojects").then((response) => {
    renderProjectList(response);
  });

});

function renderProjectList(input) {
  input.forEach(element => {
    let html = `<li><a href=#>${element.title}</a><li>`;
    $("#projectList").append(html);
  });
}