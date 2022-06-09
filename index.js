
//Prompts for generating game ideas.
var promptA;
var promptB;

function initialise() {
    promptA = [];
    promptB = [];

    // Themes
    promptA[0] = "Horrible Horses";
    promptA[1] = "The Sims 6";
    promptA[2] = "Fancy Footwork";

    // Genres
    promptB[0] = "Puzzle Game";
    promptB[1] = "Battle Royale";
    promptB[2] = "Real Time Strategy";
}

function getPrompt(){
    let newPromptA = document.getElementById("prompt-a");
    let newPromptB = document.getElementById("prompt-b");

    initialise();
    
    let a = randomIndex(promptA);
    let b = randomIndex(promptB);

    newPromptA.innerHTML = promptA[a];
    newPromptB.innerHTML = promptB[b];
}

function randomIndex(array) {
    let currentIndex = array.length,  
        randomIndex;

    randomIndex = Math.floor(Math.random() * currentIndex);

    return randomIndex;
}