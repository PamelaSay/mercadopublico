const questions = document.querySelector(".quest");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestar=document.querySelector(".finish button");

import question from "./quest";

let currentIndex = 0;
let questionsCorrect = 0; 

btnRestar.onclick =()=>{
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e){
    if(e.target.getAttribute("data-correct")==="true"){
        questionsCorrect++;
    }

    if(currentIndex<questions.length -1){
      currentIndex++;
      loadQuestion();
    }else{
        finish();
    }
}

function finish(){
    textFinish.innerHTML = "voce acertou ${questionsCorrect} de ${questionslength}";
    content.style.display ="none";
    contentFinish.style.display ="flex";
}

function loadQuestion(){
    spnQtd.innerHTML = ${currentIndex+1}/${questionslength};
    const item = questions[currentIndex];
    answers.innerHTML = "./quest.js";
    question.innerHTML = item.questions;

    item.answers.forEach((answer) =>{
        const div = document.createElement("div");

        div.innerHTML = 
        <button class = "answer" data-correct="${answer.correct}">
            ${answer.Option}
        </button>
        ;
        answer.appendChild(div);
    });
    document.querySelectorAll(".answer").forEach((item)=>{
        item.addEventListener("click",nextQuestion);
    });
}

loadQuestion();