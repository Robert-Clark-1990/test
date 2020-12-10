const textElement = document.getElementById('choice');
const optionButtonsElement = document.getElementById('option-buttons');
const dialogueTextElement = document.getElementById('dialogue');

let state = {};

// Sets the game at 0 with state of all members of the High Council not pleased, no painted shield, and all other inventory items set to true

function startGame() {
    state = {};
    show = showTextNode(0);
}

// Once all members of the High Council are pleased, the game should move onto ID 300 and the win state

function GameComplete() {
    show = showTextNode(300);
}

// Uses the ID tree below to bring the correct node ID

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    dialogueTextElement.innerText = textNode.dialogue;
// Expands and reduces number of buttons as necessary
    while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

// Returns the correct text response to the buttons

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

var Bjorn = {
    pleased: 0,
};

BjornPleased = Bjorn.pleased()

var Astrid = {
    pleased: 0,
};

AstridPleased = Astrid.pleased()

// Before I completely forget what I'm trying to do here, I want to make it so that when the correct option is picked, it increases the value of the variable Bjorn pleased from 0 to 1
// This in turn should then increase the BjornPleased, which will make it register in the function below.
// Then finally when the selectOption function is (councilPleased >= 2) it will achieve the GameComplete

function councilPleased() {
    if (BjornPleased = 1) {
        return 1;
    }
    else if (AstridPleased = 1) {
        return 1;
    }
};

// starts the game if the textNodeID is equal to or less than 0, and ends the game once the three states are met

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    } else if (councilPleased >= 2 ) {
        return GameComplete();
    }
    // takes the state we have currently, adds everything from option.setState, and overrides everything in the state
    // ie if BjornPleased is true in state, but false in option.setState, it will set it to false in our state
    // This will return a brand new object and set it to our current state
    //             state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

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
        text: "Talk to?",
        dialogue: "Jarl Bjorn: You want to live in my settlement? Show us why we should have you!",
        options: [
            {   text: "Bjorn",      nextText: 2, },
            {   text: "Astrid",     nextText: 4, },
        ]
    },

// ------------------------------------------------------ Talk To Functions

    {
        id: 2,
        text: "Talk to Bjorn:",
        dialogue: "Would you like to live here?",
        options: [
            {   text: "Yes",   nextText: 5,   },
            {   text: "No",    nextText: 1,   },
        ]
    },
    {
        id: 4,
        text: "Talk to Astrid:",
        dialogue: "Would you like to live here?",
        options: [
            {   text: "Yes",   nextText: 7,   },
            {   text: "No",    nextText: 1,   },
        ]
    },
    {
        id: 5,
        text: "Continue",
        dialogue: "Great. Happy to have you",
        
        options: [
            {   text: "Yes",    BjornPleased: 1,   nextText: 1,   },
        ]
    },
    {
        id: 7,
        text: "Continue",
        dialogue: "Great. Happy to have you",
        
        options: [
            {   text: "Yes",    AstridPleased: 1,   nextText: 1,    },
        ]
    },
    {
        id: 300,
        text: "Game Complete",
        dialogue: "Well done!!!!",
        options: [
            {   text: "Yes",    nextText: 1,    },
        ]
    },
]

startGame()