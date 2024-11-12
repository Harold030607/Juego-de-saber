const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

const questions = [
    {
        question: '¿Quién fue el primer hombre creado por Dios?',
        answers: [
            { text: 'Noé', correct: false },
            { text: 'Abraham', correct: false },
            { text: 'Adán', correct: true },
            { text: 'Moises', correct: false }
        ]
    },
    {
        question: '¿Cuántos mandamientos dio Dios a Moises?',
        answers: [
            { text: '10', correct: true },
            { text: '6', correct: false },
            { text: '12', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: '¿Quién negó a Jesús tres veces antes de que cantara el gallo?',
        answers: [
            { text: 'Pedro', correct: true },
            { text: 'Juan', correct: false },
            { text: 'Judas', correct: false },
            { text: 'Mateo', correct: false }
        ]
    },
    {
        question: '¿Cuál fue el primer milagro que hizo Jesús?',
        answers: [
            { text: 'Resucitar a Lázaro', correct: false},
            { text: 'Convertir el agua en vino', correct: true},
            { text: 'Caminar sobre el agua', correct: false}
        ]
    },
    {
        question: '¿Quien traicionó a Jesús por treinta monedas de plata?',
        answers: [
            { text: 'Poncio Pilato', correct: false},
            { text: 'Caifás', correct: false},
            { text: 'Judás', correct: true}
        ]
    },
    {
        question: '¿A quién se le llego a conocer como Amigo de Dios?',
        answers: [
            { text: 'Moisés', correct: false},
            { text: 'Abrahán', correct: true},
            { text: 'Jacob', correct: false}
        ]
    },
    {
        question: '¿Quién fue vendido por sus hermanos?',
        answers: [
            { text: 'Job', correct: false},
            { text: 'José', correct: true},
            { text: 'Josué',  correct: false},
            { text: 'Elías', correct: false}
        ]
    },
    {
        question: 'Fue justo y fiel delante del Señor, incluso cuando lo perdio todo, ¿Sabes quien es?',
        answers: [
            { text: 'Sansón', correct: false},
            { text: 'Jonás', correct: false},
            { text: 'Job', correct: true}
        ]
    },
    {
        question: 'Fue llamado por Dios desde un arbusto en fuego para liberar a su pueblo, hablamos de:',
        answers: [
            { text: 'Moises', correct: true},
            { text: 'Sansón', correct: false},
            { text: 'Saul', correct: false}
        ]
    },
    {
        question: '¿Quien sucedio a Moises y oró al Señor para detener el sol?',
        answers: [
            { text: 'Gideon', correct: false},
            { text: 'Eleazar', correct: false},
            { text: 'Josué', correct: true},
            { text: 'Jefter', correct: false}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30
let timerInterval;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    scoreElement.innerText = `Puntuación: ${score}`;
    timerElement.innerText = `Tiempo: ${timeLeft}`;
    
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);

    timerInterval = setInterval(updateTimer, 1000);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score += 33.33;
        alert('¡Correcto!');
    } else {
        alert('Incorrecto. Intenta de nuevo.');
    }
    scoreElement.innerText = `Puntuación: ${Math.round(score)}`
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
        timeLeft = 30;
        timerElement.innerText = `Tiempo: ${timeLeft}`;
    } else {
        clearInterval(timerInterval);
        alert(`¡FELICIDADES, Has completado el juego :D! Tu puntuacion final es ${Math.round(score)}`);
        startGame();
    }
});

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert('¡Se acabó el tiempo!');
        nextButton.click();
    } else {
        timeLeft--;
        timerElement.innerText = `Tiempo: ${timeLeft}`;
    }
}


startGame();