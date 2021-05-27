let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// step 3 //
const generateTarget = number => {
    return Math.floor(Math.random() * 10);
};

// step 4 //
let compareGuess = (humanGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(humanGuess - secretTargetNumber) < Math.abs(computerGuess - secretTargetNumber)) {
      return true;
  } else if (Math.abs(computerGuess - secretTargetNumber) < Math.abs(humanGuess - secretTargetNumber)) {
      return false;
  } else {
      return true;
  }
};

// step 5 //

let updateScore = winner => {
    if (winner === 'human') {
        humanScore +=1;
    } else if (winner === 'computer') {
        computerScore +=1;
    } else {
        return humanScore +=1;
    }
};

function advanceRound() {
    currentRoundNumber +=1;
};