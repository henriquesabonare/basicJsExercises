let result = document.querySelector("section")

function contar(){
  let contador = 1
  result.innerHTML += `<h2>Contando de 1 atΓ© 10</h2>`

  while(contador <=10){
    result.innerHTML += `${contador} π`
    contador++
  }
  result.innerHTML += `π`
}

