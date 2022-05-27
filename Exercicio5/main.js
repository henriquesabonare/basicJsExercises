alert("Bem-Vindo(a) ao meu site!!")

function selecionarNumero(){
   let numero = prompt("Digite um número:")
   let dobroDoNumero =  numero * 2
   let metadeDoNumero = numero / 2
   const resultado = document.getElementById('result')

   resultado.innerHTML = `O dobro de ${numero} é ${dobroDoNumero} e a metade é ${metadeDoNumero}! `
}