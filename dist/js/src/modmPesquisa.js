var modmPesquisa = (function (window, document) {

    function funcPesquisa(callback) {
        
        campo = document.getElementById("campo-pesquisa").value;
        
        newContent = '<div id="closeModal" class="product-title"></div>';
        newContent += '<p class="product-title"><span><h1><b>Pesquisando por: "'+campo.trim()+'"</b></h1></span></p><br>';

        newContent += '<p class="product-price">';
        newContent += 'Na verdade não deve abrir essa janela, mas<br> realizar uma chamada ajax para um servidor.<br>';
        newContent += '(Apenas exemplo do mapeamento da página).';
        newContent += '<br><br></p>';

        moduloModal.callModal(newContent);

        ret = 'Pesquisa '+campo;
        if (typeof callback === "function") {
            callback(ret);
        }
    }

    return{
        funcPesquisa: funcPesquisa
    };

}(window, document));