let clickbotao = 0

let resultado = document.getElementById("resultClicks")

function quantidadeCliques(){
  ++clickbotao

  resultado.innerHTML = `<p> O contador esta com ${clickbotao} cliques</p>` 
}

function zerarContador(){
  resultado.innerHTML = ``
}