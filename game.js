function computerChoice() {
    randNum = Math.floor(Math.random()*3);
    if (randNum===0) 
        return 'rock';
    else if (randNum===1)
        return 'paper';
    else
        return 'scissors';
}

function playerChoice() {
    return prompt('Enter your choice:').toLowerCase();
}

function playRound () {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log('PLayer selection - ', playerSelection);
    console.log('Computer selection - ', computerSelection);
    if (playerSelection==='rock') {
        if (computerSelection==='rock')
            return 'tie';
        else if (computerSelection==='paper')
            return 'lose';
        else
            return 'win';
    }
    else if (playerSelection==='paper') {
        if (computerSelection==='rock')
            return 'win';
        else if (computerSelection==='paper')
            return 'tie';
        else
            return 'lose';
    }
    else {
        if (computerSelection==='rock')
            return 'lose';
        else if (computerSelection==='paper')
            return 'win';
        else
            return 'tie';
    }
}

function checkWin (playerScore, computerScore) {
    if (playerScore===5 || computerScore===5){
        playerScore===5 ? console.log('Player won!') : console.log('Computer won!');
        return true;
    }
    else
        return false;
}

function playGame() {
    let playerScore=0;
    let computerScore=0;
    while (true) {
        let result=playRound();
        console.log('Result - ', result);
        if (result==='win' || result==='lose')
            result==='win' ? ++playerScore : ++computerScore;
        console.log('Player score = ', playerScore);
        console.log('Computer score = ', computerScore);
        if (checkWin(playerScore, computerScore))
            break;           
    } 
}

playGame();