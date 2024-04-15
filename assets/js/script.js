//Game Questions
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
            question: "Demographics are the statistical data of a population, showing characteristics such as?",
            correctAnswerPosition: 2,
            options: ["Income and age", "Education and income", "Income, age, and education"]
        },
        {
            question: "Population density means how many people?",
            correctAnswerPosition: 1,
            options: ["Are educated", "Live per square km", "Have enough to eat"]
        },
        {
            question: "Which one of these countries has the highest GDP per capita?",
            correctAnswerPosition: 2,
            options: ["Vietnam", "Egypt", "Luxembourg"]
        },
        {
            question: "Which country has a high percentage of people living below the poverty line?",
            correctAnswerPosition: 0,
            options: ["Africa", "Europe", "North America"]
        },
        {
            question: "What is the capital city of Spain?",
            correctAnswerPosition: 0,
            options: ["Madrid", "Vienna", "Rome"]
        },
        {
            question: "Which city is home to the Eiffel Tower?",
            correctAnswerPosition: 1,
            options: ["Athens", "Paris", "London"]
        },
        {
            question: "In which capital city would you find the Houses of Parliament and Buckingham Palace?",
            correctAnswerPosition: 2,
            options: ["Riga", "Stockholm", "London"]
        },
        {
            question: "Vienna is the capital city of which country?",
            correctAnswerPosition: 1,
            options: ["Finland", "Austria", "Portugal"]
        },
        {
            question: "What is the capital city of Iceland?",
            correctAnswerPosition: 2,
            options: ["Brussels", "Sofia", "Reykjavik"]
        },
        {
            question: "In which country would you find the capital city of Copenhagen?",
            correctAnswerPosition: 1,
            options: ["Estonia", "Denmark", "Croatia"]
        },
        {
            question: "Oslo is the capital city of which country?",
            correctAnswerPosition: 1,
            options: ["Sweden", "Norway", "Italy"]
        },
        {
            question: "Berlin is the capital city of which European country?",
            correctAnswerPosition: 2,
            options: ["Serbia", "Switzerland", "Germany"]
        },
        {
            question: "Which landmark in Ireland is known for granting the gift of eloquence?",
            correctAnswerPosition: 0,
            options: ["The Blarney Stone", "Cliffs of Moher", "Giant’s Causeway"]
        },
        {
            question: "Which famous Irish attraction is associated with the iconic Irish beer?",
            correctAnswerPosition: 2,
            options: ["Trinity College", "Kilmainham Gaol", "Guinness Storehouse"]
        },
        {
            question: "Which landmark in Ireland is also known as Cashel of the Kings and St. Patrick’s Rock?",
            correctAnswerPosition: 0,
            options: ["Rock of Cashel", "Ring of Kerry", "Dublin Castle"]
        },
        {
            question: "Which natural wonder in Ireland consists of unique basalt columns?",
            correctAnswerPosition: 1,
            options: ["Kylemore Abbey", "Giants Causeway", "Blarney Castle"]
        },
        {
            question: "Which of the following is not a country in North America?",
            correctAnswerPosition: 2,
            options: ["Canada", "Mexico", "Russia"]
        },
        {
            question: "The United States of America has how many states?",
            correctAnswerPosition: 1,
            options: ["49", "50", "51"]
        },
        {
            question: "Canada is the second largest country in the world but has a low?",
            correctAnswerPosition: 1,
            options: ["Amount of farming land", "Population density", "Number of animals"]
        },
        {
            question: "The continent of Europe has almost how many countries?",
            correctAnswerPosition: 2,
            options: ["30", "40", "50"]
        },
        {
            question: "Which of the following is not a country in Europe?",
            correctAnswerPosition: 2,
            options: ["Italy", "Portugal", "India"]
        },
        {
            question: "Which European city does the prime Meridian run through?",
            correctAnswerPosition: 0,
            options: ["London", "Paris", "Madrid"]
        },
        {
            question: "What is the capital city of Australia?",
            correctAnswerPosition: 0,
            options: ["Canberra", "Sydney", "Melbourne"]
        },
        {
            question: "In which capital city would you find ‘The Forbidden City’?",
            correctAnswerPosition: 1,
            options: ["Tokyo", "Beijing", "Seoul"]
        },
        {
            question: "Vilnius is the capital city of which European country?",
            correctAnswerPosition: 2,
            options: ["Latvia", "Estonia", "Lithuania"]
        },
        {
            question: "The world’s highest mountain is Mount Everest in the Himalayas. What is the world’s second highest peak?",
            correctAnswerPosition: 0,
            options: ["K2 on the China-Pakistan border", "Kangchenjunga", "Lhotse"]
        },
        {
            question: "Which freshwater lake in the Highlands of Scotland is the largest of all Scottish lakes?",
            correctAnswerPosition: 0,
            options: ["Loch Lomond", "Loch Ness", "Loch Morar"]
        },
        {
            question: "Which river located in China is 3917 miles long and flows into the East China Sea?",
            correctAnswerPosition: 1,
            options: ["The Yellow River", "The Yangtze River", "The Pearl River"]
        },
        {
            question: "Mount Everest is the world’s highest peak but what’s the name of the highest mountain in the solar system?",
            correctAnswerPosition: 0,
            options: ["Olympus Mons on Mars", "Rheasilvia on Vesta", "Maxwell Montes on Venus"]
        },
        {
            question: "The UK’s longest river is 220 miles in length and runs through Shropshire, Worcestershire and Gloucestershire. What is its name?",
            correctAnswerPosition: 1,
            options: ["The River Thames", "The River Severn", "The River Trent"]
        },
        {
            question: "The Scilly Isles are a group of islands situated off the UK coast. Which county are they nearest to?",
            correctAnswerPosition: 0,
            options: ["Cornwall", "Devon", "Somerset"]
        },
        {
            question: "The prehistoric monument at Stonehenge is a World Heritage Site. Where in the UK is it?",
            correctAnswerPosition: 2,
            options: ["Dorset", "Somerset", "Wiltshire"]
        },
        {
            question: "What is the name of the ridge of hills that run down the centre of northern England and are often called the ‘backbone’ of England?",
            correctAnswerPosition: 0,
            options: ["The Pennines", "The Cotswolds", "The Chilterns"]
        },
        {
            question: "What’s the name of England’s longest lake?",
            correctAnswerPosition: 2,
            options: ["Ullswater", "Loch Ness", "Lake Windermere"]
        },
        {
            question: "What is the name of the temple situated on the Acropolis in Athens, Greece, originally dedicated to the Greek goddess, Athena?",
            correctAnswerPosition: 0,
            options: ["The Parthenon", "The Erechtheion", "The Temple of Olympian Zeus"]
        },
        {
            question: "What is the world’s longest man-made structure with an official length of 13,170.7 miles?",
            correctAnswerPosition: 1,
            options: ["The Trans-Siberian Railway", "The Great Wall of China", "The Grand Canal of China"]
        },
        {
            question: "In what country would you find one of the largest religious monuments in the world which was built in the twelfth century and whose name translated means ‘City of Temples’?",
            correctAnswerPosition: 0,
            options: ["Angkor Wat in Cambodia", "Borobudur in Indonesia", "Potala Palace in Tibet"]
        },
        {
            question: "Which dormant volcano is the highest peak on the African continent at 5895 metres in height?",
            correctAnswerPosition: 1,
            options: ["Mount Kenya in Kenya", "Mount Kilimanjaro in Tanzania", "Toubkal in Morocco"]
        },
        {
            question: "What mode of transport does Greta Thunberg refuse to travel by?",
            correctAnswerPosition: 1,
            options: ["Bus", "Aeroplane", "Car"]
        },
        {
            question: "What does unprecedented mean?",
            correctAnswerPosition: 2,
            options: ["A present returned to the owner", "Expected", "Not done or experienced before"]
        },
        {
            question: "Climate shows what in the weather?",
            correctAnswerPosition: 2,
            options: ["Predictions", "Changes", "Patterns"]
        },
        {
            question: "Climate zones are regions of the world that have similar what?",
            correctAnswerPosition: 2,
            options: ["Plants", "Animals", "Temperatures and Precipitation"]
        },
        {
            question: "The man who mapped and classified world climate was called what?",
            correctAnswerPosition: 2,
            options: ["Joseph Banks", "Douglas Mawson", "Wladimir Köppen"]
        },
        {
            question: "Which of the following is not a climate zone of the world?",
            correctAnswerPosition: 1,
            options: ["Warm temperate", "Stormy", "Tropical"]
        },
        {
            question: "Which climate zone is found on either side of the equator and is hot and wet all year?",
            correctAnswerPosition: 0,
            options: ["Tropical", "Cool Temperate", "Dry"]
        },
        {
            question: "Which climate zone is found at the top and base of the earth, and has very cold winters but little rainfall?",
            correctAnswerPosition: 2,
            options: ["Dry", "Tropical", "Polar"]
        },
        {
            question: "What is the primary language spoken in Brazil?",
            correctAnswerPosition: 0,
            options: ["Portuguese", "Spanish", "French"]
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            correctAnswerPosition: 0,
            options: ["Mars", "Jupiter", "Saturn"]
        },
        {
            question: "What is the largest mammal in the world?",
            correctAnswerPosition: 0,
            options: ["Blue Whale", "African Elephant", "Giraffe"]
        },
        {
            question: "Which country is famous for inventing the sport of cricket?",
            correctAnswerPosition: 0,
            options: ["England", "Australia", "India"]
        }
    ]
};
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectCount = 0;
let soundEnabled = false;
let currentDifficulty = 'easy';

//Function to control sound, effects are enabled by default
function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundOnIcon = document.getElementById('sound-on');
    const soundOffIcon = document.getElementById('sound-off');
    const toggleSoundSpan = document.getElementById('toggle-sound');

    soundOnIcon.style.display = soundEnabled ? 'inline' : 'none';
    soundOffIcon.style.display = soundEnabled ? 'none' : 'inline';
    toggleSoundSpan.setAttribute('aria-label', soundEnabled ? 'Turn sound off' : 'Turn sound on');

}
//Sets the duration of game sounds
function playSound(soundId, duration = 0) {
    if (!soundEnabled) return;
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0; // Start sound from the beginning
        sound.play();
        if (duration > 0) {
            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0;
            }, duration);
        }
    }
}

//Controls progress circles
function initializeProgressCircles() {
    const progressGrid = document.getElementById('progress-grid');
    progressGrid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        let circle = document.createElement('div');
        circle.className = 'question-progress';
        circle.id = 'progress-' + i;
        progressGrid.appendChild(circle);
    }
}

// Updates the progress circle based on the answer outcome
function updateProgressCircle(questionIndex, isCorrect) {
    const progressCircleId = 'progress-' + (currentQuestionIndex + 1);
    const progressCircle = document.getElementById(progressCircleId);
    if (isCorrect) {
        progressCircle.style.backgroundImage = "url('assets/images/gold-coin.webp')";
        progressCircle.setAttribute('aria-label', `Question ${questionIndex + 1}: Correct`);
    } else {
        progressCircle.style.backgroundImage = "url('assets/images/pirate-flag.webp')";
        progressCircle.setAttribute('aria-label', `Question ${questionIndex + 1}: Incorrect`);
    }
}


//Function to start the game
document.addEventListener('DOMContentLoaded', function () {
    const toggleSoundSpan = document.getElementById('toggle-sound');
    document.getElementById('sound-on').style.display = soundEnabled ? 'inline' : 'none';
    document.getElementById('sound-off').style.display = soundEnabled ? 'none' : 'inline';
    const restartQuiz = document.getElementById('restartQuiz');
    const restartQuizAfterGame = document.getElementById('restartQuizAfterGame');

    if (restartQuiz) {
        restartQuiz.addEventListener('click', resetGame);
    }
    if (restartQuizAfterGame) {
        restartQuizAfterGame.addEventListener('click', resetGame);
    }


    toggleSoundSpan.setAttribute('aria-label', soundEnabled ? 'Turn sound off' : 'Turn sound on');
    toggleSoundSpan.addEventListener('click', toggleSound);
    document.getElementById('easyMode').addEventListener('click', function () {
        startGame('easy');
        initializeProgressCircles();

    });

    document.getElementById('hardMode').addEventListener('click', function () {
        startGame('hard');
        initializeProgressCircles();
    });
});


//Event listeners for the easy and hard mode buttons
document.getElementById('easyMode').addEventListener('click', function () {
    startGame('easy');
    initializeProgressCircles();
});

document.getElementById('hardMode').addEventListener('click', function () {
    startGame('hard');
    initializeProgressCircles();
});

//Selects 10 random questions from the chosen difficulty level before calling the first question
function startGame(difficulty) {
    currentDifficulty = difficulty;
    selectedQuestions = getRandomQuestions(questions[difficulty], 10);
    currentQuestionIndex = 0;
    score = 0;
    incorrectCount = 0;

    //Ensure the game selection is visible
    document.getElementById('header').classList.add('game-active');
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('game-selection').style.display = 'none';
    document.getElementById('restartQuiz').style.display = 'block';
    displayCurrentQuestion();
    scrollToQuizContainer();
}
//Function to reset the game back to the start at the same difficulty level
function resetGame() {
    selectedQuestions = getRandomQuestions(questions[currentDifficulty], 10);
    currentQuestionIndex = 0;
    score = 0;
    incorrectCount = 0;

    // Clear the score message and hide relevant elements
    const resultMessage = document.getElementById('result-message');
    if (resultMessage) {
        resultMessage.innerHTML = ''; // Clear the result message if it exists
    }

    const gameEndContainer = document.getElementById('game-end-container');
    if (gameEndContainer) {
        gameEndContainer.style.display = 'none'; // Hide the game end container
    }

    displayCurrentQuestion();
    initializeProgressCircles();
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-video').style.display = 'none';
    document.getElementById('restartQuiz').style.display = 'block';
    document.getElementById('restartQuizAfterGame').style.display = 'none';  // Hide the end-game restart button
    document.getElementById('restartButton').style.display = 'none';
}

//Add scroll effect to move players to top of quiz container when the difficulty is selected and game begins
function scrollToQuizContainer() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.scrollIntoView({ behavior: 'smooth' });
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

    const questionNumberDisplay = document.getElementById('question-number');

    if (questionNumberDisplay) {
        questionNumberDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
    } else {
    }
    document.getElementById('question').textContent = questionInfo.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    questionInfo.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);

        //Clear existing timer and starts a new 10 second timer countdown
        clearInterval(countdown);
        let timeDisplay = document.querySelector('#time');
        startTimer(10, timeDisplay);
    });
}

//Code for a countdown timer of 10 seconds for each question
let countdown;

function startTimer(duration, display) {
    let timer = duration, seconds;
    countdown = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        // Less than or equal to 5 seconds left and text will change to red and blinking will start
        display.textContent = seconds;
        if (timer <= 5) {
            display.parentNode.classList.add("urgent");
        } else {
            display.parentNode.classList.remove("urgent");
        }
        //If counter reaches 0 the countdown clears and game moves to the next question
        if (--timer < 0) {
            clearInterval(countdown);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    incorrectCount++;
    document.getElementById('incorrect').textContent = incorrectCount;

    updateProgressCircle(currentQuestionIndex, false);

    //Disable answer buttons and mark as incorrect when time runs out
    const answerButtons = document.querySelectorAll('#answers button');
    answerButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('button-incorrect');
    });

    let timeoutMessage = document.getElementById('timeout-message');
    if (!timeoutMessage) {
        timeoutMessage = document.createElement('div');
        timeoutMessage.setAttribute('id', 'timeout-message');
        timeoutMessage.classList.add('timeout-popup');
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.insertBefore(timeoutMessage, quizContainer.firstChild.nextSibling);
    }

    timeoutMessage.innerHTML = "<div class='timeout-popup'>Time's up, the pirates caught up with you this time!<br>Good luck on the next question!</div>";
    timeoutMessage.style.display = 'block';

    setTimeout(() => {
        timeoutMessage.style.display = 'none';

        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayCurrentQuestion();
        } else {
            endQuiz();
        }
        //Re-enable and reset the answer buttons for the next question
        answerButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('button-incorrect', 'button-correct');
        });
    }, 3000);
}

//Triggered when an option is clicked, checks to see if answer is correct and updates progress circles , ends quiz with final score
function checkAnswer(selectedIndex) {
    clearInterval(countdown);
    const isCorrect = selectedIndex === selectedQuestions[currentQuestionIndex].correctAnswerPosition;
    updateProgressCircle(currentQuestionIndex, isCorrect);

    if (isCorrect) {
        //Correct answer
        score++;
        playSound('rightSound');
        document.getElementById('correct').textContent = score;

    } else {
        incorrectCount++;
        playSound('wrongSound');
        document.getElementById('incorrect').textContent = incorrectCount;

    }

    displayModalFeedback(selectedIndex, isCorrect);
}
function displayModalFeedback(selectedIndex, isCorrect) {
    const modal = document.getElementById('info-modal');
    const explanationText = document.getElementById('explanation-text');
    const nextQuestionButton = document.getElementById('next-question');
    const viewScoreButton = document.getElementById('view-score');
    modal.style.display = "block";

    explanationText.textContent = isCorrect ?
        "Great job! That's the correct answer." :
        `Oops! Wrong this time the correct answer was ${selectedQuestions[currentQuestionIndex].options[selectedQuestions[currentQuestionIndex].correctAnswerPosition]}.`;

    if (currentQuestionIndex < selectedQuestions.length - 1) {
        nextQuestionButton.style.display = "block";
        viewScoreButton.style.display = "none";
        nextQuestionButton.onclick = function () {
            modal.style.display = "none";
            proceedToNextQuestion();
        };
    } else {
        nextQuestionButton.style.display = "none";
        viewScoreButton.style.display = "block";
        viewScoreButton.onclick = function () {
            modal.style.display = "none";
            endQuiz();
        };
    }
}


function proceedToNextQuestion() {
    currentQuestionIndex++;
    // Increment question index or end quiz if at the last question
    if (currentQuestionIndex < selectedQuestions.length) {
        displayCurrentQuestion();
    } else {
        endQuiz();
    }
    // Reset to new questions
    resetAnswerButtons();
}
function resetAnswerButtons() {
    // Enable all buttons and remove colour classes for the next question
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('button-correct', 'button-incorrect');
    });
}
//Local storage of highscores by username
function saveScore(username, score) {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[username] = score;
    localStorage.setItem('scores', JSON.stringify(scores));
    alert('Score saved successfully!');
}

document.getElementById('saveScoreForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').style.display = 'block';
        return;
    }
    document.getElementById('usernameError').style.display = 'none';
    saveScore(username, score);
});

function displayScores() {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    const scoresList = document.getElementById('highScoresList');
    scoresList.innerHTML = '';
    //Sort scores in descending order by value
    const sortedScores = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    Object.keys(scores).forEach(user => {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `${user}: ${scores[user]}`;
        scoresList.appendChild(scoreItem);
    });
}

//Display the quiz score with option to restart the quiz
function endQuiz() {
    //Hide the quiz container
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'none';

    //Show the end of game container
    const gameEndContainer = document.getElementById('game-end-container');
    gameEndContainer.style.display = 'block';

    let resultsMessage = document.getElementById('result-message');
    resultsMessage.innerHTML = `Well done, your score is: ${score}/${selectedQuestions.length}`;

    const videoContainer = document.getElementById('result-video');
    //Code for checking if 10 correct
    if (score === selectedQuestions.length) {
        videoContainer.style.display = 'block';
        playSound('winSound', 5000); // Play the fanfare winning sound for 5 seconds
    } else {
        //Do not display video for less than 10 correct
        videoContainer.style.display = 'none';
    }

    document.getElementById('restartQuizAfterGame').style.display = 'block';
    document.getElementById('visitHomepage').style.display = 'block';

    const saveScoreForm = document.getElementById('saveScoreForm');
    saveScoreForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        if (username === '') {
            document.getElementById('usernameError').style.display = 'block';
            return;
        }
        document.getElementById('usernameError').style.display = 'none';
        localStorage.setItem(username, score);
        alert('Score saved successfully!');
    });
    document.getElementById('restartQuizAfterGame').addEventListener('click', resetGame);
    document.getElementById('visitHomepage').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

}


function visitHomepage() {
    location.reload()
}

