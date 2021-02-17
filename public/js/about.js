$(document).ready(function () {
  $.get("/api/allskills").then((response) => {
    renderSkills(response);
  });
  
});

function renderSkills(input) {
  input.forEach(element => {
    let html = `<li>${element.skill}</li>`;
    $("#skillList").append(html);
  });
}