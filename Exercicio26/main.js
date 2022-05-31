let result = document.getElementById('result')

function contarOsPares(){
  let firstValue = Number(document.getElementById("firstValue").value)
  let secondValue = Number(document.getElementById("secondValue").value)

  result.innerHTML += `<h2>Contando de ${firstValue} até ${secondValue}</h2>` 
  
  //Aprendizado
  if(firstValue > secondValue){
    while(secondValue <= firstValue){
      result.innerHTML += `<strong> <mark> ${secondValue}</mark></strong> 👉 `
      secondValue++
      }
  }else if(secondValue > firstValue){
    while(firstValue <= secondValue ){
      result.innerHTML += `<strong> <mark> ${firstValue}</mark></strong> 👉 `
      firstValue++
    }
  }else{
    result.innerHTML += `<p>Não é possível contar pois os números são iguais</p>`
  }
  result.innerHTML += ` 🏁`
}