'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'QTags',
      otherKey: 'tag_id',
      foreignKey: 'question_id'
    }

    Question.belongsTo(models.User, { foreignKey: "user_id" });
    Question.hasMany(models.Answer, { foreignKey: 'question_id', onDelete: 'CASCADE', hooks: true});
    Question.hasMany(models.QVote, { foreignKey: "question_id" });
    Question.belongsToMany(models.Tag, columnMapping);
  };
  return Question;
};
