$(document).ready(function () {
  $.get("/api/allprojects").then((response) => {
    console.log(response);
  });
  
});