function calcularPontuacao(){
            //Inicializa a pontuação
            var pontuacao = 0;

            //Obtém as respostas selecionadas
            var respostas =
document.forms["quizzForm"].elements;

            //Loop pelas respostas e soma os valores de pontuação das respostas corretas
            for(var i=0; i<respostas.length; i++) {
                 if(respostas[i].type == 'radio' && respostas[i].checked){
                        pontuacao += parseIn(respostas[i].value);  }
            }
            //Exibe a pontuação
            var resultadoDiv =
document.getElementById("resultado");
            resultadoDiv.innerHTML = "Sua pontuação é:" + pontuacao;
        }
