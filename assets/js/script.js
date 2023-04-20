// Get elements by id
const welcomeRulesArea = document.getElementById("welcome-rules-area");
const questionArea = document.getElementById("quiz-area");
const resultScoreArea = document.getElementById("score-area");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const questionText = document.querySelector(".questions-class");
const answerBtnArea = document.getElementById("answer-btn-area");
const optionBtn = document.getElementsByClassName("answer-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

// variables that change during the quiz
let questionNumber = 0;
let userScore = 0;

// start button action
function startBtnQuiz() {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    showQuestions(0);
    questionCounter(questionNumber);
    showScore();
    startTimer(15);    
};

// Next question button, if question count is less than total question length then showResult
function nextQueBtn() {
     questionNumber++;   
    if(questionNumber < quiz.length){ 
        showQuestions(questionNumber);
        questionCounter(questionNumber);
        showScore();
        clearInterval(counter);
        startTimer(15);
    }else{
        questionNumber = 0;
        showResult();
    }
};

// restart quiz button at the end of the quiz
function restartQuizButton() {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'none';
    questionArea.style.display = 'block';
    userScore = 0;
    questionCounter(questionNumber);
    questionCounter(0);
    showQuestions(0);
    startTimer(15);
};

// Sets the timer to 15 seconds on each question
let counter;
let seconds;
let elapsedTime = 0;

/**
 * The startTimer() function that starts the timer on every question, also if no snwer is picked it displays the correct answer
 * displays the text and seconds for the timer
 * shows the correct answer if timer runs out
 * disabled the buttons once the time is out.
 * Shows the Next Question button again after time is out.
 */
function startTimer(time) {
    seconds = time - elapsedTime;
    counter = setInterval(timer, 1000);
    function timer() {
        document.getElementById('timer').innerHTML = "Timer: " + seconds + " secs"; 
        seconds--;
        if (seconds < 0) {
            clearInterval(counter);
            document.getElementById('timer').innerHTML = "Time is out"; 
            let correctAnswer = [quiz[questionNumber].answer];
            const allOptions = answerBtnArea.children.length;
            for(i=0; i < allOptions; i++){
                if(answerBtnArea.children[i].textContent == correctAnswer){
                    answerBtnArea.children[i].classList.add("correct");
                    answerBtnArea.children[i].classList.add("disabled"); 
            }
            nextQuestionBtn.style.display = "block";
        }
        }
    }
}

// Takes you to the result page and displays your score
function showResult() {
    welcomeRulesArea.style.display = 'none';
    resultScoreArea.style.display = 'block';
    questionArea.style.display = 'none';
    let scoreTotal = document.getElementById("score-div");
    let scoreTotalTag = '<span>' + userScore + ' out of 20' + '</span>';// displays the final result of the quiz
    scoreTotal.innerHTML = scoreTotalTag;
}

// Shows the score in the bottom right corner
function showScore(){
    let scoreNum = document.getElementById("correct-answers-counter");
    scoreTag = '<span>' + userScore + '</span>';
    scoreNum.innerHTML = scoreTag;
}

// Counts the questions and displays them in bottom left corner
function questionCounter(){
    let queLeft = document.getElementById("questions-left-counter");
    let queLeftTag = '<span>' + quiz[questionNumber].numb +'</span>';
    queLeft.innerHTML = queLeftTag;
}

// removes the previous buttons and answer when new question is loading, learned that from Easy Tutorials on youtube, link in credit
function resetState() {
    questionCounter(1);
    showScore(0);
    while(answerBtnArea.firstChild) {
        answerBtnArea.removeChild(answerBtnArea.firstChild);
        nextQuestionBtn.style.display = "none";
    }
}
/** 
 * showQuestions() function to show the questions
 * creating a new span and div tag for question and option and passing the value using array index
 * Learned and used the same method as a video from youtube, links i readme
*/
function showQuestions(index) {
    resetState();       
    let que_tag = '<span>'+ quiz[index].numb + ". " + quiz[index].question +'</span>';
    let option_tag = 
    '<button class="answer-btn"><span>'+ quiz[index].options[0] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[1] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[2] +'</span></button>'
    + '<button class="answer-btn"><span>'+ quiz[index].options[3] +'</span></button>';
    questionText.innerHTML = que_tag; //adding new span tag inside question-class
    answerBtnArea.innerHTML = option_tag; // adding new span with option in answer buttons
    getAnswer();
}

/** 
 * getAnswer() sets the eventlistener for the buttons and checks if the answer is correct or incorrect. Learned this from a tutor session
 * converting nodelist to an array and loop over each option in array
 * add an click eventlistener to each option button and emits an event
 * Display a correct classList to correct answers and incorrect classList to incorrect answers, also displays correct answer if picked incorrect
 * disables buttons when you clicked a answer
 * Shows the Next Question button again after answer made.
*/
function getAnswer() {
    [...optionBtn].forEach(option => { 
        option.addEventListener("click", event => { 
            const span = event.currentTarget.querySelector('span');
            const text = span.innerText; 
            const allOptions = answerBtnArea.children.length;
            console.log(text);
            let correctAnswer = [quiz[questionNumber].answer];
            console.log(correctAnswer);
            if(text == correctAnswer) {
                console.log('correct answer');
                userScore ++;
                event.target.classList.add("correct"); 
                clearInterval(counter);
            }else{
                console.log('incorrect');
                event.target.classList.add("incorrect"); 
                for(i=0; i < allOptions; i++){
                    if(answerBtnArea.children[i].textContent == correctAnswer){
                    answerBtnArea.children[i].classList.add("correct");
                    answerBtnArea.children[i].classList.add("disabled");
                }
            }
                clearInterval(counter);
            }
                for(i=0; i < allOptions; i++){
                answerBtnArea.children[i].classList.add("disabled");
            }
            nextQuestionBtn.style.display = "block"; 
        });
    });
}


