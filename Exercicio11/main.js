
  

  
function mediaEParabens(){

  let nome = String(prompt("Digite o nome do Aluno:"))
  let nota1 = Number(prompt(`insira a primeira nota do ${nome}`))
  let nota2 = Number(prompt(`além de ${nota1} insira a segunda nota do ${nome}`))

  const media = (nota1 + nota2) / 2
  let mensagem

  if(media >= 6){
    mensagem = "Meus Parabéns!!"
  }else{
    mensagem = "Estude um pouco mais!"
  }

  let resultado = document.getElementById("result")

  resultado.innerHTML = `<p>Calculando a media de ${nome}</p>
  <p>As notas obtidas foram ${nota1} e ${nota2}</p>
  <p>A média final será ${media}</p>
  <p>A mensagem que temos é: ${mensagem}</p>
  `
}