window.onload = () => {
  player();
};

function player() {
  const buttons = document.querySelectorAll(".btn");
  let playerOption = document.querySelector("#player-option");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playerOption.innerHTML = e.target.id;
      playGame(e);
    });
  });
}

const computerOptions = ["rock", "paper", "scissors"];

function playGame(e) {
  let computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];

  let playerChoice = e.target.id;
  let gameResult = document.getElementById("gameResult");
  gameResult.innerHTML = "";

  document.getElementById("com_result").innerHTML = computerChoice;

  if (playerChoice === computerChoice) {
    gameResult.innerHTML = "it's a draw!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    gameResult.innerHTML = "You win";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    gameResult.innerHTML = "You win";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    gameResult.innerHTML = "You win";
  } else {
    gameResult.innerHTML = "computer wins";
  }
}
