function seuNome(){

let nome = window.prompt("Qual seu nome?")

const alterarTexto = document.getElementById("alteracaoTexto")

alterarTexto.innerHTML= `<p>Olá, <strong>${nome}!</strong> É um grande prazer te conhecer! 🖖</p>
`
}