/*oficial */
 //Função que será executada quando o botão for clicado
 function abrirHistoria(){
  // Redireciona para a outra página window.location.href='file:///C:/Users/pam15/Downloads/mercado%20publico/historia.html';
  }
  //Adiciona um evento de cliente ao botão que chamará a função abrir História
  document.getElementById('Historia').addEventListener('click',abrirHistoria);
   
  //Função que será executada quando o botão for clicado
   function abrirbotaoPlanta(){
  // Redireciona para a outra página window.location.href='file:///C:/Users/pam15/Downloads/mercado%20publico/historia.html';
  }
  //Adiciona um evento de cliente ao botão que chamará a função abrir História
  document.getElementById('botaoPlanta').addEventListener('click',abrirbotaoPlanta);

   //Função que será executada quando o botão for clicado
   function abrirQuizz(){
  // Redireciona para a outra página window.location.href='file:///C:/Users/pam15/Downloads/mercado%20publico/quizz.html';
  }
  //Adiciona um evento de cliente ao botão que chamará a função abrir História
  document.getElementById('Quizz').addEventListener('click',abrirQuizz);



        function calcularPontuacao(){
            //Inicializa a pontuação
            var pontuacao = 0;

            //Obtém as respostas selecionadas
            var respostas =
document.forms["quizzForm"].elements;

            //Loop pelas respostas e soma os valores de pontuação das respostas corretas
            for(var i=0; i<respostas.length; i++) {
                                            if(respostas[i].type == 'radio' && respostas[i].checked){
                                                                             pontuacao += parseIn(respostas[i].value);
                                            }
            }
            //Exibe a pontuação
            var resultadoDiv =
document.getElementById("resultado");
            resultadoDiv.innerHTML = "Sua pontuação é:" + pontuacao;
        }
   


//exemplos
const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá mundo!";


let myVariable = "Bob";


let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Sim, eu amo sorvete de chocolate!");
} else {
  alert("Aaaah, mas chocolate é o meu favorito…");
}


document.querySelector("html").addEventListener("click", function () {
    alert("Ai! Pare de me cutucar!");
  });


  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
  }
