// Get elements by id

const welcomeRulesArea = document.getElementById("welcome-rules-area");
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const optionBtn = document.getElementsByClassName("answer-btn")
const questionsTotal = document.getElementById("questions-left-counter");
const restartQuizBtn = document.getElementById("restart-quiz-btn")


let questionNumber = 1;
let userScore = 0;


// start button action
startQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore()
}

// Next question button
nextQuestionBtn.onclick = ()=> {
     questionNumber++;   
    if(questionNumber < quiz.length){ //if question count is less than total question length
        showQuestions(questionNumber)
        questionCounter(questionNumber)
        showScore()
    }else{
        showResult()
    }
}
// restart quiz button at the end of the quiz
restartQuizBtn.onclick = ()=> {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions(0);
    
}

// Takes you to the result page and displays your score
function showResult() {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionArea.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + '</span>';
    scoreTotal.innerHTML = scoreTotalTag;
}

function showScore(){
    let scoreNum = document.getElementById("correct-answers-counter")
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Counts the questions and displays them in bottom left corner
function questionCounter(){
    let queLeft = document.getElementById("questions-left-counter");
    queLeftTag = '<span>' + questionNumber +'</span>';
    queLeft.innerHTML = queLeftTag;
}

// removes the previous buttons and answer when new question is loading
function resetState() {
    questionCounter(1);
    showScore(0)
    let questionNumber = 1;
    let userScore = 0;
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild)
        nextQuestionBtn.style.display = "none";
    }
}

function showQuestions(index){
    resetState()       
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ quiz[index].numb + ". " + quiz[index].question +'</span>';
    let option_tag = 
    '<button class="answer-btn"><span>'+ quiz[index].options[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[2] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[3] +'</span></button>';
    questionText.innerHTML = que_tag; //adding new span tag inside question-class
    answerBtnArea.innerHTML = option_tag; // adding new span with option in answer buttons
    setEventListeners();
}

function setEventListeners() {
    [...optionBtn].forEach(option => { // converty nodelist to an array and loop over each option in array
        option.addEventListener("click", event => { // add an click eventlistener to each option button and emits an event
            const span = event.currentTarget.querySelector('span'); // Targets the span
            const text = span.innerText; // gets the innertext to know what was clicked
            const allOptions = answerBtnArea.children.length;
            console.log(text);
            let correctAnswer = [quiz[questionNumber].answer];
            console.log(correctAnswer);
            if(text == correctAnswer) {
                console.log('correct answer')
                userScore ++;
                event.target.classList.add("correct") // sets the class correct to the right answer and it shows green
            }else{
                console.log('incorrect')
                event.target.classList.add("incorrect") // sets the class incorrect to the wrong answer
            }
            for(i=0; i < allOptions; i++){
                answerBtnArea.children[i].classList.add("disabled"); // disabled the buttons once user has made a choice.
            }
            nextQuestionBtn.style.display = "block"; // Shows the Next Question button again after answer made.
        })
    })
}

