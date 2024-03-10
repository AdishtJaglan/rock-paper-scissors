const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
let isWinner = false;

rock.addEventListener("click", () => {
    singleRoundOfGame("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    singleRoundOfGame("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    singleRoundOfGame("scissors", getComputerChoice());
});

const whoWon = (someone) => {
    isWinner = true;
    const winner = document.querySelector(`#${someone}Winner`);
    winner.textContent = `${someone} has won!`;
};

const winnerCheck = (check, winner) => {
    if (check === winningScore) {
        isWinner = true;
        whoWon(winner);
    }
};

const getWinner = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a draw! Both chose ${playerSelection || computerSelection}!`;
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScoreDisplay.textContent = ++playerScore;
        winnerCheck(playerScore, "player");
    } else {
        computerScoreDisplay.textContent = ++computerScore;
        winnerCheck(computerScore, "computer");
    }
};

const singleRoundOfGame = (playerSelection, computerSelection) => {
    if (!isWinner) {
        getWinner(playerSelection, computerSelection);
    } else {
        return "Someone has won!";
    }
};

const getComputerChoice = () => {
    const choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random() * 3)];
};