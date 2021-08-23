'use strict';
module.exports = (sequelize, DataTypes) => {
  const AComment = sequelize.define('AComment', {
    comment: DataTypes.STRING,
    answer_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  AComment.associate = function(models) {
    // associations can be defined here
    AComment.belongsTo(models.User, { foreignKey: "user_id" });
    AComment.belongsTo(models.Answer, { foreignKey: "answer_id" });
  };
  return AComment;
};
