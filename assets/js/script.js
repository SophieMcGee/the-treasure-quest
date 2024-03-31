document.getElementById('easyMode').addEventListener('click', function() {
    startGame('easy');
});

document.getElementById('hardMode').addEventListener('click', function() {
    startGame('hard');
});

function startGame(difficulty) {
    // Function to trigger the start of the game once difficulty is selected
    document.getElementById('header').style.display = 'block'; // Show the header when game starts
    document.getElementById('footer').style.display = 'block'; // Show the footer when game starts
    document.getElementById('game-selection').style.display = 'none'; // Hide the intro section when game starts
}