
function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[choiceIndex];
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection == "rock" && playerSelection == "scissors") {
        return ("You lost! Rock beats scissors.");
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return ("You win! Paper beats rock.");
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return ("You lost! Paper beats rock.");
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return ("You win! Scissors beats paper.");
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return ("You win! Rock beats scissors.");
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return ("You lost! Scissors beats paper.");
    }
    else if (computerSelection == playerSelection) {
        return ("Tie!");
    }
    else {
        return ("Wrong input");
    }
}

computerSelection = getComputerChoice();

playerSelection = (prompt("What is your choice? Paper, rock op scissors?")).toLowerCase();

console.log(playRound(playerSelection, computerSelection));