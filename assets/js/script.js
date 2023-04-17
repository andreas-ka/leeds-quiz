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


// start button action
startQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions();
}

function resetState() {
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild)
    }
}

function showQuestions(){
    resetState()       
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ quiz[2].numb + ". " + quiz[2].question +'</span>';
    let option_tag = 
    '<button class="answer-btn"><span>'+ quiz[2].options[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[2].options[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[2].options[2] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[2].options[3] +'</span></button>';
    questionText.innerHTML = que_tag; //adding new span tag inside question-class
    answerBtnArea.innerHTML = option_tag; // adding new span with option in answer buttons

    setEventListeners();
}

function setEventListeners() {
    [...optionBtn].forEach(option => { // converty nodelist to an array and loop over each option in array
        option.addEventListener("click", event => { // add an click eventlistener to each option button and emits an event
            const span = event.currentTarget.querySelector('span'); // Targets the span
            const text = span.innerText; // gets the innertext to know what was clicked
            console.log(text);
            let correctAnswer = [quiz[2].answer];
            console.log(correctAnswer);
            if(text == correctAnswer) {
                console.log('correct answer')
                userScore += 1;
                event.target.classList.add("correct") // what i would like to use
            }else{
                console.log('incorrect')
                event.target.classList.add("incorrect")
            }
            //checkAnswer() // starts the checkAnswer function
        })
    })
}

/*
function checkAnswer() {
    let correctAnswer = [quiz[1].answer];
    let span = document.querySelector('span'); // Targets the span
    const text = span.innerText; // gets the innertext to know what was clicked
    console.log(correctAnswer);
    console.log(text);
} */