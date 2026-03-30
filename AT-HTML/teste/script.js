var cliques = document.querySelector('#clicou');
var acao = document.querySelector('#acao');
let contador = 0;

// ALERT
function showAlert() {
    alert("Esse é um alerta do JavaScript!");
    acao.innerText = "Alerta confirmado ✅";
}

// CONFIRM
function showConfirm() {
    let resposta = confirm("Deseja confirmar?");
    acao.innerText = resposta ? "Confirmou a ação" : "Não confirmou a ação";
}

// PROMPT
function nomePrompt(){
    let nome = prompt("Digite o seu nome");
    acao.innerText = 'Olá ' + nome;
}

// CONSOLE.LOG
function showLog(){
    console.log("Mensagem no console!");
    acao.innerText = "Mensagem enviada ao console ✅";
}

// INPUT NOME
function nomeInput(){
    let nomeInpu = document.getElementById('inome').value;
    acao.innerText = 'Olá ' + nomeInpu;
}

// MUDAR TÍTULO
function mudarTitulo(){
    document.querySelector('#status h1').innerText = "Título alterado ✅";
    acao.innerText = "Título alterado ✅";
}

// TEMA
function mudarTema(){
    document.body.classList.toggle("temaClaro");
}

// CONTADOR DE CLIQUES (opcional)
function contarClique() {
    contador++;
    cliques.innerText = contador;
}

// ✅ SOMA DOS NÚMEROS
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 + n2;

    acao.innerText = `A soma é: ${resultado}`;
}