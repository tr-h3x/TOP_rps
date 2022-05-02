const choices = ["rock", "paper", "scissors"]

function computerPlay() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//console.log(computerPlay());


let computerSelection = computerPlay();
let playerSelection = "rock";
//console.log(playerSelection);
//console.log(computerSelection);


//Switch was wrong expression. Use if/else instead. 

function playRound(playerSelection, computerSelection) {
    match = playerSelection + computerSelection;
    results = "";
    if (match === "paperrock" || match === "scissorspaper" || match === "rockscissors") {
        results = "Player wins!";
    } else if (match === "rockpaper" || match === "paperscissors" || match === "scissorsrock") {
        results = "Player loses!";
    } else {
        results = "Draw!";
    }
    return results;
}                 


//game() finally runs 5 times correctly. Had to pass arguments in playRound() in both functions
function game() {
   
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("type:").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();


















