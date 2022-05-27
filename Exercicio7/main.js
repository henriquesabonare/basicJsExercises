function calculaMedia(){
  let nome = (prompt("Nome do Aluno: "))

  let nota1 = Number(prompt("Insira a primeira nota: "))
  let nota2 = Number(prompt("Insira a segunda nota: "))
 
  const mediaDasNotas = (nota1 + nota2) /2
  
  const resultado = document.getElementById("result")

  resultado.innerHTML = `<p>Calculando a media final de ${nome}</p>
  <p>As notas obtidas foram ${nota1} e ${nota2}</p>
  <p>A média final será ${mediaDasNotas}</p>`
}