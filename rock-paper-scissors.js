
function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[choiceIndex];
}