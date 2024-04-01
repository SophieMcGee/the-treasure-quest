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

let selectedQuestions =[];
let currentQuestionIndex = 0;
let score = 0;


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
    displayCurrentQuestion();
}

function getRandomQuestions(sourceArray, numQuestions) {
    const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

function displayCurrentQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<div>${question.question}</div>`;

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
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

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<div>Your score: ${score}/${selectedQuestions.length}</div>`;
}

//Function to start the quiz
function loadQuiz(difficulty) {
    startGame(difficulty);
    document.getElementById('game-selection').style.display = 'none'; //Code to show the quiz game questions
}