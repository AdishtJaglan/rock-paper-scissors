const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random() * 3)];
};

let playerScore = 0;
let computerScore = 0;

const singleRoundOfGame = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `Player wins! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        playerChoice = window.prompt("Rock, paper or scissors?");
        console.log(singleRoundOfGame(playerChoice, getComputerChoice()));
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
};

playGame();