'use strict';
module.exports = (sequelize, DataTypes) => {
  const QTag = sequelize.define('QTag', {
    question_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  QTag.associate = function(models) {
    // associations can be defined here
  };
  return QTag;
};