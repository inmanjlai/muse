'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answer', [
      {
        answer: "Britney’s handlers are claiming that the sheriff’s office has already assured them that the housekeeper’s claims will go nowhere, which doesn’t sound like the truth.",
        votes: 28,
        question_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answer: "You might be thinking about Dolphin. The most recent version of this was sung by texts soobin and oh my girls Arin",
        votes: 2,
        question_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answer: "5. Bubblegum Pop / K(J)-Pop, 4. Electronic / Techno, 3. Heavy Metal / Screamo, 2. Rap / Hip Hop, 1. Country ",
        votes: 7,
        question_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answer: "Sweet Cherry Wine. Tommy James & Shondells",
        votes: 3,
        question_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        answer: "I think he will",
        votes: 8,
        question_id: 5,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    /*
    answer: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
