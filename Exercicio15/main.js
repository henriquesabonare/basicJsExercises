function dataEHora(){
  let meses = new Array('Jan', "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez")
  let semanas = new Array('Dom', "Seg", "Ter", "Qua", "Qui", "Sex", "Sab")

  let data = new Date

 
 let dia = data.getDate()
 let mes = data.getMonth()
 let ano = data.getFullYear()
 let diaDaSemana = data.getDay()
 let hora = data.getHours()
 let minutos  = data.getMinutes()
 let segundos = data.getSeconds()

 let resultado = document.getElementById("result")

 resultado.innerHTML = `
 <p>Dia: ${dia}</p>
 <p>Mês: ${meses[mes]}</p>
 <p>Ano: ${ano}</p>
 <p>Dia da Semana: ${semanas[diaDaSemana]}</p>
 <p>Hora: ${hora}</p>
 <p>Minutos: ${minutos}</p>
 <p>Segundos: ${segundos}</p>
 `
}