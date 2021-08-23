'use strict';
module.exports = (sequelize, DataTypes) => {
  const QVote = sequelize.define('QVote', {
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    vote: DataTypes.BOOLEAN
  }, {});
  QVote.associate = function(models) {
    // associations can be defined here
    QVote.belongsTo(models.User, { foreignKey: "user_id" });
    QVote.belongsTo(models.Question, { foreignKey: "question_id" });
  };
  return QVote;
};
