'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'QTags',
      otherKey: 'question_id',
      foreignKey: 'tag_id'
    }

    Tag.belongsToMany(models.Question, columnMapping);
  };
  return Tag;
};
