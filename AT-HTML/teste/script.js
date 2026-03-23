function showAlert() {
    alert("Este é um alerta!");
}

function showConfirm() {
    confirm("Você confirma?");
}

function showPrompt() {
    prompt("Qual é o seu nome?");
}

function showLog() {
    console.log("Mensagem no console!");
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    alert("O nome digitado foi: " + nome);
}

function mudarTitulo() {
    document.querySelector("h1").innerText = "Título alterado com sucesso!";
    document.getElementById("status-text").innerHTML = "Título alterado ✅";
}

function trocarTema() {
    document.body.classList.toggle("tema-claro");
}

function somar() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    alert("Resultado: " + (a + b));
}

// Hover Box
const box = document.getElementById("hoverBox");
const notif = document.getElementById("notif");

box.addEventListener("mouseenter", () => {
    notif.style.display = "block";
});

box.addEventListener("mouseleave", () => {
    notif.style.display = "none";
});