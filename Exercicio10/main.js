// let result = document.getElementById("result") - Outra alternativa

function acao1(){
  const p = document.createElement("p")
  const content = document.createTextNode("Clicou no primeiro botão")
  p.appendChild(content)

  const body = document.body
  body.appendChild(p)
}
function acao2(){
  const p = document.createElement("p")
  const content = document.createTextNode("Clicou no segundo botão")
  p.appendChild(content)

  const body = document.body
  body.appendChild(p)
}

// function acao2(){
// Outra alternativa  
//   result.innerHTML += `<p>Clicou no segundo botão</p>`
// }

function acao3(){
  const p = document.createElement("p")
  const content = document.createTextNode("Clicou no terceiro botão")
  p.appendChild(content)

  const body = document.body
  body.appendChild(p)
}

function acao4(){
  const p = document.createElement("p")
  const content = document.createTextNode("Clicou no quarto botão")
  p.appendChild(content)

  const body = document.body
  body.appendChild(p)
}