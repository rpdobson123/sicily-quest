/*
gameContent[5] = {
  description: '',
  choices: [
    { description: '', goTo: 1 },
  ],
},
*/

const gameContent = [];
gameContent[1] = {
  description: "I am in Richard's office under the futon! Where will I go?",
  picture: "https://i.imgur.com/alviPU9.png",
  choices: [
    { description: 'I will go eat my food!', goTo: 2 },
    { description: 'I will look for my friends!', goTo: 3 },
  ],
};
gameContent[2] = {
  picture: "https://img.chewy.com/is/catalog/64868_PT5._AC_SL1500_V1447875691_.jpg",
  description:
    'I go into the hallway - I have WAY too much food! What is the deal with that?',
  choices: [
    { description: 'Just eat a little food', goTo: 4 },
    { description: "I'm gonna go get mad at my friends!", goTo: 3 },
  ],
};
gameContent[3] = {
  picture: "https://i.imgur.com/T7Y81WM.png",
  choices: [{ description: '...', goTo: 5 }],
};
gameContent[4] = {
    picture: "https://i.imgur.com/Nv60a6h.png",
    choices: [{ description: '*Munch Munch Munch*', goTo: 5 }],
};
gameContent[5] = {
  picture: "https://i.imgur.com/lG2W0xg.png",
  description: 'Clearly, my friends are not home... Now what will I do?',
  choices: [{ description: 'Go downstairs', goTo: 6 }],
};
gameContent[6] = {
  description: 'I walk downstairs - Oh no! There\'s a weird bug!',
  picture: "https://i.imgur.com/utAo8iS.png",
  choices: [
    { description: 'Run away!', goTo: 7},
    { description: 'Eat the bug!', goTo: 8},
  ],
};
gameContent[7] = {
  description: 'I ran away from the weird bug and ran into the laundry room. What now?',
  picture: "https://i.imgur.com/1IZCmYL.png",
  choices: [
    { description: 'Go to Sleep', goTo: 9},
  ],
}
gameContent[8] = {
  description: 'I try to eat the bug but it was too fast! :(',
  picture: "https://i.imgur.com/cKwTWjF.png",
  choices: [
    { description: 'Give up and go sleep', goTo: 9},
    { description: 'Try to chase it and get mad!', goTo: 8},
  ]
}
gameContent[9] = {
  description: 'You go to sleep.... [YOU WIN!]',
  picture: "https://i.imgur.com/8UzVlcY.png",
  choices: [
    { description: 'Play again', goTo: 1},
  ]
}

export default gameContent;
