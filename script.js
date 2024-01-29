const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Language", correct: false},
            { text: "HyperText Markup Language", correct: true},
            { text: "HyperText Markdown Language", correct: false},
            { text: "HyperText Maxup Language", correct: false},
        ]
    },
    {
        question: "What is the purpose of the '<img>' tag in HTML?",
        answers: [
            {text: "Embed an image", correct: true},
            { text: "Link to another webpage", correct: false},
            { text: "Create a table", correct: false},
            { text: "Define a paragraph", correct: false},
        ]
    },
    {
        question: "Explain the difference between HTML, CSS, and JavaScript, and their roles in web development.",
        answers: [
            { text: "HTML defines the structure of a web page.", correct:false},
            { text: "CSS controls the presentation and styling of a web page.", correct: false},
            { text: "JavaScript adds interactivity and dynamic behavior to a web page.", correct: false},
            { text: " All of the above", correct: true},
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "x", correct: false},
            { text: "*", correct: false},
            { text: "-", correct: false},
            { text: "=", correct: true},
        ]
    },
    {
        question: "What is the difference between div and span elements in HTML?",
        answers: [
            { text: "Both are the same, just different names.", correct: false},
            { text: "div can contain other elements, while span cannot.", correct: false},
            { text: "div is used for layout, while span is used for formatting", correct: false},
            { text: "div defines a block element, while span defines an inline element.", correct: true},
        ]
    },
    {
        question: "What is the meaning of URL?",
        answers: [
            { text: "Unique Resource Locator", correct: true},
            { text: "Universal Reference Layout", correct: false},
            { text: "Uniform Resource Link", correct: false},
            { text: "User Reference Location", correct: false},
        ]
    },
    {
        question: "What is responsive design?",
        answers: [
            { text: "Using bright colors and animations to attract attention", correct: false},
            { text: "Designing websites that look good on all devices (desktop, mobile, tablet)", correct: true},
            { text: "Making a website look like it was printed on paper", correct: false},
            { text: "Hiding content on smaller screens", correct: false},
        ]
    },
    {
        question: "What does HTTP stands for?",
        answers: [
            { text: "Hyper Text Protocol", correct: true},
            { text: "Home Transfer Protocol", correct: false},
            { text: "Hyper Terminal Protocol", correct: false},
            { text: "High Tech Protocol", correct: false},
        ]
    },
    {
        question: "What is a browser developer tool?",
        answers: [
            { text: "A tool to inspect and debug websites", correct: true},
            { text: "A tool to build websites", correct: false},
            { text: "A tool to design graphics", correct: false},
            { text: "A tool to manage email", correct: false},
        ]
    },
    {
        question: "What is the symbol used to signify a comment in JavaScript?",
        answers: [
            { text: "// ", correct: true},
            { text: "/* */ ", correct: false},
            { text: "#", correct: false},
            { text: "!", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
            
        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
        
    }
    }

    function selectAnswer(e){
        const selectBtn = e.target;
        const isCorrect = selectBtn.dataset.correct == "true"
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
        }else{
            selectBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block"
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    });

startQuiz();