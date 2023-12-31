let computer_choice = ''
let ComputerScore = 0;
let UserScore = 0;
let i = 1;

// Função que inicia o round
function playRound() {
    computer_choice = getComputerChoice();
    let result = winConditions();

    if (result.includes('win')) {
        UserScore++;
    } else if (result.includes('defeat')) {
        ComputerScore++;
    } 

    console.log(`Round ${i}: Computer chose ${computer_choice} it is a ${result}`);
    
    const homeTeam = document.getElementById('homeTeam');
        homeTeam.innerHTML = UserScore;

    const awayTeam = document.getElementById('awayTeam');
       awayTeam.innerHTML = ComputerScore;
    
    const message = document.getElementById('message')
        message.innerHTML = `Round ${i}: Computer chose ${computer_choice} it is a ${result}`;
        i++

    if (ComputerScore === 3) {
        console.log('Computer WON');
        message.innerHTML = 'Computer WON';
        ComputerScore = 0;
        UserScore = 0;
        i = 1
        
    }
    else if (UserScore === 3) {
        console.log('You WON');
        message.innerHTML = 'User WON'
        UserScore = 0;
        ComputerScore = 0;
        i = 1
    }
}

// Função da escolha aleatória
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

// Função que determina o resultado
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
        return 'defeat'
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        return 'draw';    
    }
}



const teste = 'kkkk foi peggy'
