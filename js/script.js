
function mostrarModal() {

    $("#modalTermos").modal("show");

}


function confirmarTermos() {

    //prop() metodo jquery  
    if (!$('#agree-term').prop('checked')) {
        $('#agree-term').prop('checked', true);
        alert("termos aceitos com sucesso");
    }

}

function entrar() {
    const nome = $("#user").val();
    const senha = $("#password").val();

    if (!nome || !senha) {
        alerta("Atenção", "campos vazios", "warning");
        return;
    }

    EncaminharUsuario(nome);

}

function EncaminharUsuario(nome) {
    localStorage.setItem("nome", nome);
    window.location.href = "./areaUser.html";
}