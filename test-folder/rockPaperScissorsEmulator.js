//rock, paper, scissors emulator

const getUserChoice = (userInput) => {
  const userInputLower = userInput.toLowerCase();
  if (userInputLower === 'rock' || userInputLower === 'paper' || userInputLower === 'scissors' || userInputLower === 'bomb') {
    return userInputLower;
  } else {
    return 'Error, Please try again';
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice.toLowerCase() === 'bomb') {
    return 'You are the master, You win.'
  }
  
  if (userChoice === computerChoice) {
    return 'Tie!'
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'You won!';
    }
  } 
  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You Won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer Won!'
    } else {
      return 'You won!';
    }
  }
  
    else {
      console.log('no match')
      console.log('userChoice', userChoice)
      console.log('computerChoice', computerChoice)
    }
}
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  	console.log('You threw: ' + userChoice);
  	console.log('The computer threw : ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();


            






            



