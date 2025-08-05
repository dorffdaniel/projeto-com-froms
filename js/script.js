
function mostrarModal(){

    $("#modalTermos").modal("show");


}


function confirmarTermos(){

    //prop() metodo jquery  
    if(!$('#agree-term').prop('checked')){ 
        $('#agree-term').prop('checked', true);
        alert("termos aceitos com sucesso");
    }

}
