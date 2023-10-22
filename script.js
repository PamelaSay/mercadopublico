const question = document.querySelector (".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestar=document.querySelector(".finish button");

import questions from "./questions.js";

let currentquizz_dois = 0;
let questionsCorrect = 0; 

btnRestar.onclick =()=>{
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentquizz_dois = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e){
    if(e.target.getAttribute("data-correct") === "true"){
        questionsCorrect++ ;
    }

    if(currentquizz_dois < questions.length -1) {
      currentquizz_dois++;
      loadQuestion();
    } else{
        finish();
    }
}

function finish(){
    textFinish.innerHTML = "voce acertou ${questionsCorrect} de ${quest.length}";
    content.style.display ="none";
    contentFinish.style.display ="flex";
}

function loadQuestion(){
    spnQtd.innerHTML = ${currentquizz_dois+1}/${questions.length};
    const item = questions[currentquizz_dois];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) =>{
        const div = document.createElement("div");

        div.innerHTML = " 
       <button class = "answer" data-correct = "${answer.correct}">
            $ {answer.Option}
        </button>
        ";

        answer.appendChild(div);
    });
}
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click",nextQuestion);
    });
}

loadQuestion();
