/* console.log("Hello World")

function getComputerChoice () {
    const random =Math.random();

    if (random <1/3) {
        return "rock";
     } else if (random <2/3) {
            return "paper";
        } else {
            return "scissors";
    }
}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())

for (let i = 0; i < 30; i++) console.log(getComputerChoice());

function getHumanChoice () {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}

let humanScore = 0;
let computerScore = 0;
console.log(humanScore, computerScore)


function playRound(humanChoice, computerChoice) {
  // Make human choice case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore);
console.log(humanScore, computerScore);
console.log(humanScore, computerScore);
console.log(humanScore, computerScore);

// playRound("rock", "scissors");    You win
// playRound("paper", "rock");       You win
// playRound("scissors", "paper");   You win
// playRound("rock", "paper");   You lose

function getComputerChoice() {
  const random = Math.random();
  if (random < 1/3) {
    return "rock";
  } else if (random < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  // Declare final winner
  console.log("=== Final Result ===");
  if (humanScore > computerScore) {
    console.log(`🎉 You win the game! Final score: ${humanScore} - ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`💻 Computer wins the game! Final score: ${humanScore} - ${computerScore}`);
  } else {
    console.log(`🤝 It's a tie game! Final score: ${humanScore} - ${computerScore}`);
  }
}

playGame(); 

function getComputerChoice() {
  const random = Math.random();
  if (random < 1/3) {
    return "rock";
  } else if (random < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const roundResultDiv = document.querySelector("#round-result");
const scoreDiv = document.querySelector("#score");
const finalWinnerDiv = document.querySelector("#final-winner"); */

// --- DOM elements ---
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundResultDiv = document.querySelector("#round-result");
const scoreDiv = document.querySelector("#score");
const finalWinnerDiv = document.querySelector("#final-winner");

// --- Score variables ---
let humanScore = 0;
let computerScore = 0;

// --- Computer choice ---
function getComputerChoice() {
  const random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// --- Play one round ---
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let message = "";

  if (humanChoice === computerChoice) {
    message = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    message = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    message = `You lose! ${computerChoice} beats ${humanChoice};
    computerScore++;`
  }

  roundResultDiv.textContent = message;
  scoreDiv.textContent = `Score → You: ${humanScore} | Computer: ${computerScore}`;

  checkForWinner();
}

// --- Check for a winner at 5 points ---
function checkForWinner() {
  if (humanScore === 5) {
    finalWinnerDiv.textContent = `You win the game! Final score: ${humanScore} - ${computerScore}`;
    disableButtons();
  } else if (computerScore === 5) {
    finalWinnerDiv.textContent = `Computer wins the game! Final score: ${humanScore} - ${computerScore}`;
    disableButtons();
  }
}

// --- Disable all buttons when game is over ---
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// --- Button click handlers ---
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});