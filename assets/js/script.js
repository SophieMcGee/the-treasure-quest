document.getElementById('easyMode').addEventListener('click', function () {
    startGame('easy');
});

document.getElementById('hardMode').addEventListener('click', function () {
    startGame('hard');
});

function startGame(difficulty) {
    // Function to trigger the start of the game once difficulty is selected
    document.getElementById('header').style.display = 'flex'; 
    document.getElementById('game-selection').style.display = 'none'; 
    document.getElementById('quiz-container').style.display = 'block';
}