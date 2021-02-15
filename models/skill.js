module.exports = function(sequelize, DataTypes) {
	let Skill = sequelize.define("Skill",  {
		skill: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	Skill.associate = models => {
		models.Skill.hasMany(models.ProjectSkills, {onDelete: "cascade"});
	}
};