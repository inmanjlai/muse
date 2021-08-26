'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {name: 'songs', createdAt: new Date(), updatedAt: new Date()},
      {name: 'artists', createdAt: new Date(), updatedAt: new Date()},
      {name: 'k-pop', createdAt: new Date(), updatedAt: new Date()},
      {name: 'concerts', createdAt: new Date(), updatedAt: new Date()},
      {name: 'technology',createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, { truncate: true, cascade: true, restartIdentity: true });
}
}
