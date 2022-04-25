const choices = ["Rock", "Paper", "Scissors"]
//works!
function computerPlay() {
    pick = choices[Math.floor(Math.random() * choices.length)];
    return pick;
}

//console.log(computerPlay());

