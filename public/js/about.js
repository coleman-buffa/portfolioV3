$(document).ready(function () {
  $.get("/api/allskills").then((response) => {
    console.log(response);
  })
})