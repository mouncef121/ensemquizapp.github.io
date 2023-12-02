const quizData = [
    {
        question: "In what year was Linux launched?",
        a: "1975",
        b: "1980",
        c: "1990",
        d: "1991",
        correct: "d",
    },
    {
        question: "Is Linux a ?",
        a: "Freeware",
        b: "Hardware",
        c: "Shareware",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Who is the founder of Linux?",
        a: "Linux Thorvalds",
        b: "Lunix Thorvalds",
        c: "Linus Torvalds",
        d: "Linus Torvald",
        correct: "c",
    },
    {
        question: "What command is used to create a file in Linux?",
        a: "$ cat namefile",
        b: "$ cat > namefile",
        c: "$ cat >> namefile",
        d: "$ cat <> namefile",
        correct: "b",
    },
    {
        question: "What command is used to make a directory in Linux?",
        a: "$ mkdir directoryname",
        b: "$ makedir directoryname",
        c: "$ make directoryname",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What command is used to display the current directory in Linux?",
        a: "$ ls",
        b: "$ cd",
        c: "$ pwd",
        d: "$ dir",
        correct: "c",
    },
    
    {
        question: "In a permission string like rwxr-xr--, what does the first r represent?",
        a: "$ Read permission for the owner",
        b: "$ Write permission for the owner",
        c: "$ Execute permission for the owner",
        d: "$  Read permission for the group",
        correct: "a",
    },
    {
        question: "What command is used to list the files and directories in the current directory?",
        a: "$ ls",
        b: "$ list",
        c: "$ show",
        d: "$ display",
        correct: "a",
    },
    {
        question: "What command is used to change permissions in a directory or file?",
        a: "$ change",
        b: "$ chmod",
        c: "$ changeps",
        d: "$ None of the above",
        correct: "b",
    },
    {
        question: "What is the symbol of a pipeline in Linux",
        a: "||",
        b: "/",
        c: "\ ,",
        d: "|",
        correct: "d",
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