const resultado = document.getElementById("result")
let random

function randomNumber(){
// Math.floor(arredonda o numero) //Math.random() * 100 + 1 == gera numero aleatóriamente entre 1 e 100
let random = Math.floor(Math.random() *100 + 1)

resultado.innerHTML += `<p>Acabei de pensar no número <strong>${random}!</strong></p>`

}

function zerar(){
 resultado.innerHTML = ``
}