const textElement = document.getElementById('choice');
const optionButtonsElement = document.getElementById('option-buttons');
const dialogueTextElement = document.getElementById('dialogue');

let state = {};

// Sets the game at 0 with state of all members of the High Council not pleased

function startGame() {
    state = {
        BjornPleased: false, 
        SigurdPleased: false, 
        AstridPleased: false, 
        hasPaintedShield: false
    };
    show = showTextNode(0);
}

// Once all members of the High Council are pleased, the game should move onto ID 300 and the win state

function GameComplete() {
    state = {
        BjornPleased: true, 
        SigurdPleased: true, 
        AstridPleased: true
    };
    show = showTextNode(300);
}

// Uses the ID tree below to bring the correct node ID

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    dialogueTextElement.innerText = textNode.dialogue;
    while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  // Expands and reduces number of buttons if the answers require it

  textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

// starts the game if the textNodeID is equal to or less than 0, and ends the game once the three states are met

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    } else if (state == {BjornPleased: true, SigurdPleased: true, AstridPleased: true}) {
        return GameComplete();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

// Stops dialogue from sitting in the dialogue box after a new decision is selected

function showDialogue() {
    if (textNode.dialogue === "") {
        dialogue-box.display; "none";
    } else {
        dialogue-box.display; "block";
    }
}

// function PaintedShield() {  if (textNodeId == 88)   set (hasPaintedShield: true)   }

// Add jQuery to fix the DOM stuff
// Add if else statements to get the states right.

// ------------------------------------------------------ Button Options

const textNodes = [
    {
        id: 0,
        text: "You stand among the Jarl and his High Council.",
        dialogue: "Jarl Bjorn: You boy, I have not seen you here before. What do you want?",
        options: [
            {
                text: "Ask to live in their settlement.",
                nextText: 1,
            },
        ]
    },
    {
        id: 1,
        text: "Who will you talk to?",
        dialogue: "Jarl Bjorn: You want to live in my settlement? Show us why we should have you!",
        options: [
            {    text: "Bjorn",     nextText: 2,    },
            {    text: "Astrid",    nextText: 3,    },
            {    text: "Sigurd",    nextText: 4,    },
            {    text: "Give Up",   nextText: 5,    },
        ]
    },

// ------------------------------------------------------ Talk To Functions

    {
        id: 2,
        text: "Talk to Bjorn:",
        dialogue: "Ivar: Can I live here?",
        options: [
            {    text: "Yes",    setState: { BjornPleased: true },    nextText: 10,    },
            {    text: "No",     nextText: 1,    },
        ]
    }, 
    {
        id: 3,
        text: "Talk to Astrid:",
        dialogue: "Ivar: Can I live here?",
        options: [
            {    text: "Yes",    setState: { AstridPleased: true },    nextText: 11,    },
            {    text: "No",     nextText: 1,    },
        ]
    },  
    {
        id: 4,
        text: "Talk to Sigurd:",
        dialogue: "Ivar: Can I live here?",
        options: [
            {    text: "Yes",    setState: { SigurdPleased: true },    nextText: 12,    },
            {    text: "No",     nextText: 1,    },
        ]
    },  
    {
        id: 5,
        text: "Give In?",
        dialogue: "",
        options: [
            {    text: "Yes",    nextText: 200,    },
            {    text: "No",     nextText: 1,    },
        ]
    },    


    {
        id: 10,
        text: "Continue",
        dialogue: "Bjorn: Yes that's fine with me. Welcome",
        options: [
            {    text: "Yes",    nextText: 1,    },    
        ]
    },  
    {
        id: 11,
        text: "Continue",
        dialogue: "Astrid: Okay. Welcome",
        options: [
            {    text: "Yes",    nextText: 1,    },
        ]
    },
    {
        id: 12,
        text: "Continue",
        dialogue: "Sigurd: Very well. Welcome",
        options: [
            {    text: "Yes",    nextText: 1,    },    
        ]
    },


//------------------------------------------ Game Over Function

    {
        id: 200,
        text: "Would you like to try again?",
        dialogue: "Narrator: And so ends Ivar's tale.",
        options: [
            {    text: "Yes",    nextText: 1,    },
            {    text: "No",     nextText: 1,    },
        ]
    },

//------------------------------------------ Game Complete Function

    {
        id: 300,
        text: "Would you like to play again?",
        dialogue: "Bjorn: Congratulations, boy. It seems you’ve won the favour of the High Council. You and your family may live here so long as you desire.",
        options: [
            {    text: "Yes",    nextText: 1,    },
            {    text: "No",     nextText: 1,    },
        ]
    },
]

startGame()
