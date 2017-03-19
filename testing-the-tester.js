/*

[X, X, X
0, 0]

git add
git commit -am "  "
git push origin master



function restart () {
}

function isGameOver () {
  return false
}

function whoWon () {
  return 0
}

function playTurn() {

}

# playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

# isGameOver()
It should return a true or false if the game is over.

# whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

# restart()
It should restart the game so it can be played again.

It is assumed that the turns of the player will be automatically changed after an allowed move.

The application will console log all the passed or failed test */


var gameBoard =
  [0, 1, 2,
  3, 4, 5,
  6, 7, 8]
var player = 0
var draw = 0

function restart() {
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  player = 1
  draw = 0
}

function winningSwitch () {
  switch (true) {
    case (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]): return true
    break
    case (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]): return true
    break
    case (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]): return true
    break
    case (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]): return true
    break
    case (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]): return true
    break
    case (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]): return true
    break
    case (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]): return true
    break
    case (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]): return true
    break
    default:
      return false
  }
}

function isGameOver () {
  if (winningSwitch() === true && player != 0) {
    return true
  } else {
    return false
  }
}

function whoWon () {
  if(isGameOver() === true && player === 1) {
    alert("Player 1 has won!")
    return 1
  } else if(isGameOver() === true && player === 2) {
    alert("Player 2 has won!")
    return 2
  } else if(draw === true) {
    alert("Its a draw!")
    return 3
  } else {
    return 0
  }
}

//Not sure how to structure playTurn..
function playTurn(index) {

}
