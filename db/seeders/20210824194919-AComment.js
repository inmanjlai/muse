'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AComments', [  
    { comment: 'She deserves this. Good riddance.', answer_id: 1, user_id: 4, createdAt: new Date(), updatedAt: new Date() },  
    { comment: 'This is so sad.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'Who?', answer_id: 1, user_id: 3, createdAt: new Date(), updatedAt: new Date() }     
    ], {});  
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

    return queryInterface.bulkDelete('AComments', null, { truncate: true, cascade: true, restartIdentity: true });   
  }
};
