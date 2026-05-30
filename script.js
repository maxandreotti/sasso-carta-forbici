
let humanScore = 0;
let computerScore = 0;

function getRandom() {
  return Math.random();
}

function getComputerChoice() {
  let random = getRandom();
  let computer;
  if (random > 0.666){   
    computer = "rock";
  } else if (random > 0.333) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  return computer;
}

function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors?","");
  let human = choice.toLowerCase();
  return human;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "paper" && humanChoice == "rock"
    || computerChoice === "scissors" && humanChoice == "paper") {
      computerScore++;
      alert("Computer win this round!");
    }
  if (computerChoice === "rock" && humanChoice === "paper"
    || computerChoice === "paper" && humanChoice === "scissors"
    || computerChoice === "scissors" && humanChoice === "rock") {
      humanScore++;
      alert("You win this round!");
    }
  if (computerChoice === "rock" && humanChoice === "rock"
    || computerChoice === "paper" && humanChoice === "paper"
    || computerChoice === "scissors" && humanChoice === "scissors") {
      alert("Draw!");
    }
  console.log(`Computer: ${computerScore}, You: ${humanScore}`)
}

function playGame() {
  for (let i=0; i<5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    alert("You Win the Game!");
  } else if (humanScore < computerScore) {
    alert("You Lost the Game!");
  } else {
    alert("You Draw the Game!");
  }
}

playGame();
