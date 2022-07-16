// Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

var minhaDiv
const txt1 = "Sou o texto 1 e os outros textos irão aparecer, aguarde. ;",
  txt2 = " Sou o texto 2 e apareci depois de 3s ;",
  txt3 = " Sou o texto 3 e apareci depois de 5s ;",
  txt4 = " Sou o texto 4 e apareci depois de 2s ;",
  txt5 = " Sou o último texto e apareci depois de 1s ;";
function mostrarTextosNaTela() {
 minhaDiv = document.getElementById("souUmaDiv")
 minhaDiv.style.color = "blue"
 minhaDiv.innerHTML = txt1;

setTimeout(function(){
  minhaDiv.innerHTML += txt2;
  setTimeout(function(){
    minhaDiv.innerHTML += txt3;
    setTimeout(function(){
      minhaDiv.innerHTML += txt4;
      setTimeout(function(){
        minhaDiv.innerHTML += txt5;
      }, 1000);
    }, 2000);
  }, 5000);
}, 3000);
}