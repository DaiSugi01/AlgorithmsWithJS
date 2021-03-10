// Given a 3x3 matrix of a completed tic-tac-toe game, 
// create a function that returns whether the game is a win for "X", "O", or a "Draw", where "X" and "O" 
// represent themselves on the matrix, and "E" represents an empty spot.
const ticTacToe = (gameResultArr) => {

  let gameResult = "";

  // Check each cross
  let crossStr = ""
  crossStr = gameResultArr[0][0] + gameResultArr[1][1] + gameResultArr[2][2];
  gameResult = checkResult(crossStr);
  if (gameResult) { return gameResult };

  crossStr = gameResultArr[0][2] + gameResultArr[1][1] + gameResultArr[2][0];
  gameResult = checkResult(crossStr);
  if (gameResult) { return gameResult };

  // Check row and column
  let rowStr = "";
  let colomunStr = "";

  for (let i = 0; i < gameResultArr.length; i++) {

    // Check each row
    rowStr = [...gameResultArr[i]].join("");
    gameResult = checkResult(rowStr);
    if (gameResult) { return gameResult };

    // Check each column
    colomunStr = gameResultArr[0][i] + gameResultArr[1][i] + gameResultArr[2][i];
    checkResult(colomunStr);
    if (gameResult) { return gameResult };
  };

  return "Draw";
}

const checkResult = (result) => {
  if (result === "XXX") {
    return "X"
  } else if (result === "OOO") {
    return "O"
  } else {
    return ""
  }
}

//  ➞ "X"
console.log(ticTacToe([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
]));

// ➞ "O"
console.log(ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]));

// ➞ "Draw"
console.log(ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]));