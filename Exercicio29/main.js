let resultado = document.querySelector("section")

let date = new Date()


function nascimento(){
  let tempoGestacao = Number(prompt("Quantas semanas de gestação?"))


  const mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

  let convertSemanasEmMeses = Math.floor(tempoGestacao / 4)

  let mesesRestantes = 9 - convertSemanasEmMeses

  let semanasRestantes =  40 - tempoGestacao 

  let mesNascimento = date.getMonth() + mesesRestantes

  mesNascimento = mes[mesNascimento]

  resultado.innerHTML += `<h2>Você esta de ${tempoGestacao} Semanas </h2>`

  resultado.innerHTML += `<p>Seu bebê esta com ${convertSemanasEmMeses} meses. </p>`

  resultado.innerHTML += `<p> Restam ${mesesRestantes} meses para o nascimento do seu bebê`

  resultado.innerHTML += `<p> Restam ${semanasRestantes} semanas para o nascimento do seu bebê`

  resultado.innerHTML += `<p> Seu bebê nascerá por volta do mês de ${mesNascimento}`



  if (tempoGestacao < 4 || tempoGestacao >= 40){
    resultado.innerHTML = `<p><strong>Digite um número Válido</strong></p>` 
  }

}
