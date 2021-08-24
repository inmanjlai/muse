'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: "user_id" });
    Answer.belongsTo(models.Question, { foreignKey: "question_id" });
    Answer.hasMany(models.AVote, { foreignKey: "answer_id" });
    Answer.hasMany(models.AComment, { foreignKey: 'answer_id', onDelete: 'CASCADE', hooks: true});
  };
  return Answer;
};
