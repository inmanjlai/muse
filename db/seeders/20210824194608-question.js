'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {title: "Why is Britney Spears being accused of battery?",
      details:"Her assistant accused her of “slapping her” because of an argument she had with Britney Spears over the dogs. This is how the story was initially reported. Sounds awful! But why did they have ‘an argument’? It has come to light that, a day prior, the assistant had failed to bring Spears’ dog home. She reported it a theft. So we have two stories here: A woman previously working for Spears accusing her of “being slapped hard enough to drop her phone” by the famed singer, and, Britney Spears getting understandably mad at her employee for not returning her pet to her, possibly even stealing it. And there is a third thing to consider in all this… Britney Spears has been going to court for quite a while over a very heated conservatorship case. She got her father to finally step down, more or less. But he and several other relatives of Britney have an interest in portraying her as unstable, incapable of taking care of herself and others… leaking a story about her “abusing” a former assistant would help their “look how feeble and odd Britney is” argument quite a bit. I don’t buy it, and neither should you.",
      votes: 400,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {title: "What’s the song that goes like, “da da da, da da da?",
      details:"I remember it as a specific hit K-pop song. It was used in a Car Commercial in late 2020.",
      votes: 3,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {title: "What is the most disliked genre of music?",
      details:"The top five most disliked genres. (not my opinion, just my observations) My personal opinions and rebuttals will be italicized.",
      votes: '794',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {title: "What song about vegetables has the most minor chords?",
      details:"Something that sounds good when played on a guitar. I want to propose to my long term girlfriend who is a cook.",
      votes: '1260',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {title: "Will Kanye West be the next president?",
      details:"I think it is an amazing idea, he is a generational talent and he will have support from most Americans",
      votes: '400',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
    /*
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    votes: DataTypes.INTEGER,
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
    return queryInterface.bulkDelete('Questions', null,
      { truncate: true, cascade: true, restartIdentity: true }
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
