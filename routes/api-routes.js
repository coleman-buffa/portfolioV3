var db = require("../models");

module.exports = function (app) {
	app.get("/api/allskills", (req, res) => {
    db.Skill.findAll().then((data) => {
      res.json(data);
    });
  });
};
  
