window.onload = () => {
  player();
};

function player() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      playGame(e);
    });
  });
}

const computerOptions = ["rock", "scissors", "paper"];

function playGame(e) {
  let computerChoice =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];

  let playerChoice = e.target.id;
  let gameResult = document.querySelector(".game-result");
  // gameResult.innerHTML = "";

  document.getElementById("com-result").innerHTML =
    "Computer: " + computerChoice;

  if (playerChoice === computerChoice) {
    gameResult.innerHTML = "It's a draw!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    gameResult.innerHTML = "You win!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    gameResult.innerHTML = "You win!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    gameResult.innerHTML = "You win!";
  } else {
    gameResult.innerHTML = "Computer wins!";
  }
}
