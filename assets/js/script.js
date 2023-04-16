// Get elements by id

const welcomeRulesArea = document.getElementById("welcome-rules-area")
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area")
const timer = document.getElementById("timer");
const answerBtnArea = document.getElementById("answer-btn-area");
const questionElement = document.getElementById("questions");
const nextQuestionBtn = document.getElementById("next-question-btn");

let currentScore = 0;
let currentQuestionIndex = 0;


// start button action
start-quiz-btn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
}

start-quiz-btn.addEventListener("click", startQuiz)

//
nextQuestionBtn.onlick = ()=> {

}
// Display questions 
function displayQuestions() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answer-btn-area.appendChild(button);
    });
}

function startQuiz() {
    currentScore = 0;
    currentQuestionIndex = 0;

}
