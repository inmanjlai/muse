'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {username: 'demo', hashedPassword: '$2a$10$00lDn9RmcvfOP0Gjj06fGut9i4J.VHIMGaHC7yTblQkbyGHiGhguK', email:'demo@demo.com', avatar:'../public/images/defaultuser.png',createdAt: new Date(), updatedAt: new Date()},
      {username: 'Bob', hashedPassword: '$2a$10$SLhQ/bMY71ISdh73fdHS0e0b2UfMCmpSPXc1WqT6Hmz3k4mU2V6tK', email: 'bob@bob.com', avatar:"../public/images/defaultuser.png", createdAt: new Date(), updatedAt: new Date()},
      {username: 'Charles', hashedPassword: '$2a$10$Zvhf/Ti2oAv5IIdLDC8pJ.oQ0k5ga9GeFF.uoj7cB1ejgLxJKB4xC', email:'charles@charles.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Sjurd', hashedPassword: '$2a$10$SAegGtR.gfIV3BNf9ZdHq.9/MsR2CQ7ihMGbwq5rjHcq5YCBd3JhW', email:'sjurd@sjurd.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Marine', hashedPassword: '$2a$10$GqlEOQ8/.Mn4dAvBQmwuN.v5TxfqyOJrqPUbwpZiw4UPb/QTzAUKK', email:'marine@marine.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Emyr', hashedPassword: '$2a$10$MqDD935s/SUmmBoQmVMVa.WrKEby7Wb9yxV8chBjRClw6Wat1uDaW', email:'emyr@emyr.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Miyagi', hashedPassword: '$2a$10$h4vH2blthuZHssaIJ8yEjud25o2Sr1wrBW2/21X5.Acay6Nys7jpy', email:'miyagi@miyagi.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Kanye', hashedPassword: '$2a$10$rZOOl0RYSPuiprJP7nLB8umeyDDwIEBiqJUuqUJCbeOU1rb8HnZLq', email:'kanye@kanye.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Mario', hashedPassword: '$2a$10$U82K0TnCkaeYY9fEKWDbqeGlF1o3WtTD9CsNGHwksCnre.kMQt7AK', email:'mario@mario.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Mikey', hashedPassword: '$2a$10$PqjgRhS3.6sAdwk0TCtm.e/RLb8fF519Ko2QL1WltDIeU/r.Yjh9u', email:'mikey@mikey.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Draken', hashedPassword: '$2a$10$gfbNGe48wH774DlsVknlcudIqINT9I/gaHn2GoMNAT9hKID5Fttkq', email:'draken@draken.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Daniel', hashedPassword: '$2a$10$IyJ9d/.lr2llD2qZ.JKLEu548vGhkoV7ONMiMmvc1mW5Pj00FOaUm', email:'daniel@daniel.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Johnny', hashedPassword: '$2a$10$FQnqpCt0bmwZU8OT.VqGjeuWsY9TiSl0LSxOW/TERFOzJxLUQafl2', email:'johnny@johnny.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Ali', hashedPassword: '$2a$10$bLWiV1mLSeMAOOxuxuC6meblzYspv6UWX63bccBEnGvMbKlcArrta', email:'ali@ali.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Happy', hashedPassword: '$2a$10$Lb0iEw6Fa63eRi0sib.Lfe8uTOWWobXPYxM6kSaf8W9m.fHC23IK.', email:'happy@happy.com', avatar:'../public/images/defaultuser.png', createdAt: new Date(), updatedAt: new Date()},
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
