function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // if game finishes (one of players have reached to 5pts) prevent to continue
  if (humanScore === 5 || computerScore === 5) return;

  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  resultParagraph.textContent = resultMessage;
  scoreParagraph.textContent = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;

  // winner control
  if (humanScore === 5) {
    winnerParagraph.textContent =
      "🎉 Congratulations! You are the ultimate winner of the game!";
    winnerParagraph.style.color = "green";
    disableButtons();
  } else if (computerScore === 5) {
    winnerParagraph.textContent = "🤖 Game Over! The Computer won the game.";
    winnerParagraph.style.color = "red";
    disableButtons();
  }

  // Append elements into div
  scoreDiv.textContent = "";
  scoreDiv.appendChild(resultParagraph);
  scoreDiv.appendChild(scoreParagraph);
  if (humanScore === 5 || computerScore === 5) {
    scoreDiv.appendChild(winnerParagraph);
  }
}

// Funstion that disables buttons
const disableButtons = () => {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
};

// Create DOM elements
const rockButton = document.createElement("button");
rockButton.textContent = "rock";

const paperButton = document.createElement("button");
paperButton.textContent = "paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

const scoreDiv = document.createElement("div");
scoreDiv.style.marginTop = "1rem";
scoreDiv.textContent = "Choose an option to start the game!";

const resultParagraph = document.createElement("p");
const scoreParagraph = document.createElement("p");
const winnerParagraph = document.createElement("p");
winnerParagraph.style.fontWeight = "bold";

document.body.appendChild(rockButton);
document.body.append(paperButton);
document.body.append(scissorsButton);
document.body.append(scoreDiv);

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice()),
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice()),
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice()),
);
