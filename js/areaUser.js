const tarefas = [];

function buscarNomeUser() {
    const nomeUser = localStorage.getItem("nome");
    $("#nome").html(nomeUser);
}

function sair() {

    alerta("Obrigado", "até logo", "success");
    localStorage.clear();

    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000);

}

function verificarTarefasExistentes() {
    if (tarefas.length === 0) {
        $("#contTarefas").addClass("esconder");
    } else {
        $("#contTarefas").removeClass("esconder");
    }
}




function adicionar() {
    let valor = $("#tarefa").val();

    if (!valor.trim()) {
        alerta("Erro", "Campo em falta", "error");
        return;
    }

    let status = 0;

    if (tarefas.length > 0) {
        tarefas.forEach(el => {
            if (valor == el) {
                alerta("Repetida", "Esta tarefa ja foi adicionada", "warning");
                status = 1;
            }
        })
    }

    if (status == 0) {
        tarefas.push(valor);
        $("#tarefa").val("");
        listarTarefas();
        verificarTarefasExistentes();
    }

}

function listarTarefas() {

    let msg = '<ul>'
    tarefas.forEach((el, index) => {
        msg += `<li class="estli"> ${el} <button class="btn btn-danger" onclick="apagarTarefa(${index})">apagar</button> </li>`

    })

    msg += '</ul>'

    $(".res").html(msg);

}

function apagarTarefa(index) {

    tarefas.splice(index, 1);
    listarTarefas();
    alerta("Apagado", "Apagado com sucesso", "success");
    verificarTarefasExistentes();
}




$(document).ready(function () {
    verificarTarefasExistentes();
    listarTarefas();
    buscarNomeUser();
});

