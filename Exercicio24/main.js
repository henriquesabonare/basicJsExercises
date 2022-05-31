let result = document.getElementById("result")

function contarOsPares(){

  let contador = 10

  result.innerHTML += `<h2>Contagem regressiva de 10 a 1</h2>`  

  while(contador > 0){
    result.innerHTML += `<strong> <mark> ${contador}</mark></strong> 👉 `
    contador --
  }
  result.innerHTML += ` 🏁`
}