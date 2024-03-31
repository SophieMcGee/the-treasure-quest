document.getElementById('easyMode').addEventListener('click', function () {
    startGame('easy');
});

document.getElementById('hardMode').addEventListener('click', function () {
    startGame('hard');
});


//Function to start the quiz
function loadQuiz(difficulty) {
    startGame(difficulty);
    document.getElementById('header').style.display = 'flex'; //Code to display the header
    document.getElementById('game-selection').style.display = 'none'; //Code to show the quiz game questions
    document.getElementById('quiz-container').style.display = 'block'; //Code to show the footer 
}