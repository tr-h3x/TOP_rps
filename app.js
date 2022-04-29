const choices = ["Rock", "Paper", "Scissors"]
//works!
function computerPlay() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//console.log(computerPlay());


const computerSelection = computerPlay();
const playerSelection = "Scissors";
console.log(playerSelection);
console.log(computerSelection);


//Switch was wrong expression. Use if/else instead.

function playGame(playerSelection, computerSelection) {
    game = playerSelection + computerSelection;
    results = "";
    if (game == "PaperRock" || game == "ScissorsPaper" || game == "RockScissors") {
        results = "Player wins!";
    } else if (game == "RockPaper" || game === "PaperScissors" || game == "ScissorsRock") {
        results = "Player loses!";
    } else {
        results = "Draw!";
    }
    console.log(results)
}

playGame(playerSelection, computerSelection);

