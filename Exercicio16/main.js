function idade(){
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))


  let date = new Date
  let anoAtual = date.getFullYear()
  const calculoIdade = anoAtual - anoNascimento
  
  // let message
  // if(anoNascimento > 2000){
  //   message = "é corno e"
  // }else{
  //   message = ""
  // }
  let resultado = document.getElementById(`result`)
  
  resultado.innerHTML = `Quem nasceu em ${anoNascimento} vai completar ${calculoIdade} anos em ${anoAtual}`
  
}

