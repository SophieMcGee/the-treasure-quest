document.getElementById('easyMode').addEventListener('click', function () {
    startGame('easy');
});

document.getElementById('hardMode').addEventListener('click', function () {
    startGame('hard');
});

function startGame(difficulty) {
    // Function to trigger the start of the game once difficulty is selected
    loadQuiz(difficulty);

    document.getElementById('header').style.display = 'flex'; //Code to display the header
    document.getElementById('game-selection').style.display = 'none'; //Code to show the quiz game questions
    document.getElementById('quiz-container').style.display = 'block'; //Code to show the footer
}

function loadQuiz(difficulty) {
    
}