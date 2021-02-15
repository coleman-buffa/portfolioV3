let express = require("express");

// Setting up port and requiring models for syncing
let PORT = process.env.PORT || 8080;

let db = require("./models");

// Creating express app and configuring middleware needed for authentication
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
// app.listen(PORT, function () {
// 	console.log(
// 		"==> Listening on port %s. Visit http://localhost:%s/ in the browser.",
// 		PORT,
// 		PORT
// 	);
// });

