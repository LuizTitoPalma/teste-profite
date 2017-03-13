var moduloJson = (function (window, document) {

//Baseado no código:
//https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");
        
        /*
        Só funcionará dentro do server.. (http://tito/teste-profite-master)
        ao concluir usar o do projetoecriacao p/html...
        */
        xobj.open('GET', 'data/products.json', true);
        //xobj.open('GET', 'https://projetoecriacao.websiteseguro.com/exemplojson/products.json', true);

        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    return {
        loadJSON: loadJSON
    };

}(window, document));
