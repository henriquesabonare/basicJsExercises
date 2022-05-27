function parOuImpar(){

  let numero = Number(prompt("Insira o número desejado: "))
  let parOuImpar;

  if(numero %2 == 0){
    parOuImpar = "Par"
  }else if(numero %2 == 1){
    parOuImpar = "Ímpar"
  }else{
    parOuImpar = "Número inválido"
  }

  let resultado = document.getElementById("result")

  resultado.innerHTML = `<p>O número ${numero} que foi digitado é <strong>${parOuImpar}!</strong></p>`

}