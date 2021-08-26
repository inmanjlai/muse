'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      //1 
      {title: "Why is Britney Spears being accused of battery?",
      details:"Her assistant accused her of “slapping her” because of an argument she had with Britney Spears over the dogs. This is how the story was initially reported. Sounds awful! But why did they have ‘an argument’? It has come to light that, a day prior, the assistant had failed to bring Spears’ dog home. She reported it a theft. So we have two stories here: A woman previously working for Spears accusing her of “being slapped hard enough to drop her phone” by the famed singer, and, Britney Spears getting understandably mad at her employee for not returning her pet to her, possibly even stealing it. And there is a third thing to consider in all this… Britney Spears has been going to court for quite a while over a very heated conservatorship case. She got her father to finally step down, more or less. But he and several other relatives of Britney have an interest in portraying her as unstable, incapable of taking care of herself and others… leaking a story about her “abusing” a former assistant would help their “look how feeble and odd Britney is” argument quite a bit. I don’t buy it, and neither should you.",
      votes: 400,
      user_id: 11,
      createdAt: new Date(),  
      updatedAt: new Date()    
    },  
    //2
    {title: "What’s the song that goes like, “da da da, da da da?",
      details:"I remember it as a specific hit K-pop song. It was used in a Car Commercial in late 2020.",
      votes: 3,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //3 
    {title: "What is the most disliked genre of music?",
      details:"The top five most disliked genres. (not my opinion, just my observations) My personal opinions and rebuttals will be italicized.",
      votes: 794,
      user_id: 5,  
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //4 
    {title: "What song about vegetables has the most minor chords?",
      details:"Something that sounds good when played on a guitar. I want to propose to my long term girlfriend who is a cook.",
      votes: 1260,
      user_id: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },    
    //5 
    {title: "Will Kanye West be the next president?",
      details:"I think it is an amazing idea, he is a generational talent and he will have support from most Americans",
      votes: 400,
      user_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    //6 
    {title: "What song about vegetables has the most minor chords?",
    details:"Something that sounds good when played on a guitar. I want to propose to my long term girlfriend who is a cook.",
    votes: 1260,
    user_id: 14,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    //7 
    {title: "If you were on death row, and were given the chance to listen to one last song before your execution, what would it be?",
    details:"Getting the chair next week, open to anything really", 
    votes: 666,
    user_id: 6,
    createdAt: new Date(),   
    updatedAt: new Date()
    }, 
    //8 
    {title: "Which professional music artists use Logic Pro X?",
    details:"Thinking of dropping out to work on my rap carrer full time",
    votes: 54,
    user_id: 10,      
    createdAt: new Date(),      
    updatedAt: new Date()
    },
    //9 
    {title: "What is Jackson Wang's Favorite Food?",  
    details:"My mother is obsessed and I want to make her birthday dinner special.", 
    votes: 8,
    user_id: 7,           
    createdAt: new Date(),    
    updatedAt: new Date()
    }, 
    //10 
    {title: "Who is the greatest musician of all-time?", 
    details:"And why is it Kanye?",
    votes: 580,     
    user_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
    },   
    //11 
    {title: "What are the best bootleg concert music download sites?",       
    details:"Open to torrenting, but would love a live stream if possible.",
    votes: 50,
    user_id: 11,     
    createdAt: new Date(),
    updatedAt: new Date()
    },
    //12 
    {title: "What is your favorite K-pop band?",
    details:"What is your favorite K-pop band? I need some recommendation",
    votes: 111,
    user_id: 10,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    //13 
    {title: "Is Kayne West more talented than BTS?",
    details:"IMO I Think Kayne is more talented than BTS, anyone agree with me?",
    votes: 3,
    user_id: 7,  
    createdAt: new Date(),    
    updatedAt: new Date()
    },
    //14 
    {title: "How was Justin Bieber's concert in India?",
    details:"How was Justin Bieber's concert in India? I heard he wasn't really singing",
    votes: 96,
    user_id: 4,
    createdAt: new Date(), 
    updatedAt: new Date()
    },
    //15 
    {title: "synthesizer",
    details:"When, how and why was the synthesizer invented?",
    votes: 30,
    user_id: 14,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    // 16   
    {title: "Song that breaks your heart?",
    details:"What is the name of the song that breaks your heart?",
    votes: 120,
    user_id: 13,  
    createdAt: new Date(),
    updatedAt: new Date()
    }     
    ]);       
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
