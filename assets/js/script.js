//Test Questions
const questions = {
    easy: [
        {
            question: "What is the capital city of Ireland",
            correctAnswerPosition: 0,
            options: ["Dublin, Paris, London"]
        },
    ],
    hard: [
        {
            question: "What is the capital city of England",
            correctAnswerPosition: 2,
            options: ["Dublin, Paris, London"]
        }
    ],
};

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectCount = 0;

//Event listeners for the easy and hard mode buttons
document.getElementById('easyMode').addEventListener('click', function () {
    startGame('easy');
});

document.getElementById('hardMode').addEventListener('click', function () {
    startGame('hard');
});

//Selects 10 random questions from the chosen difficulty level before calling the first question
function startGame(difficulty) {
    selectedQuestions = getRandomQuestions(questions[difficulty], 10);
    currentQuestionIndex = 0;
    score = 0;
    incorrectCount = 0;
    displayCurrentQuestion();

    //Ensure the game selection is visible
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('game-selection').style.display = 'none';
    displayCurrentQuestion();
}

//Pull random questions from the source questions array

function getRandomQuestions(sourceArray, numQuestions) {
    const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

//Display the current question and possition answers
function displayCurrentQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h3>${question.question}</h3>`;

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        quizContainer.appendChild(button);
    });
}

//Triggered when an option is clicked, checks to see if answer is correct and updates score, ends quiz with final score
function checkAnswer(selectedIndex) {
    if (selectedIndex === selectedQuestions[currentQuestionIndex].correctAnswerPosition) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayCurrentQuestion();
    } else {
        endQuiz();
    }
}

//Display the quiz score with option to restart the quiz
function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<div>Well done, your score is: ${score}/${selectedQuestions.length}</div>
    <button onclick="location.reload()">Restart the game!</button>`;
}