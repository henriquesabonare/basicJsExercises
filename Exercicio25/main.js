let result = document.getElementById('result')

function contarOsPares(){

  let number = Number(document.getElementById("number").value)

  result.innerHTML += `<h2>Contando de 0 atΓ© ${number}</h2>`  

  while(number > 0){
    result.innerHTML += `<strong> <mark> ${number}</mark></strong> π `
    number--
  }
  result.innerHTML += ` π`
}