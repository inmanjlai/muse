'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Question, { foreignKey: "user_id" });
    User.hasMany(models.Answer, { foreignKey: "user_id" });
    User.hasMany(models.AVote, { foreignKey: "user_id" });
    User.hasMany(models.QVote, { foreignKey: "user_id" });
    User.hasMany(models.AComment, { foreignKey: "user_id" });
  };
  return User;
};
