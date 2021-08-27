'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QTags', [
      { question_id: 1, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 2, tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 3, tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 4, tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 5, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 6, tag_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 7, tag_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 8, tag_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 9, tag_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { question_id: 10, tag_id: 5, createdAt: new Date(), updatedAt: new Date() },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QTags', null, { truncate: true, cascade: true, restartIdentity: true });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
