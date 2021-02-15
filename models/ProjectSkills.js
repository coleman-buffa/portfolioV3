module.exports = function (sequelize, DataTypes) {
	let ProjectSkills = sequelize.define("ProjectSkills", {		
	});
	ProjectSkills.associate = models => {
		models.ProjectSkills.belongsTo(models.Project, {onDelete: "cascade"});
		models.ProjectSkills.belongsTo(models.Skill, {onDelete: "cascade"});
	}
};