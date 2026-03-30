var cliques = document.querySelector('#clicou');
var acao = document.querySelector('#acao');
var contador=0
var passarOMuose=document.getElementById('mouse')
function incrementar(){
    contador++
    cliques.innerText=contador
}

function showAlert() {
    incrementar()
    alert("esse é um alerta do java");
    acao.innerText = "alerta confirmado";
}

function showConfirm() {
    incrementar()
    let resposta = confirm("deseja confirmar?");
    if (resposta) {
        acao.innerText = "Confirmou a ação";
    } else {
        acao.innerText = "Não confirmou a ação";
    }
}
function nomePrompt(){
        incrementar()
var nome =prompt("Digite o seu nome")
acao.innerText=('Olá ' +nome+' (via prompt)')
}
function showLog(){
        incrementar()
    console.log("Mensagem no console!")
    acao.innerText="Mensagem no console"
}
function nomeInput(){
        incrementar()
    let nomeInpu=document.getElementById('inome').value
    acao.innerText=('Olá '+nomeInpu+' (via input)')
    
}
function mudarTitulo() {
    incrementar()
    document.querySelector('#status h1').innerText = "Título alterado ✅";
    acao.innerText = "Título alterado ✅";
}
function mudarTema(){
    incrementar()
    document.body.classList.toggle('temaclaro');
}
function somarNum(){
        incrementar()
    var num1=Number(prompt("Digite o primeiro numero"))
    var num2=Number(prompt("Digite o segundo numero"))
    var soma=num1+num2
    acao.innerText=('a soma de '+num1+" mais "+num2+" é "+soma)
}
passarOMuose.addEventListener("mouseover", () => {
    passarOMuose.innerText = "O Mouse Entrou";
});
passarOMuose.addEventListener("mouseout", () => {
    passarOMuose.innerText = "O Mouse Saiu";
});