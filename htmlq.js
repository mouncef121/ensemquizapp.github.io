const quizData = [
    {
        question: "Is HTML considered ?",
        a: "Programming language",
        b: "OOP language",
        c: "High-level language",
        d: "Markup language",
        correct: "d",
    },
    {
        question: "HTML was first proposed in the year ?",
        a: "1980",
        b: "1990",
        c: "1995",
        d: "2000",
        correct: "b",
    },
    {
        question: " Who is the main author of HTML?",
        a: "To-Brendan Eich",
        b: "Tim Berners-Lee",
        c: "Web developer",
        d: "Google Inc",
        correct: "b",
    },
    {
        question: "A stricter type of HTML document is known as __?",
        a: "DHTML",
        b: "XHTML",
        c: "XML",
        d: "HTML",
        correct: "b",
    },
{
        question: "Which of the following HTML tags will insert a line break?",
        a: "<p>",
        b: "<break>",
        c: "<line>",
        d: "<br>",
        correct: "d",
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
        question: "What is the alternative of <b> tag, to make the text bold?",
        a: "<bold>",
        b: "<strong>",
        c: "<i>",
        d: "<emp>",
        correct: "b",
    },
{
        question: "Which of the following tags relate to a table in HTML?",
        a: "<table> <row> <column>",
        b: "<table> <tr> <td>",
        c: "table> <head> <body>",
        d: "<table> <header> <footer>",
        correct: "c",
    },
{
        question: "What is iframe used for in HTML?",
        a: "To display a web page within a web page.",
        b: "To display a web page with an animation effect.",
        c: "To view a web page without a browser.",
        d: " All answers are true",
        correct: "a",
    },
{
        question: " An ordered list can be represented by?",
        a: "<ol>",
        b: "<ul>",
        c: "<li>",
        d: "<el>",
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