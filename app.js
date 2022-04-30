const choices = ["rock", "paper", "scissors"]
//works!
function computerPlay() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//console.log(computerPlay());


const computerSelection = computerPlay();
//const playerSelection = prompt("Type choice").toLowerCase();//now case-insensitive 
const playerSelection = "rock";
console.log(playerSelection);
console.log(computerSelection);


//Switch was wrong expression. Use if/else instead. 

function playRound() {
    match = playerSelection + computerSelection;
    results = "";
    if (match == "paperrock" || match == "scissorspaper" || match == "rockscissors") {
        results = "Player wins!";
    } else if (match == "rockpaper" || match === "paperscissors" || match == "scissorsrock") {
        results = "Player loses!";
    } else {
        results = "Draw!";
    }
    console.log(results) // change to return after testing finished
}

//playRound();

function game() {
    playRound();
    for (let i = 0; i < 5; i++) {
        console.log(playRound(i));
    }
}

console.log(game());


















