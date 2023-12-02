const quizData = [
    {
        question: "Quelle propriété CSS permet de définir la police d'un texte?",
        a: "font-size",
        b: "font-family",
        c: "font-weight",
        d: "font-style",
        correct: "b",
    },
    {
        question: "Quelle propriété CSS permet de définir la taille de la police d'un texte?",
        a: "font-size",
        b: "font-weight",
        c: "font-family",
        d: "font-style",
        correct: "a",
    },
    {
        question: "Quelle propriété CSS permet de définir l'interligne d'un texte?",
        a: "text-align",
        b: "line-height",
        c: "color",
        d: "text-decoration",
        correct: "b",
    },
    {
        question: "Quelle propriété CSS permet de définir la longueur d'un élément de texte ou d'une image?",
        a: "background-image",
        b: "width",
        c: "background-color",
        d: "height",
        correct: "b",
    },
{
        question: "Quelle propriété CSS permet de définir la couleur d'arrière-plan?",
        a: "font-variant",
        b: "background-repeat",
        c: "background-color",
        d: "background-image",
        correct: "c",
    },
{
        question: "Quelle propriété CSS permet de répéter l'image d'arrière-plan horizontalement?",
        a: "font-variant",
        b: "background-image",
        c: "background-repeat",
        d: "background-color",
        correct: "c",
    },

{
        question: "Quelle propriété CSS définit la valeur de la marge supérieure?",
        a: "margin-top",
        b: "margin-left",
        c: "margin-bottom",
        d: "margin-right",
        correct: "a",
    },
{
        question: "Quelle propriété CSS définit la couleur de la bordure supérieure?",
        a: "width",
        b: "border",
        c: "color",
        d: "border[-top -left",
        correct: "c",
    },
{
        question: "Quelle propriété CSS définit l'espace intérieur entre l'élément et la bordure supérieure?",
        a: "padding-right",
        b: "padding-top",
        c: "padding-left",
        d: "padding-bottom",
        correct: "b",
    },
{
        question: "Quelle est la valeur de la marge de droite?",
        a: "0,5em",
        b: "2pt",
        c: "0",
        d: "5px",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})