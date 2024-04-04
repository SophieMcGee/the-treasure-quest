//Test Questions
const questions = {
    easy: [
        {
            question: "Brazil produces the largest amount of one of these popular products. Which is it?",
            correctAnswerPosition: 2,
            options: ["Chocolate", "Cheese", "Coffee"]
        },
        {
            question: "One of these objects was invented in Japan. Which one is it?",
            correctAnswerPosition: 0,
            options: ["Nintendo", "Scissors", "Camera"]
        },
        {
            question: "Russia has the largest total area of a geographical feature in the world. Which is it?",
            correctAnswerPosition: 2,
            options: ["Lakes", "Mountains", "Forests"]
        },
        {
            question: "Which is the most popular sport in Italy?",
            correctAnswerPosition: 1,
            options: ["Tennis", "Football", "Swimming"]
        },
        {
            question: "Which character comes from Norwegian folklore?",
            correctAnswerPosition: 2,
            options: ["Pixies", "Gnomes", "Trolls"]
        },
        {
            question: "Mexico is famous for many different foods. Which one of these foods did not originate in Mexico?",
            correctAnswerPosition: 0,
            options: ["Mozzarella", "Tacos", "Burritos"]
        },
        {
            question: "Madagascar provides half the world’s supply of which precious gemstone?",
            correctAnswerPosition: 1,
            options: ["Ruby", "Sapphire", "Emerald"]
        },
        {
            question: "Iceland is home to two hundred of which?",
            correctAnswerPosition: 0,
            options: ["Volcanoes", "Rivers", "Railway lines"]
        },
        {
            question: "The currency used in Chile is called the Chilean what?",
            correctAnswerPosition: 0,
            options: ["Peso", "Euro", "Yen"]
        },
        {
            question: "Which is Cuba’s main crop?",
            correctAnswerPosition: 1,
            options: ["Wheat", "Sugar cane", "Cotton"]
        },
        {
            question: "Which type of music came from Jamaica?",
            correctAnswerPosition: 2,
            options: ["Folk", "Jazz", "Reggae"]
        },
        {
            question: "What is the capital of Switzerland?",
            correctAnswerPosition: 1,
            options: ["Berlin", "Bern", "Bangkok"]
        },
        {
            question: "Which animal provides the traditional meat in Peru?",
            correctAnswerPosition: 0,
            options: ["Guinea Pig", "Cow", "Monkey"]
        },
        {
            question: "How many lakes are in Canada?",
            correctAnswerPosition: 1,
            options: ["Over 4000", "Over 30,000", "Over 13,000"]
        },
        {
            question: "If you visited Arc de Triomphe de l'Étoile, which European country would you be visiting?",
            correctAnswerPosition: 0,
            options: ["France", "Belgium", "Italy"]
        },
        {
            question: "Which European country is well known for its pizza, olive oil, and coffee?",
            correctAnswerPosition: 1,
            options: ["Spain", "Italy", "Portugal"]
        },
        {
            question: "Which European country’s capital city is Stockholm?",
            correctAnswerPosition: 2,
            options: ["Norway", "Denmark", "Sweden"]
        },
        {
            question: "Which European country has 8479 miles of coastline?",
            correctAnswerPosition: 0,
            options: ["Greece", "Spain", "Turkey"]
        },
        {
            question: "Warsaw is the capital city of which European country?",
            correctAnswerPosition: 1,
            options: ["Czech Republic", "Poland", "Hungary"]
        },
        {
            question: "Which European country has the highest population?",
            correctAnswerPosition: 0,
            options: ["Russia", "Germany", "France"]
        },
        {
            question: "Name the largest of the Greek islands.",
            correctAnswerPosition: 0,
            options: ["Crete", "Rhodes", "Corfu"]
        },
        {
            question: "Which European country is famous for having the following rivers: the Rhine, the Elbe, and the Danube?",
            correctAnswerPosition: 2,
            options: ["Austria", "Hungary", "Germany"]
        },
        {
            question: "Which is the smallest European country?",
            correctAnswerPosition: 1,
            options: ["Malta", "Vatican City", "Andorra"]
        },
        {
            question: "Name the only European country to begin with the letter 'D'.",
            correctAnswerPosition: 0,
            options: ["Denmark", "Dominica", "Djibouti"]
        },
        {
            question: "In which European country would you find the Jägala Waterfall?",
            correctAnswerPosition: 2,
            options: ["Austria", "Finland", "Estonia"]
        },
        {
            question: "The capital city of which European country is Riga?",
            correctAnswerPosition: 1,
            options: ["Lithuania", "Latvia", "Estonia"]
        },
        {
            question: "A traditional dish from this country is Cepelinai. Name the country.",
            correctAnswerPosition: 0,
            options: ["Lithuania", "Poland", "Belarus"]
        },
        {
            question: "Which European country has a popular coastal city called Dubrovnik?",
            correctAnswerPosition: 2,
            options: ["Montenegro", "Italy", "Croatia"]
        },
        {
            question: "Which European country is well known for its red and white flag, cheeses, mountains, watch making, and chocolate?",
            correctAnswerPosition: 1,
            options: ["Austria", "Switzerland", "Belgium"]
        },
        {
            question: "An ocean is a large body of what type of water?",
            correctAnswerPosition: 0,
            options: ["Salt Water", "Fresh Water", "Blue Water"]
        },
        {
            question: "The Atlantic Ocean is named after which ancient Greek mythological figure?",
            correctAnswerPosition: 1,
            options: ["Zeus", "Atlas", "Fred"]
        },
        {
            question: "Which is the youngest ocean in the world?",
            correctAnswerPosition: 2,
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"]
        },
        {
            question: "Which is the largest ocean in the world?",
            correctAnswerPosition: 2,
            options: ["Australian Ocean", "Southern Ocean", "Pacific Ocean"]
        },
        {
            question: "What is the smallest ocean in the world?",
            correctAnswerPosition: 1,
            options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean"]
        },
        {
            question: "In which ocean would you find the emperor penguin?",
            correctAnswerPosition: 1,
            options: ["Pacific Ocean", "Southern Ocean", "Atlantic Ocean"]
        },
        {
            question: "On the ice of which ocean do polar bears live?",
            correctAnswerPosition: 0,
            options: ["Arctic Ocean", "Antarctic Ocean", "Atlantic Ocean"]
        },
        {
            question: "In which ocean would you find the longest mountain range in the world?",
            correctAnswerPosition: 0,
            options: ["Atlantic Ocean", "Indian Ocean", "Billy Ocean"]
        },
        {
            question: "Which ocean completely surrounds Antarctica?",
            correctAnswerPosition: 0,
            options: ["Southern Ocean", "Indian Ocean", "Pacific Ocean"]
        },
        {
            question: "How many oceans are there in the world?",
            correctAnswerPosition: 1,
            options: ["4", "5", "6"]
        },
        {
            question: "In which ocean would you find the Great Barrier Reef?",
            correctAnswerPosition: 2,
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"]
        },
        {
            question: "What is the imaginary line that divides the Earth in half called?",
            correctAnswerPosition: 0,
            options: ["the equator", "North Pole", "South Pole"]
        },
        {
        question: "What is the part of the Earth north of the equator called?",
        correctAnswerPosition: 2,
        options: ["southern hemisphere", "up hemisphere", "northern hemisphere"]
    },
    {
        question: "In what hemisphere would you find Australia?",
        correctAnswerPosition: 0,
        options: ["southern hemisphere", "Australian hemisphere", "northern hemisphere"]
    },
    {
        question: "What tropic is an imaginary line in the southern hemisphere?",
        correctAnswerPosition: 2,
        options: ["Cancer", "Virgo", "Capricorn"]
    },
    {
        question: "In which hemisphere would you find Europe?",
        correctAnswerPosition: 2,
        options: ["European hemisphere", "Arctic hemisphere", "northern hemisphere"]
    },
    {
        question: "In which hemisphere would you find most of the Earth’s land?",
        correctAnswerPosition: 2,
        options: ["southern hemisphere", "Indian hemisphere", "northern hemisphere"]
    },
    {
        question: "What is the northernmost point on Earth called?",
        correctAnswerPosition: 2,
        options: ["South Pole", "Poland", "North Pole"]
    },
    {
        question: "In summer, what never sets at the North Pole?",
        correctAnswerPosition: 2,
        options: ["the Moon", "the equator", "the Sun"]
    },
    {
        question: "Where on Earth are days and nights both 12 hours long?",
        correctAnswerPosition: 0,
        options: ["the equator", "Australia", "South Pole"]
    },
    {
        question: "What tropic is an imaginary line in the northern hemisphere?",
        correctAnswerPosition: 2,
        options: ["Taurus", "Scorpio", "Cancer"]
    }
],
hard: [
    {
        question: "What is the capital city of England",
        correctAnswerPosition: 2,
        options: ["Dublin", "Paris", "London"]
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

//Display the current question and position answers
function displayCurrentQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const questionInfo = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionInfo.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    questionInfo.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

//Triggered when an option is clicked, checks to see if answer is correct and updates score, ends quiz with final score
function checkAnswer(selectedIndex) {
    if (selectedIndex === selectedQuestions[currentQuestionIndex].correctAnswerPosition) {
        score++;
    } else {
        incorrectCount++;
    }
    document.getElementById('correct').textContent = score;
    document.getElementById('incorrect').textContent = incorrectCount;
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
<button id="restartButton">Restart the game!</button>`;
    document.getElementById('restartButton').addEventListener('click', function () {
        restartGame();
    });
}

function restartGame() {
    score = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;
    document.getElementById('correct').textContent = '0';
    document.getElementById('incorrect').textContent = '0';
    document.getElementById('game-selection').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';

}

