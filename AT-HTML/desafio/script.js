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
