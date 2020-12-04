const textElement = document.getElementById('choice')
const optionButtonsElement = document.getElementById('option-buttons')
const dialogueTextElement = document.getElementById('dialogue')

let state = {}

function startGame() {
    state = {}
    show = showTextNode(1)
    show = showDialogue(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  dialogueTextElement.innerText = textNode.dialogue
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}



// ------------------------------------------------------ Button Options

const textNodes = [
    {
        id: 1,
        text: "What will you do?",
        dialogue: "Jarl Bjorn: You want to live in my settlement? Show me why I should have you!",
        options: [
            {
                text: "Talk",
                nextText: 2,
            },
            {
                text: "Use",
                nextText: 3,
            },
            {
                text: "Challenge",
                nextText: 4,
            },
            {
                text: "Look at",
                nextText: 5,
            },
        ]
    },

// ------------------------------------------------------ Talk To Functions

    {
        id: 2,
        text: "Talk to:",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 6,
            },
            {
                text: "Astrid",
                nextText: 7,
            },
            {
                text: "Sigurd",
                nextText: 8,
            },
            {
                text: "Back",
                nextText: 1,
            },
        ]
    },
    {
        id: 6,
        text: "Talk to Bjorn about:",
        dialogue: "Jarl Bjorn: You have a question for me?",
        options: [
            {
                text: "Bjorn",
                nextText: 16,
            },
            {
                text: "Astrid",
                nextText: 17,
            },
            {
                text: "Sigurd",
                nextText: 18,
            },
            {
                text: "More",
                nextText: 98,
            },
        ]
    },
    {
        id: 98,
        text: "Talk to Bjorn about:",
        dialogue: "Jarl Bjorn: You have a question for me?",
        options: [
            {
                text: "The Council",
                nextText: 99,
            },
            {
                text: "The Settlement",
                nextText: 115,
            },
            {
                text: "The War",
                nextText: 101,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 7,
        text: "Talk to Astrid about:",
        dialogue: "Astrid: What would you ask of me?",
        options: [
            {
                text: "Bjorn",
                nextText: 19,
            },
            {
                text: "Astrid",
                nextText: 20,
            },
            {
                text: "Sigurd",
                nextText: 21,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 102,
        text: "Talk to Astrid about:",
        dialogue: "Astrid: What would you ask of me?",
        options: [
            {
                text: "The Council",
                nextText: 103,
            },
            {
                text: "The Settlement",
                nextText: 104,
            },
            {
                text: "The War",
                nextText: 105,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },
    {
        id: 8,
        text: "Talk to Sigurd about:",
        dialogue: "Sigurd: Hmmph?",
        options: [
            {
                text: "Bjorn",
                nextText: 22,
            },
            {
                text: "Astrid",
                nextText: 22,
            },
            {
                text: "Sigurd",
                nextText: 22,
            },
            {
                text: "More",
                nextText: 106,
            },
        ]
    },
    {
        id: 106,
        text: "Talk to Sigurd about:",
        dialogue: "Sigurd: Hmmph?",
        options: [
            {
                text: "The Council",
                nextText: 22,
            },
            {
                text: "The Settlement",
                nextText: 22,
            },
            {
                text: "The War",
                nextText: 22,
            },
            {
                text: "Back",
                nextText: 2,
            },
        ]
    },

// ------------------------------------------------------ Use Functions

    {
        id: 3,
        text: "Use",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 9,
            },
            {
                text: "Axe",
                nextText: 10,
            },
            {
                text: "Gold",
                nextText: 11,
            },
            {
                text: "More",
                nextText: 12,
            }
        ]
    },
     {
        id: 12,
        text: "Use",
        dialogue: "",
        options: [
            {
                text: "Paint",
                nextText: 13,
            },
            {
                text: "Shield",
                nextText: 14,
            },
            {
                text: "Snacks",
                nextText: 15,
            },
            {
                text: "Back",
                nextText: 1,
            }
        ]
    },
    
 // --------------------------- Use With Functions    
   
    {
        id: 9,
        text: "Use Sword with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 69,
            },
            {
                text: "Astrid",
                nextText: 69,
            },
            {
                text: "Sigurd",
                nextText: 70,
            },
            {
                text: "More",
                nextText: 71,
            },
         ]
    },
    {
        id: 71,
        text: "Use Sword with",
        dialogue: "",
        options: [
            {
                text: "Axe",
                nextText: 72,
            },
            {
                text: "Gold",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 73,
            },
            {
                text: "More",
                nextText: 74,
            },
         ]
    },
    {
        id: 74,
        text: "Use Sword with",
        dialogue: "",
        options: [
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Snacks",
                nextText: 76,
            },
            {
                text: "Self",
                nextText: 77,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 10,
        text: "Use Axe With",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 69,
            },
            {
                text: "Astrid",
                nextText: 69,
            },
            {
                text: "Sigurd",
                nextText: 70,
            },
            {
                text: "More",
                nextText: 68,
            },
         ]
    },
    {
        id: 68,
        text: "Use Axe with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 72,
            },
            {
                text: "Gold",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 73,
            },
            {
                text: "More",
                nextText: 97,
            },
         ]
    },
    {
        id: 100,
        text: "Use Axe with",
        dialogue: "",
        options: [
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Snacks",
                nextText: 76,
            },
            {
                text: "Self",
                nextText: 77,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 11,
        text: "Use Gold with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 79,
            },
            {
                text: "Astrid",
                nextText: 79,
            },
            {
                text: "Sigurd",
                nextText: 79,
            },
            {
                text: "More",
                nextText: 80,
            },
         ]
    },
    {
        id: 80,
        text: "Use Gold with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 72,
            },
            {
                text: "Axe",
                nextText: 72,
            },
            {
                text: "Paints",
                nextText: 81,
            },
            {
                text: "More",
                nextText: 82,
            },
         ]
    },
    {
        id: 82,
        text: "Use Gold with",
        dialogue: "",
        options: [
            {
                text: "Shield",
                nextText: 72,
            },
            {
                text: "Snacks",
                nextText: 72,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
   
    {
        id: 13,
        text: "Use Paint with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 85,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 86,
            },
         ]
    },
    {
        id: 86,
        text: "Use Paint with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 73,
            },
            {
                text: "Axe",
                nextText: 73,
            },
            {
                text: "Gold",
                nextText: 81,
            },
            {
                text: "More",
                nextText: 87,
            },
         ]
    },
    {
        id: 87,
        text: "Use Paint with",
        dialogue: "",
        options: [
            {
                text: "Shield",
                nextText: 88,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 14,
        text: "Use Shield with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 90,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 91,
            },
         ]
    },
    {
        id: 91,
        text: "Use Shield with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 92,
            },
         ]
    },
    {
        id: 82,
        text: "Use Shield with",
        dialogue: "",
        options: [
            {
                text: "Paint",
                nextText: 88,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 75,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 15,
        text: "Use Snacks with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 85,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 94,
            },
            {
                text: "More",
                nextText: 95,
            },
         ]
    },
    {
        id: 95,
        text: "Use Snacks with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 96,
            },
         ]
    },
    {
        id: 96,
        text: "Use Snacks with",
        dialogue: "",
        options: [
            {
                text: "Paint",
                nextText: 75,
            },
            {
                text: "Shield",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 83,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },
    {
        id: 107,
        text: "Use Painted Sheild with",
        dialogue: "",
        options: [
            {
                text: "Bjorn",
                nextText: 33,
            },
            {
                text: "Astrid",
                nextText: 85,
            },
            {
                text: "Sigurd",
                nextText: 85,
            },
            {
                text: "More",
                nextText: 109,
            },
         ]
    },
    {
        id: 109,
        text: "Use Painted Sheild with",
        dialogue: "",
        options: [
            {
                text: "Sword",
                nextText: 75,
            },
            {
                text: "Axe",
                nextText: 75,
            },
            {
                text: "Gold",
                nextText: 75,
            },
            {
                text: "More",
                nextText: 110,
            },
         ]
    },
    {
        id: 96,
        text: "Use Painted Sheild with",
        dialogue: "",
        options: [
            {
                text: "Paint",
                nextText: 111,
            },
            {
                text: "Snacks",
                nextText: 75,
            },
            {
                text: "Self",
                nextText: 75,
            },
            {
                text: "Back",
                nextText: 3,
            },
         ]
    },

// ------------------------------------------------------ Challenge Functions

    {
        id: 4,
        text: "Challenge",
        dialogue: "Ivar: If I want to live here, I need to win their favour...",
        options: [
            {
                text: "Bjorn",
                nextText: 23,
            },
            {
                text: "Astrid",
                nextText: 24,
            },
            {
                text: "Sigurd",
                nextText: 25,
            },
            {
                text: "Back",
                nextText: 26,
            },
        ]
    },
// ----------------------------------------- Bjorn Gift Functions
    {
        id: 23,
        text: "Give Bjorn:",
        dialogue: "Bjorn: What is it, boy?",
        options: [
            {
                text: "Sword",
                nextText: 26,
            },
            {
                text: "Axe",
                nextText: 27,
            },
            {
                text: "Gold",
                nextText: 28,
            },
            {
                text: "More",
                nextText: 29,
            }
        ]
    },
    {
        id: 29,
        text: "Give Bjorn:", 
        dialogue: "Bjorn: What is it, boy?",        
        options: [
            {
                text: "Paint",
                nextText: 30,
            },
            {
                text: "Painted Shield",
                nextText: 33,
            },
            {
                text: "Shield",
                nextText: 31,
            },
            {
                text: "Snacks",
                nextText: 32,
            },
            {
                text: "Back",
                nextText: 1,
            }
        ]   
    },

    // ----------------------------------------- Astrid Riddle Functions
    
    // 24 is astrid dialogue and leads onto 34
    {
        id: 24,
        dialogue: "Astrid: If you want to win my favour, you must prove your intellect. Answer these riddles three and you shall have what you desire.",
        text: "Are you ready to challenge Astrid?",
        options: [
            {
                text: "Yes",
                nextText: 34,
            },
            {
                text: "Later",
                nextText: 4,
            },
        ]
    },

    {
        id: 34,
        text: "What is your answer?",
        dialogue: "Astrid: I war with wind and waves, fighting both as I fall. Steadfast when still, yet should I move they're stronger than me. They tear me away, at once make me flee, and want to take what I try to protect. If my tail endures, they don't succeed. I'll resist if the stones hold me firm. Now hark my name.",
        options: [
            {
                text: "A Sail",
                nextText: 35,
            },
            {
                text: "A Windmill",
                nextText: 35,
            },
            {
                text: "An Anchor",
                nextText: 36,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },
    // 35 is fail question
    {
        id: 35,
        dialogue: "Astrid: Incorrect. I fear you aren't as wise as I hoped...",
        text: "You got it wrong. Try again?",
        options: [
            {
                text: "Yes",
                nextText: 24,
            },
            {
                text: "Later",
                nextText: 4,
            },
        ]
    },
    // 36 is correct answer and move onto next dialogue, then 39
    {
        id: 36,
        dialogue: "Astrid: Very good. Perhaps you are smarter than you seem. Are you ready for another?",
        text: "Are you ready for round two?",
        options: [
            {
                text: "Yes",
                nextText: 39,
            },
            {
                text: "Later",
                nextText: 4,
            },
        ]
    },

     {
        id: 39,
        text: "What is your answer?",
        dialogue: "Astrid: I am both friend and foe. I hurt men and hinder words, yet elevate spirits and speech. We will laugh together, yet you’ll never remember come dawn. Can you solve, oh weary traveler, this riddle?",
        options: [
            {
                text: "Ale",
                nextText: 40,
            },
            {
                text: "A Harpy",
                nextText: 35,
            },
            {
                text: "A Tory Politician",
                nextText: 35,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },
    //40 is correct answer and move onto next dialogue, then 43
    {
        id: 40,
        dialogue: "Astrid: Superb. You have quite the mind on you. Are you ready for the last riddle?",
        text: "Are you ready for round three?",
        options: [
            {
                text: "Yes",
                nextText: 43,
            },
            {
                text: "Later",
                nextText: 4,
            },
        ]
    },

     {
        id: 43,
        text: "What is your answer?",
        dialogue: "Astrid: Final riddle... Alone I battle, wounded by steel, weary of war. All I see is savage fighting. No assistance will come for my cursed self. Struck by both friend and foe brings resolve for all but me, whose wounds grow ever wider. I demise amidst men, yet the herbs that aid those shalt never cure me. What am I?",
        options: [
            {
                text: "A Soldier",
                nextText: 35,
            },
            {
                text: "A Shield",
                nextText: 45,
            },
            {
                text: "A Sword",
                nextText: 35,
            },
            {
                text: "Give Up",
                nextText: 2,
            }
        ]
    },
    //45 is correct answer and grants Astrid Pleased state
    {
        id: 45,
        dialogue: "Astrid: Bravo! You have exceeded my expectations. Very well, traveller, you have my approval.",
        text: "Are you ready for round three?",
        options: [
            {
                text: "Continue",
                nextText: 1,
            },
        ]
    },

    // ----------------------------------------- Sigurd Weapon Functions

    
// ------------------------------------------------------ Look at Functions

    
]

startGame()