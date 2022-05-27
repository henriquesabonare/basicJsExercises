function somaDoisNumeros(){

  let numero1 = Number(prompt("Digite o primeiro Número: "))
  let numero2 = Number(prompt("Digite o segundo Número: "))

  let somatoria = numero1 + numero2
  
  const resultado = document.getElementById("result")

  resultado.innerHTML = `<p>A soma entre ${numero1} e ${numero2} é igual a <strong>${somatoria}!</strong></p>`
}