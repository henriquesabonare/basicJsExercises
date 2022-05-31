
let result = document.querySelector("p")

function estacoes(){
  let mes = prompt("Digite o mês em extenso (ex: Setembro)")
    let testeMesDeValidacao
 
  var mesesDoAno = retornarMesesDoAno();

    for(let i = 0;i < mesesDoAno.length; i ++){
        for(let j =0; j < mesesDoAno[i].length; j++){
            if(mes == mesesDoAno[i][j]){
            testeMesDeValidacao = mesesDoAno[i][1];
            }
        } 
    }
  
  // if(mes == 1){
  //   mes = `Janeiro`
  // }else if(mes == 2){
  //   mes = `Fevereiro`
  // }else if(mes == 3){
  //   mes = `Março`
  // }else if(mes == 4){
  //   mes = `Abril`
  // }else if(mes == 5){
  //   mes = `Maio`
  // }else if(mes == 6){
  //   mes = `Junho`
  // }else if(mes == 7){
  //   mes = `Julho`
  // }else if(mes == 8){
  //   mes = `Agosto`
  // }else if(mes == 9){
  //   mes = `Setembro`
  // }else if(mes == 10){
  //   mes = `Outubro`
  // }else if(mes == 11){
  //   mes = `Novembro`
  // }else if(mes == 12){
  //   mes = `Dezembro`
  // }
   let estacao;
  //Aprendizado
  switch (testeMesDeValidacao.toUpperCase()) { 
    case 'JANEIRO' : case 'FEVEREIRO': case 'MARÇO' : // Podemos testar múltiplos casos em uma mesma linha, desse jeito
        estacao = 'INVERNO'
        break // Nunca se esqueça do break!!!
    case 'ABRIL': case 'MAIO': case 'JUNHO':
        estacao = 'PRIMAVERA'
        break
    case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
        estacao = 'VERÃO'
        break
    case 'OUTUBRO': case 'NOVEMBRO': case'DEZEMBRO' :
        estacao = 'OUTONO'
        break
    default:
        estacao = 'INDEFINIDA'
        break
  }
  result.textContent = `No mês de ${mes}, estamos na estação ${estacao}.`

  console.log(mesesDoAno)
}