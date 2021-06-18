let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    let targetNumber = Math.floor(Math.random() * 9)
    return targetNumber;
}

const compareGuesses = (userGuess, botGuess, targetNumber) => {
    if (Math.abs(userGuess - targetNumber) < Math.abs(botGuess - targetNumber)) {
      return true;
  } else {
      return false;
  }
}

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
}

const advanceRound = () => currentRoundNumber += 1;