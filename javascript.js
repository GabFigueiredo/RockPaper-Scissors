let user_choice
let computer_choice

function playRound() {
    let ComputerScore
    let UserScore
    for (let i = 0; i <= 5; i++) {
    user_choice = getUserChoice();
    computer_choice = getComputerChoice();
    let result = game()
    
    if (result.includes('win')) {
        UserScore++
        return 'Round ${i}: You win!'+{user_choice}+'beats'+{computer_choice};} 
    else if (result.includes('lose')) {
        ComputerScore++
        return `Round ${i}: You lose! ${computer_choice}+ beats +${user_choice}`}
        }
    
}

let test = `Round ${i}: You lose! ${computer_choice}+ beats +${user_choice}`