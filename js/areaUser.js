
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

buscarNomeUser(); 
