
function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("What is your choice? Paper, rock op scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == "rock" && playerSelection == "scissors") {
        return ("You lost!");
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return ("You win!");
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return ("You lost!");
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return ("You win!");
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return ("You win!");
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return ("You lost!");
    }
    else if (computerSelection == playerSelection) {
        return ("Tie!");
    }
    else {
        return ("Wrong input");
    }
}

function game() {
    playerWin = 0;
    computerWin = 0;
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 99; i++) {
        let round = playRound(playerSelection, computerSelection);

        if (round == "You win!") {
            console.log(round);
            playerWin++;
        }
        else if (round == "You lost!") {
            console.log(round);
            computerWin++;
        }
        else {
            console.log(round);
        }

        if (playerWin == 3) {
            console.log("YOU WON!");
            break;
        }
        else if (computerWin == 3) {
            console.log("YOU LOST!")
            break;
        }
    }
}

game();