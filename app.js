const choices = ["rock", "paper", "scissors"]
//works!
function computerPlay() {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//console.log(computerPlay());


const computerSelection = computerPlay();
const playerSelection = prompt("Type choice").toLowerCase();//now case-insensitive 
console.log(playerSelection);
console.log(computerSelection);


//Switch was wrong expression. Use if/else instead.

function playGame(playerSelection, computerSelection) {
    game = playerSelection + computerSelection;
    results = "";
    if (game == "paperrock" || game == "scissorspaper" || game == "rockscissors") {
        results = "Player wins!";
    } else if (game == "rockpaper" || game === "paperscissors" || game == "scissorsrock") {
        results = "Player loses!";
    } else {
        results = "Draw!";
    }
    console.log(results)
}

playGame(playerSelection, computerSelection);

