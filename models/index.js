const User = require('./User');
const Project = require('./Project');
const Animal = require("./Animal")
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Animal.belongsTo(User,{
  foreignKey: 'user_id'
}); 

User.hasMany(Animal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})



module.exports = { User, Project, Animal };
