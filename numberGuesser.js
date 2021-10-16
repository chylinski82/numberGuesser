let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const getAbsoluteDistance = (x, y) => {
  return Math.abs(x - y)
}


const compareGuesses = (p, c, t) => {
  if (getAbsoluteDistance(p, t) <= getAbsoluteDistance(c, t)) {
    return true
  } else {
    return false
  }
}

//console.log(generateTarget())
//console.log(compareGuesses(3, 7, 6))

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore ++
  }
  if (winner === 'computer') {
    computerScore ++
  }
}

const advanceRound = () => {
  return currentRoundNumber ++
}

//advanceRound()
//console.log(currentRoundNumber)