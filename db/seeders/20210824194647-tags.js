'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {name: 'songs', description: 'A specific song/genre/album', createdAt: new Date(), updatedAt: new Date()},
      {name: 'artists', description: 'A specific person/group within the music industry', createdAt: new Date(), updatedAt: new Date()},
      {name: 'k-pop', description: '<3 KPOP', createdAt: new Date(), updatedAt: new Date()},
      {name: 'concerts', description: 'lfg concert', createdAt: new Date(), updatedAt: new Date()},
      {name: 'technology', description: 'newest tech', createdAt: new Date(), updatedAt: new Date()},         
    ], {});  
  },      

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, { truncate: true, cascade: true, restartIdentity: true }); 
}
} 
