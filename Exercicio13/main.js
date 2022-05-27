function maiorMenorIgual(){

  const numero1 = Number(prompt("Digite o primeiro número: "))
  const numero2 = Number(prompt("Digite o segundo número: "))

  let maiorValor 
  if (numero1 > numero2){
    maiorValor = `o maior valor é ${numero1}`
  }else if(numero2 > numero1){
    maiorValor = `o maior valor é ${numero2}`
  }else{
    maiorValor = "ambos são <strong>IGUAIS</strong>"
  }

  let resultado = document.getElementById('result')
  resultado.innerHTML = `<p>Analisando os valores ${numero1} e ${numero2}, ${maiorValor}</p>`
}