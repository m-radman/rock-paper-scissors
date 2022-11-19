let computerSelection = getComputerChoice();
const choices = document.querySelectorAll("button");
const start = document.getElementById("start");
start.addEventListener("click", () => game());
let playerWin = 0;
let computerWin = 0;

document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;

document.getElementById("new-game").addEventListener("click", () => {
        playerWin = 0, computerWin = 0
        document.getElementById("computer-score").textContent = `Computer: ${computerWin}`;
        document.getElementById("player-score").textContent = `Player :${playerWin}`;
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
    });

function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[choiceIndex];
};

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    if (computerSelection == "rock" && playerSelection == "scissors") {
        document.getElementById("info").textContent =("You lose!");
       return document.getElementById("computer-score").textContent = `Computer: ${++computerWin}`;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        document.getElementById("info").textContent = ("You win!");
        return document.getElementById("player-score").textContent = `Player :${++playerWin}`;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        document.getElementById("info").textContent = ("You lose!");
        return document.getElementById("computer-score").textContent = `Computer: ${++computerWin}`;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        document.getElementById("info").textContent = ("You win!");
        return document.getElementById("player-score").textContent = `Player :${++playerWin}`;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        document.getElementById("info").textContent = ("You win!");
        return document.getElementById("player-score").textContent = `Player :${++playerWin}`;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        document.getElementById("info").textContent = ("You lose!");
        return document.getElementById("computer-score").textContent = `Computer: ${++computerWin}`;
    }
    else if (computerSelection == playerSelection) {
        return document.getElementById("info").textContent = ("Tie!");
    };
};

function game() {

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    
    choices.forEach((choice) => choice.addEventListener("click", () => { playRound(choice.id, computerSelection)
    
        if (playerWin == 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

            return document.getElementById("info").textContent = ("YOU WON!");
        }
        else if (computerWin == 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

            return document.getElementById("info").textContent = ("YOU LOST!")
        };
    
    }));

};