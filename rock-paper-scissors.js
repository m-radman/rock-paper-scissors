const ALL_CHOICES = ["rock", "paper", "scissors"];
const choices = document.querySelectorAll("button");
const start = document.getElementById("start");
start.addEventListener("click", () => game());
let playerWinCounter = 0;
let computerWinCounter = 0;

const disableControls = () => {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

const enableControls = () => {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function resetGame() {
    playerWinCounter = 0, computerWinCounter = 0
    document.getElementById("computer-score").textContent = `Computer: ${computerWinCounter}`;
    document.getElementById("player-score").textContent = `Player :${playerWinCounter}`;
    enableControls();
}

disableControls();

document.getElementById("new-game").addEventListener("click", () => resetGame());

function getComputerChoice() {
    const choiceIndex = Math.floor(Math.random() * ALL_CHOICES.length);
    return ALL_CHOICES[choiceIndex];
};

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // todo: refactor if else mess, replace with switch? 
    // switch (computerSelection) {
    //     case "rock":

    //     case "paper":

    //     case "scissors":

    //     default:
    //         throw new Error("Invalid computer selection!");
    // };

    if (computerSelection == "rock" && playerSelection == "scissors") {
        document.getElementById("info").textContent = ("Scissors lose to rock!");
        return document.getElementById("computer-score").textContent = `Computer: ${++computerWinCounter}`;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        document.getElementById("info").textContent = ("Paper beats rock!");
        return document.getElementById("player-score").textContent = `Player: ${++playerWinCounter}`;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        document.getElementById("info").textContent = ("Rock lose to paper!");
        return document.getElementById("computer-score").textContent = `Computer: ${++computerWinCounter}`;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        document.getElementById("info").textContent = ("Scissors beats paper!");
        return document.getElementById("player-score").textContent = `Player: ${++playerWinCounter}`;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        document.getElementById("info").textContent = ("Rock beats scissors!");
        return document.getElementById("player-score").textContent = `Player: ${++playerWinCounter}`;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        document.getElementById("info").textContent = ("Paper lose to scissors!");
        return document.getElementById("computer-score").textContent = `Computer: ${++computerWinCounter}`;
    }
    else if (computerSelection == playerSelection) {
        return document.getElementById("info").textContent = ("Tie!");
    };
};

function game() {

    enableControls();

    choices.forEach((choice) => choice.addEventListener("click", () => {
        playRound(choice.id)

        if (playerWinCounter == 5) {
            disableControls();

            return document.getElementById("info").textContent = ("YOU WON!");
        }
        else if (computerWinCounter == 5) {
            disableControls();

            return document.getElementById("info").textContent = ("YOU LOST!")
        };

    }));

};