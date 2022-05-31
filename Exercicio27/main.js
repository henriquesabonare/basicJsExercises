let result = document.getElementById('result')

function contarOsPares(){
  let number = document.getElementById("number").value

  result.innerHTML += `<h2>Tabuada do ${number}</h2>` 
  
  let multipilcador
  let resultado
  //Aprendizado
 for(multipilcador = 1; multipilcador <=10; multipilcador++){
    resultado = multipilcador * number
    result.innerHTML += `<p>${number} x ${multipilcador} = <strong>${resultado}</strong> </p>`
 }
}