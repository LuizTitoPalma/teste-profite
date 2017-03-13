var modmCadastro = (function (window, document) {

    function funcLogin(callback) {
        newContent = '<div id="closeModal" class="product-title"></div>';
        newContent += '<p class="product-title"><span><h1><b>Tela de Login:</b></h1></span></p><br><br>';

        moduloModal.callModal(newContent);

        ret = 'login';
        if (typeof callback === "function") {
            callback(ret);
        }
    }

    function funcCadastro(callback) {
        newContent = '<div id="closeModal" class="product-title"></div>';
        newContent += '<p class="product-title"><span><h1><b>Tela de Cadastro:</b></h1></span></p><br><br>';

        moduloModal.callModal(newContent);

        ret = 'Cadastro';
        if (typeof callback === "function") {
            callback(ret);
        }
    }

    return{
        funcLogin: funcLogin,
        funcCadastro: funcCadastro
    };

}(window, document));