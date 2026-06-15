
const sasso = document.querySelector("#sasso");
const carta = document.querySelector("#carta");
const forbici = document.querySelector("#forbici");
const risultatoRound = document.querySelector("#risultatoRound");
const storico = document.querySelector("#storico");
const risultatoFinale = document.querySelector("#risultatoFinale");
const reset = document.querySelector("#reset");


let humanScore = 0;
let computerScore = 0;
let round = 1;

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

sasso.addEventListener("click", () => {
    playRound("rock");
  
})

carta.addEventListener("click", () => {
    playRound("paper");
})

forbici.addEventListener("click", () => {
    playRound("scissors");
})

reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  sasso.disabled = false;
  forbici.disabled = false;
  carta.disabled = false;
  storico.innerHTML = "Risultati:";
  risultatoRound.textContent = "";
  risultatoFinale.textContent = "";
})

function finePartita() {
  sasso.disabled = true;
  carta.disabled = true;
  forbici.disabled = true;
  if (computerScore === 5) {
    risultatoFinale.textContent = "Il computer ha vinto! Ritenta, sarai più fortunato!"
  } else {
    risultatoFinale.textContent = "Congratulazioni hai vinto!"
  }
}


function playRound(scelta) {
  const computerChoice = getComputerChoice();
  if (computerChoice === "rock" && scelta === "scissors"
    || computerChoice === "paper" && scelta === "rock"
    || computerChoice === "scissors" && scelta === "paper") {
      computerScore++;
      roundPerso();
  
    }
  if (computerChoice === "rock" && scelta === "paper"
    || computerChoice === "paper" && scelta === "scissors"
    || computerChoice === "scissors" && scelta === "rock") {
    humanScore++;
    roundVinto();
  }
  if (computerChoice === "rock" && scelta === "rock"
    || computerChoice === "paper" && scelta === "paper"
    || computerChoice === "scissors" && scelta === "scissors") {
      roundPareggiato();
    }
  if (computerScore === 5 || humanScore === 5) {
    finePartita();
  }
  }
      
function roundPerso() {
  risultatoRound.textContent = "Il computer ha vinto questo Round!";
  const li = document.createElement("li");
  storico.appendChild(li);
  li.textContent = `Round ${round}: Computer: ${computerScore}, Tu: ${humanScore}`;
  round++;
}

function roundVinto() {
  risultatoRound.textContent = "Hai vinto questo Round!";
  const li = document.createElement("li");
  storico.appendChild(li);
  li.textContent = `Round ${round}: Computer: ${computerScore}, Tu: ${humanScore}`;
  round++;
}

function roundPareggiato() {
  risultatoRound.textContent = "Hai pareggiato questo Round!";
  const li = document.createElement("li");
  storico.appendChild(li);
  li.textContent = `Round ${round}: Computer: ${computerScore}, Tu: ${humanScore}`;
  round++;
}


      
      
      
      
      
      