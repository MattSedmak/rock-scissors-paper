window.onload = () => {
  let playBtn = document.getElementById("playBtn");
  playBtn.addEventListener("click", playGame);
};

const computerElements = ["rock", "paper", "scissors"];

function playGame() {
  let computerChoice =
    computerElements[Math.floor(Math.random() * computerElements.length)];

  let playerChoice = document.getElementById("player_choice").value;
  let gameResult = document.getElementById("gameResult");
  gameResult.innerHTML = "";

  document.getElementById("com_result").innerHTML = computerChoice;

  if (playerChoice === computerChoice) {
    gameResult.innerHTML = "it's a draw!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    gameResult.innerHTML = "player wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    gameResult.innerHTML = "Player wins";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    gameResult.innerHTML = "Player wins";
  } else {
    gameResult.innerHTML = "computer wins";
  }
}
