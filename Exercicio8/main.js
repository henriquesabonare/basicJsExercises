function variosCalculos(){
  let numero = Number(prompt("Digite o número desejado:"))

  const valorAbsoluto = numero

  let inteiro = numero.toFixed()

  let inteiroMaisProximo = Math.round(numero)

  let raizQuadrada = Math.sqrt(numero)

  let raizCubica = Math.cbrt(numero)  

  let elevadoADois = numero ** 2 

  let elevadoAoCubo = numero ** 3

  const resultado = document.getElementById("result")
  resultado.innerHTML = `<p>O número a ser analisado aqui será o ${numero}</p> <hr> 
  <p>O seu valor absoluto é ${valorAbsoluto}</p> 
  <p>A sua parte inteira é ${inteiro}</p> 
  <p>O seu valor inteiro mais próximo é ${inteiroMaisProximo}</p> 
  <p>A sua raiz quadrada é ${raizQuadrada}</p> 
  <p>A sua raiz cúbica é ${raizCubica}</p> 
  <p>O valor de ${numero}² é ${elevadoADois}</p> 
  <p>O valor de ${numero}³ é ${elevadoAoCubo}</p> `
}

