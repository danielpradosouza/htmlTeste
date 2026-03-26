var cliques = document.querySelector('#clicou');
var acao = document.querySelector('#acao');

function showAlert() {
    alert("esse é um alerta do java");
    acao.innerText = "alerta confirmado";
}

function showConfirm() {
    let resposta = confirm("deseja confirmar?");
    if (resposta) {
        acao.innerText = "Confirmou a ação";
    } else {
        acao.innerText = "Não confirmou a ação";
    }
}
function nomePrompt(){
var nome =prompt("Digite o seu nome")
acao.innerText=('Olá ' +nome)
}
function showLog(){
    console.log("Mensagem no console!")
    acao.innerText="Mensagem no console"
}
function nomeInput(){
    let nomeInpu=document.getElementById('inome').value
    acao.innerText=('Olá '+nomeInpu)
    
}
function mudarTitulo(){
    let mudaTitulo=document.getElementById('titulo').value
    acao.innerText='Título alterado ✅'
}
function mudarTema(){
    document.body.classList.toggle("tema-claro");
   document.body.style.background = 'white';
}