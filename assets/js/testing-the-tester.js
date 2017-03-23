var grid =
  [null, null, null,
  null, null, null,
  null, null, null]
var currentPlayer = 1
var sum = grid.reduce(function(acc,val) {
  return acc + val
})

function restart() {
  grid = [null, null, null, null, null, null, null, null, null]
  currentPlayer = 1
} restart ()

function isGameOver () {
  switch (true) {
    case (grid[0] === grid[1] && grid[1] === grid[2]): return true
    break
    case (grid[0] === grid[4] && grid[4] === grid[8]): return true
    break
    case (grid[2] === grid[4] && grid[4] === grid[6]): return true
    break
    case (grid[3] === grid[4] && grid[4] === grid[5]): return true
    break
    case (grid[6] === grid[7] && grid[7] === grid[8]): return true
    break
    case (grid[0] === grid[3] && grid[3] === grid[6]): return true
    break
    case (grid[1] === grid[4] && grid[4] === grid[7]): return true
    break
    case (grid[2] === grid[5] && grid[5] === grid[8]): return true
    break
    default:
      return false
  }
} isGameOver ()

function playTurn () {
  if(isGameOver() !== true && sum === 3 || sum === 6 || sum === 9 || sum === 12) {
    return currentPlayer = 1
  } else if (isGameOver() !== true && sum === 1 || sum === 4 || sum === 7 || sum === 10) {
    return currentPlayer = 2
  } else if (isGameOver() !== true && grid[0] == null) {
    return currentPlayer = 1
  }

} playTurn ()

function whoWon () {
  if(isGameOver() === true) {
    return currentPlayer
  } else if(sum === 13) {
    return 3
  } else if (grid[index] === null){
    return 0
  }
} whoWon ()

// $("document").ready(function() {
//   $( ".grid" ).click(function() {
//     alert("hi");
//     playTurn()
//     var attr = $("this").attr("id")
//     grid[attr].push(currentPlayer)
//     console.log(grid)
//   })
// })
