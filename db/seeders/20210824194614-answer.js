'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [  
      {
        //1 
        answer: "Britney’s handlers are claiming that the sheriff’s office has already assured them that the housekeeper’s claims will go nowhere, which doesn’t sound like the truth.",
        votes: 28,      
        question_id: 1,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //2 
        answer: "You might be thinking about Dolphin. The most recent version of this was sung by texts soobin and oh my girls Arin",
        votes: 52,
        question_id: 2,
        user_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //3 
        answer: "5. Bubblegum Pop / K(J)-Pop, 4. Electronic / Techno, 3. Heavy Metal / Screamo, 2. Rap / Hip Hop, 1. Country ",
        votes: 97,
        question_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //4 
        answer: "Sweet Cherry Wine. Tommy James & Shondells",
        votes: 63,
        question_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //5 
        answer: "I think he will",
        votes: 218,
        question_id: 5,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //6 
        answer: "BTS is my favorite, BTS are competing one on one and topping several American artists. This reminds me of the Justin Bieber craze that was going around when he first started only this is on a much muchhhh bigger scale.",
        votes: 28,
        question_id: 12,  
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //7 
        answer: "As a whole group? No. There's 7 members that are multi-faceted and work hard at doing what they love. I was a fan of Kanye when he first started out and I can't say what he's doing now. But it just doesn't make sense to say that Kanye's more talented than 7 people who do a lot of different things, that are passionate, hardworking and are good at what they do. I'm not saying that he's not talented, not hardworking, passionate or bad at what he does - but that's one person over 7 people.",
        votes: 20,
        question_id: 13,
        user_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //8 
        answer: "Being a Belieber, I'd been extremely hyper about this concert since White Fox, the organizer of the event, released the first poster of Purpose Tour India. I've always looked forward to Miley Cyrus, my idol and inspiration, to visit India once in my lifetime. But unfortunately, she never did. That's why, I was more excited when someone from that genre announced about his tour in my own country. The last time India had been going gaga over something like this was in 1996, during Michael Jackson's HIStory Tour.",
        votes: 77,
        question_id: 14,
        user_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //9 
        answer: "Good question, and it has differing answers depending on which stage of their development you formally refer to as a 'synthesizer.' I'll take the very conservative approach and call the modular synthesizers around 1960 the first 'synthesizers.'",
        votes: 53,         
        question_id: 15,  
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        //10 
        answer: "Sorry by Aquilo, The first time I heard this song while I watched Grey Anatomy (S13, Ep 14) they used it as bgm when Nathan Riggs reminiscing his passed fiance. It breaks my heart because the story align with the lyrics and the sad melody suits the situation as well.",
        votes: 98,
        question_id: 16,  
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        //11
        answer: "These are the groups that I stan… Astro, TXT, and TWICE",
        votes: 62,
        question_id: 12,
        user_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       //13 
        answer: "These are just the ones that I stan, so sorry in advance if I didn't put your favorite group: BTS, Blackpink, EXO",
        votes: 32,
        question_id: 12,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        //14 
        answer: "These 2 artist are in multiple different generes BTS is a millionaire group who is trained to do dancing singing and rapping and now producing and write lyrics Kanye West is a self made billionaire rapper producer song writer little bit of a singer with a unique style of stuff also creator of the E note these 2 artists are incomparable as they do different things in different genres im not gonna compare BTS to Queen or Kanye West to Chuck Berry or Elvis Presley.",
        votes: 62,
        question_id: 13,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       //15 
        answer: "I don't think so, Kayne west only can rap and write lyrics (idk much about Kayne) but bts can dance, sing, rap, and write lyrics. I think we see the clear winner",
        votes: 52,
        question_id: 13,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        //16 
        answer: "Mockingbird- Eminem. I CAN'T NEVER GET TIRED LISTENING THIS SONG. Uh huh NeveR!!",
        votes: 22,
        question_id: 16,
        user_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       //17 
        answer: "Hallelujah by Leonard Cohen",
        votes: 2, 
        question_id: 16,    
        user_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      { 
        //18 
        answer: "Please do not drop out. Your music probably sucks.",
        votes: 2,
        question_id: 8,    
        user_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
     },     
     {
        //18 
        answer: "Jackson wang is a huge fan of chicken wings!",
        votes: 112,
        question_id: 9,
        user_id: 8,  
        createdAt: new Date(),  
        updatedAt: new Date()  
    },  
    {  
        //19   
        answer: "Jason Aldean is a country star and one of the greatest to ever do it in the music industry.",
        votes: 312,
        question_id: 10,
        user_id: 3,      
        createdAt: new Date(),
        updatedAt: new Date()
    },  
    {
        //20 
        answer: "Pea by Red Hot Chili Peppers",
        votes: 2,
        question_id: 6,    
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
    },  
    {
        //21  
        answer: "WTF",    
        votes: 102,
        question_id: 6,
        user_id: 13,
        createdAt: new Date(),    
        updatedAt: new Date()
      },  
    ]);   
  },  

  down: (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Answers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
