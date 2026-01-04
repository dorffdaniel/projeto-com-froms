let cadastro = [];

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

function cadastrarNovaConta() {
    let nome = $("#name").val();
    let ultimoNome = $("#lastname").val();
    let email = $("#email").val();
    let senha = $("#passCad").val();

    if (!nome || !ultimoNome || !email || !senha) {
        alerta("Erro", "preencha todos os campos", "warning");
        return;
    }

    cadastro.push(new Cadastro(nome, ultimoNome, email, senha));

    localStorage.setItem("conteudoCad", JSON.stringify(cadastro));

    alerta("sucesso", "Cadastrado com sucesso", "success");

    $("#name").val('')
    $("#lastname").val('');
    $("#email").val('');
    $("#passCad").val('');
}




function entrar() {
    const nome = $("#user").val();
    const senha = $("#password").val();

    if (!nome.trim() || !senha.trim()) {
        alerta("Atenção", "campos vazios", "warning");
        return;
    }


    let nomeCad = JSON.parse(localStorage.getItem("conteudoCad"));
    console.log(nomeCad)

    if (nomeCad == null) {
        if (nome || senha) {
            alerta("Erro", "user invalido, melhor fazer um cadastro", "warning");
            return;
        }

    }

    nomeCad.forEach(el => {

        if (nome == el.nome && senha == el.senha) {
            EncaminharUsuario(nome);
        } else {
            alerta("Erro", "valores incorretos", "error");
        }

    });


}




function EncaminharUsuario(nome) {
    localStorage.setItem("nome", nome);
    window.location.href = "./areaUser.html";
}