'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {name: 'songs', desciption: 'A specific song/genre/album', createdAt: new Date(), updatedAt: new Date()},
      {name: 'artists', desciption: 'A specific person/group within the music industry', createdAt: new Date(), updatedAt: new Date()},
      {name: 'k-pop', desciption: '<3 KPOP', createdAt: new Date(), updatedAt: new Date()},
      {name: 'concerts', desciption: 'lfg concert', createdAt: new Date(), updatedAt: new Date()},
      {name: 'technology', desciption: 'newest tech', createdAt: new Date(), updatedAt: new Date()},         
    ], {});  
  },      

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, { truncate: true, cascade: true, restartIdentity: true }); 
}
} 
