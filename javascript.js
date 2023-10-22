let user_choice = 0
let computer_choice = 0
let ComputerScore = 0;
let UserScore = 0;

function playRound() {
    for (let i = 1; i <= 5; i++) {
        user_choice = getUserChoice();
        computer_choice = getComputerChoice();
        let result = winConditions();        
    if (result.includes('win')) {
        UserScore++;}
    else if (result.includes('lost')) {
        ComputerScore++;
    }   
        console.log(`Round ${i}: Computer chose ${computer_choice} it is a ${result}`)
    }         

    if (ComputerScore > UserScore) {
        return 'Computer WON'
    }
    else if (UserScore > ComputerScore) {
        return 'You WON'
    }
    else if (UserScore === ComputerScore) {
        return 'It is a draw, play again!'
    }
}

function getUserChoice() {
    user_choice = prompt('Choose Rock, Paper or Scissor');
    user_choice = user_choice.toLowerCase();    
    return user_choice;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let res;
    if (randomNumber === 0) {
        res = 'rock'
    }
    else if(randomNumber === 1) {
        res = 'paper'
    }
    else if(randomNumber === 2) {
        res = 'scissors'
    }

    return res 
}

function winConditions() {
    switch (user_choice+computer_choice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
        return 'win'
        break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
        return 'lost'
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        return 'draw';    
    }
}
