let result = document.getElementById("result")

function contarOsPares(){

  let contador = 1

  result.innerHTML += `<h2>Contando de 1 atΓ© 10, mostrando os pares</h2>`  

  while(contador <= 10){

    if (contador %2 == 0) {
      result.innerHTML += `<strong> <mark> ${contador}</mark></strong> π `
    }    
    contador ++
  }
  result.innerHTML += ` π`
}