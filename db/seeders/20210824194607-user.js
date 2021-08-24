'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {username: 'demo', hashedPassword: 'U56OK78OX43IZ22IH65BY84IR', email:'demo@demo.com', avatar:'../public/images/defaultuser.png"'},
      {username: 'Bob', hashedPassword: 'M35SR28GK65RE72KF81MS29JL', email: 'bob@bob.com', avatar:"../public/images/defaultuser.png"},
      {username: 'Charles', hashedPassword: 'T76ND17NB48PZ66GP60QT49HO', email:'charles@charles.com', avatar:'../public/images/defaultuser.png"'}
    ], {});
    /*
     username: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING
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
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
