let playerScore=0;
let computerScore=0;
let matchOver=false;

displayScore();

const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

btnRock.addEventListener ('click', () => {
    if (!matchOver) {
        updateScore(playRound('rock'));
        checkWin();
    }
});

btnPaper.addEventListener ('click', () => {
    if (!matchOver) {
        updateScore(playRound('paper'));
        checkWin();
    }
});

btnScissors.addEventListener ('click', () => {
    if (!matchOver) {
        updateScore(playRound('scissors'));
        checkWin();
    }
});

function playRound (playerChoice) {
    const playerSelection = playerChoice;
    const computerSelection = computerChoice();
    let result = null;
    if (playerSelection===computerSelection) {
        result = 'tie';
    }
    else {
        if (playerSelection==='rock') {
            if (computerSelection==='scissors')
                result='win';
            else
                result='loss';
        }
        if (playerSelection==='paper') {
            if (computerSelection==='rock')
                result='win';
            else
                result='loss';
        }
        if (playerSelection==='scissors') {
            if (computerSelection==='paper')
                result='win';
            else
                result='loss';
        }
    }
    displayRound(playerSelection, computerSelection, result);
    return result;
}

function computerChoice() {
    randNum = Math.floor(Math.random()*3);
    if (randNum===0) 
        return 'rock';
    else if (randNum===1)
        return 'paper';
    else
        return 'scissors';
}

function updateScore (result) {
    if (result === 'win')
        ++playerScore;
    if (result === 'loss')
        ++computerScore;
    displayScore();    
} 

function checkWin () {
    if (playerScore===5) {
        matchOver=true;
        updateMatch(true);
    }
    if (computerScore===5) {
        matchOver=true;
        updateMatch(false);
    }
}

function displayScore() {
    const playerCurrentScore = document.querySelector('#player-score');
    const computerCurrentScore = document.querySelector('#computer-score');
    playerCurrentScore.textContent = 'Player Score - '+playerScore;
    computerCurrentScore.textContent = 'Computer Score - '+computerScore;    
}

function displayRound (playerSelection, computerSelection, result) {
    const round = document.querySelector('.round-info');
    round.textContent = 'You chose '+playerSelection+' and computer chose '+computerSelection+', round '+result+'!';
}

function updateMatch (isWon) {
    const match = document.querySelector('.match-info');
    if (isWon) {
        match.textContent = 'You won the match!';
    }
    else {
        match.textContent = 'You lost the match!';
    }
    const game = document.querySelector('.game-container');
    const replayBtn = document.createElement('button');
    replayBtn.style.cssText = 'font-size: 2rem; padding: 5px; border-radius: 10px; border: 1px solid black';
    replayBtn.textContent = 'Play again';
    game.appendChild(replayBtn);
    replayBtn.addEventListener('click', () => {
        location.reload();
    });
} 
     
    