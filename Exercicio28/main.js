let result = document.getElementById('result')

function fatorial(){
  let number = Number(document.getElementById("number").value)

  result.innerHTML += `<h2>Calculando <strong>${number}!</strong></h2>` 
  
  let fatorialDoNumero = 1// Adiciona a variável Fatorial do numero sendo igual a 1
  //Aprendizado
 while(number > 1){ //cria o loop considerando enquanto o  number/count > 1
    result.innerHTML += ` ${number} x` //exibe o valor do count
    fatorialDoNumero *= number //calcula fatorialDoNumero = FatorialDoNumero * number. traduzindo: fatorialDoNumero = 1 * (21)
    number -- // subtrai 1 do number no final. ex: number = 21 x 20 x 19
 }
 result.innerHTML += ` 1 = <strong>${fatorialDoNumero.toLocaleString("pt-BR")}</strong>` // traz o resultado da multiplicação do number até number == 2 // toLocaleString == coloca a nomenclatura do resultado de acordo com a norma portuguesa
 
 //ex: number = 21 x 20 x 19
}