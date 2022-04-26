const choices = ["Rock", "Paper", "Scissors"]
//works!
function computerPlay() {
    pick = choices[Math.floor(Math.random() * choices.length)];
    return pick;
}

//console.log(computerPlay());


const computerSelection = computerPlay();
const playerSelection = "Scissors"
//console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    switch (playerSelection + computerSelection) {
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            result = ("Player wins");
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            result = ("Player lost!");
            break;
        case "PaperPaper":
        case "RockRock":
        case "ScissorsScissors": 
            result = ("Draw!");
            break;
    }
    return result;
    
}

playRound(playerSelection, computerSelection);
console.log(result);






