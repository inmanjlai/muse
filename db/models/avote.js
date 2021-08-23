'use strict';
module.exports = (sequelize, DataTypes) => {
  const AVote = sequelize.define('AVote', {
    user_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER,
    vote: DataTypes.BOOLEAN
  }, {});
  AVote.associate = function(models) {
    // associations can be defined here
    AVote.belongsTo(models.User, { foreignKey: "user_id" });
    AVote.belongsTo(models.Answer, { foreignKey: "answer_id" });
  };
  return AVote;
};
