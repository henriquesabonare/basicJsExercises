let resultado

let message

let result = document.getElementById("result")

function selectCalc(){
    let firstValue = Number(prompt("Digite o primeiro valor:"))
    
    let secondValue = Number(prompt("Digite o segundo número:"))
    
    let decision = Number(prompt(`Valores informados: ${firstValue} e ${secondValue}. 
  O que vamos fazer? 
  [1] Somar 
  [2] Subtrair 
  [3] Multiplicar 
  [4] Dividir`))


    if(decision >= 5 || decision <= 0){
        message = `<h1>Calculando... </h1> <p> OPÇÃO INVÁLIDA! Você digitou ${firstValue} e ${secondValue}, mas não sei o que fazer com eles.</p>`
    }else if(decision == 1){
         resultado = firstValue + secondValue
        message = `<h1>Calculando...</h1> <p>${firstValue} + ${secondValue} = ${resultado} </p>`
    }else if(decision == 2){
        resultado = firstValue - secondValue
        message = `<h1>Calculando...</h1> <p>${firstValue} - ${secondValue} = ${resultado}`
    }else if(decision == 3){
        resultado = firstValue * secondValue
        message = `<h1>Calculando...</h1> <p>${firstValue} x ${secondValue} = ${resultado}`
    }else{
        resultado = firstValue / secondValue
        message = `<h1>Calculando...</h1> <p>${firstValue} / ${secondValue} = ${resultado}`
    }

    result.innerHTML = `${message}`
  }