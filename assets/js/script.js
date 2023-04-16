// Get elements by id

const welcomeRulesArea = document.getElementById("welcome-rules-area");
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const optionBtn = document.querySelector(".answer-button")

let questionCounter = 0;
let currentQuestion = 0;
let availableQuestions = [];




/*
function displayQuestion(index) {
    questionText.innerHTML = quiz[1];
    optionBtn.innerHTML = quiz[index].question;
}
*/

function showQuestions(){
    const que_text = document.querySelector(".questions-class");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ quiz[0].numb + ". " + quiz[0].question +'</span>';
    let option_tag = 
    '<div class="answer-button"><span>'+ quiz[0].options[0] +'</span></div>'
    + '<div class="answer-button"><span>'+ quiz[0].options[1] +'</span></div>'
    + '<div class="answer-button"><span>'+ quiz[0].options[2] +'</span></div>'
    + optionBtn + quiz[0].options[3] +'</div>';
    questionText.innerHTML = que_tag; //adding new span tag inside que_tag
    optionBtn.innerHTML = option_tag; //adding new div tag inside option_tag
    console.log(quiz[index].options[0])
}

// start button action
startQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions();
}