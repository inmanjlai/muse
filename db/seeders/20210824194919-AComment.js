'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AComments', [     
    { comment: 'She deserves this. Good riddance.', answer_id: 1, user_id: 4, createdAt: new Date(), updatedAt: new Date() },  
    { comment: 'This is so sad.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'Who?', answer_id: 1, user_id: 3, createdAt: new Date(), updatedAt: new Date() },   
    { comment: 'This song was important to me, too, for different reasons. May you heal well.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'Oddly enough my answer is also sorry, but it is by a different artist. Sorry by Hasely', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'I like Sorry by Justin Bieber ', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'What is the synthesizer for?', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: '1952', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: '1950s', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() }, 
    { comment: 'I wish i had the moeny to buy the ticket', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() }, 
    { comment: 'I was one of those dolts who burned through 70,000 for the top notch tickets. It was great, however certainly not worth spending 70K.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: "First of all the thing of garbage shown on above answer is real but, it is said said that pre assuming thing is very bad thing when you don't know what happened inside the stadium.", answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: "I don't think so, Kayne west only can rap and write lyrics, but bts can dance, sing, rap, and write lyrics. I think we see the clear winner", answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'BTS can rap,sing,dance and kayne can only rap so l think BTS is more talented because they do a lot more things then kayne west.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'I think BTS is more talented cuz they have a variety of talents, dancing, singing, rapping, acting (V), writing their lyrics, and ect.', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'OMG I LOVE BTS TOO', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'RM GANG!!!!!!!', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
    { comment: 'I love BTS cause of V!', answer_id: 1, user_id: 6, createdAt: new Date(), updatedAt: new Date() },
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
