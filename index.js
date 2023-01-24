const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  const paperImgPath = "./images/paper.png"
  const rockImgPath = "./images/rock.png"
  const scissorsImgPath = "./images/scissors.png"

  const moveMap = new Map([
    ["rock", rockImgPath],
    ["paper", paperImgPath],
    ["scissors", scissorsImgPath],
  ]);
  const playerOneImgId = "player-one-move__img";
  const playerTwoImgId = "player-two-move__img";

  document.getElementById(playerOneImgId).src = moveMap.get(moveOne);
  document.getElementById(playerTwoImgId).src = moveMap.get(moveTwo);
  const pTag = document.createElement("p");
  pTag.setAttribute("id", "outcome");
  pTag.innerHTML = outcome;

  document.body.append(pTag);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
