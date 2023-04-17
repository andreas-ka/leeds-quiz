// Get elements by id

const welcomeRulesArea = document.getElementById("welcome-rules-area");
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const optionBtn = document.getElementsByClassName("answer-btn")

let userScore = document.getElementById("correct-answers-counter")
let questionCounter = 0;
let currentQuestion = 0;


function showQuestions(){
    resetState()
        
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ quiz[0].numb + ". " + quiz[0].question +'</span>';
    let option_tag = 
    '<button class="answer-btn"><span>'+ quiz[0].options[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[0].options[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[0].options[2] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[0].options[3] +'</span></button>';
    questionText.innerHTML = que_tag; //adding new span tag inside question-class
    answerBtnArea.innerHTML = option_tag; // adding new span with option in answer buttons
    optionBtn.onclick = alert("hello");

     //validation code to see State field is mandatory.  
    
    
}

function resetState() {
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild)
    }
}


// start button action
startQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions();
}