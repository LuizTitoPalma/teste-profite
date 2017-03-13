var modmBanner = (function (window, document) {

    function modalBanner(janela, callback) {
        newContent = '<div id="closeModal" class="product-title"></div>';
        newContent += '<p class="product-title"><span><h1><b>Você clicou no Banner:</b></h1></span></p><br>';
        newContent += '<img src="imagens/banner/banner' + (janela+1) + '.jpg"></img>';

        moduloModal.callModal(newContent);

        ret = 'Clicado no banner ' + janela;
        if (typeof callback === "function") {
            callback(ret);
        }
    }

    return{
        modalBanner: modalBanner
    };

}(window, document));