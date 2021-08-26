'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [    
      {username: 'Demo User', hashedPassword: 'D8E8FCA2DC0F896FD7CB4CB0031BA249', email:'demo@email.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA',createdAt: new Date(), updatedAt: new Date()},
      {username: 'Bob', hashedPassword: '3D9571BEDDD9881D4FA2F808F36B3118', email: 'bob@bob.com', avatar:"https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA", createdAt: new Date(), updatedAt: new Date()},
      {username: 'Charles', hashedPassword: '1D84BFAD8D54D49ABE177834C3CC4648', email:'charles@charles.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Sjurd', hashedPassword: 'EDDEFD5CEBBF7B9A5DD25AC85337AC68', email:'sjurd@sjurd.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Marine', hashedPassword: 'F133257EE1D7699A24AC607EBD0B193F', email:'marine@marine.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Emyr', hashedPassword: '981A4742200653480155B6D4CBFBB7C6', email:'emyr@emyr.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Miyagi', hashedPassword: '44F9414D9BAF5ADED240AA95CB49AC7C', email:'miyagi@miyagi.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Kanye', hashedPassword: 'FA015D224D361E5A6816F8F1E7A8115C', email:'kanye@kanye.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Mario', hashedPassword: 'DF985A7D7944A9F78ABE735952E5C43E', email:'mario@mario.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Mikey', hashedPassword: 'FE7BA0E4AE70B1BEE243E3EE55D984DF', email:'mikey@mikey.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Draken', hashedPassword: '23D9188EDFE63288E15286359AD96500', email:'draken@draken.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Daniel', hashedPassword: '279A29D09A2301DF8F9D9D3F47A0F3E2', email:'daniel@daniel.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Johnny', hashedPassword: 'E2DEC57B685B9B1192738FDADA9D0F28', email:'johnny@johnny.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Ali', hashedPassword: '478551D1B4C54C50742B35A85F399330', email:'ali@ali.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
      {username: 'Happy', hashedPassword: '14503234B5BFCD022F02965B2F99163F', email:'happy@happy.com', avatar:'https://lh3.googleusercontent.com/proxy/MuIy4fCoxVAE1y5L1YDCGcXaA1f8uQxpk4JvGQ129CiKyiwHEA-Lf67Y1CbVI5c4Yrjhm1gaMrcuut_lsbu5wTNCwySO4snXIkNksadytgO6fNvKh2wr5OS6JUQq66wgKrjPpixTqA', createdAt: new Date(), updatedAt: new Date()},
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
