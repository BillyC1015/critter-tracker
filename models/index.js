const User = require('./User');
const Project = require('./Project');
const Animal = require("./animal")
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Animal };
