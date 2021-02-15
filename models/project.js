module.exports = function (sequelize, DataTypes) {
	let Project = sequelize.define("Project", {		
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	Project.associate = models => {
		models.Project.hasMany(models.ProjectSkills, {onDelete: "cascade"});
	}
	return Project;
};