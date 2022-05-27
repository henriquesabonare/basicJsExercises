
function dateTime(){

  let data = new Date

  const resultado = document.getElementById("result")
  resultado.innerHTML = `<p> O que eu recebi do sistema foi <mark>${data}</mark> </p>`

}