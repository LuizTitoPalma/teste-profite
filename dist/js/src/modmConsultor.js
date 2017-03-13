var modmConsultor = (function (window, document) {

    function funcConsultor(callback) {
        newContent = '<div id="closeModal" class="product-title"></div>';
        newContent += '<p class="product-title"><span><h1><b>Tela do Consultor:</b></h1></span></p><br><br>';
        moduloModal.callModal(newContent);

        ret = 'Consultor';
        if (typeof callback === "function") {
            callback(ret);
        }
    }

    return{
        funcConsultor: funcConsultor
    };

}(window, document));