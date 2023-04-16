// Get elements by id

const welcomeRulesArea = document.getElementById("welcome-rules-area")
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area")
const timer = document.getElementById("timer");
const answerBtnArea = document.getElementById("answer-btn-area");
const questionElement = document.getElementById("questions");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");

let currentScore = 0;
let currentQuestionIndex = 0;


// start button action
startQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none'; // hides the welcome and rules div
    resultScoreArea.style.display = 'none'; // hides the result div
    questionArea.style.display = 'block'; // shows the quiz with question and buttons
    displayQuestions() // calling the function that shows the questions
}

// Next Question button action
nextQuestionBtn.onclick = ()=> {
    displayQuestions()
}

function displayQuestions(index) {
    let questionTag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let answerTag = '<div class="option"><span>'+ questions[index].answer.text[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].answer.text[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].answer.text[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].answer.text[3] +'</span></div>';
    questions.innerHTML = questionTag; //adding new span tag inside que_tag
    answerBtnArea.innerHTML = answerTag; //adding new div tag inside option_tag

    const answer = answerBtnArea.querySelectorAll(".answer");
}