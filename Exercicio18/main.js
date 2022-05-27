const resultado = document.getElementById("result")
const numeroSorteado = Math.floor(Math.random() * 100 + 1)

function zerar(){
  
  document.getElementById("botao").style.visibility = "hidden"

}
function sorteio(){

  const menor = "MENOR!"
  const maior = "MAIOR!"
  const parabens = "PARABÉNS!"

  let adivinhar = Number(prompt("Qual o seu palpite? "))

  if(adivinhar > numeroSorteado){
    resultado.innerHTML += `<p> Você falou ${adivinhar}. Meu número é <strong>${menor}</strong></p>`
  }else if(adivinhar < numeroSorteado){
    resultado.innerHTML += `<p> Você falou ${adivinhar}. Meu número é <strong>${maior}</strong></p>`
  }else if(adivinhar == numeroSorteado){
    resultado.innerHTML += `<p><strong>${parabens}</strong> Você Acertou! Eu tinha sorteado o valor ${numeroSorteado}!</p>`
    zerar()
  }

}