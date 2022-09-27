
function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return "You Won"
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lost"
    } else {
        return "Error"
    }
}

let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");
let btnRock = document.getElementById("btn-rock");
let btnRestart = document.getElementById("btn-restart");

let pScore = document.getElementById('player-score');
let cScore = document.getElementById('computer-score');

let scoreInfo = document.getElementById('score-info');

function updateScore(result) {
    scoreInfo.innerHTML = '';
    if (result === "You Won") {
        var number = pScore.innerHTML;
        number++;
        pScore.innerHTML = number;
        scoreInfo.innerHTML = result;
    } else if (result === "You Lost") {
        number = cScore.innerHTML;
        number++;
        cScore.innerHTML = number;
        scoreInfo.innerHTML = result;
    } else {
        scoreInfo.innerHTML = result;
    }
}
let gameOver = false;
function finishGame() {
    if (pScore.innerHTML === '5') {
        scoreInfo.innerHTML = "You Won The Game!";
        btnRestart.style.visibility = 'visible';
        gameOver = true;
    } else if (cScore.innerHTML === '5') {
        scoreInfo.innerHTML = "Computer Won The Game!";
        btnRestart.style.visibility = 'visible';
        gameOver = true;
    }
}

function resetGame() {
    gameOver = false;
    pScore.innerHTML = 0;
    cScore.innerHTML = 0;
    btnRestart.style.visibility = 'hidden';
}

btnRestart.addEventListener('click', resetGame);

btnPaper.addEventListener('click', () => {
    if(!gameOver){
        var result = playRound('paper', getComputerChoice());
        updateScore(result);
        finishGame();
    }
});

btnScissors.addEventListener('click', () => {
    if(!gameOver) {
        var result = playRound('scissors', getComputerChoice());
        updateScore(result);
        finishGame();
    }
});

btnRock.addEventListener('click', () => {
    if(!gameOver) {
        var result = playRound('rock', getComputerChoice());
        updateScore(result);
        finishGame();
    }
});



