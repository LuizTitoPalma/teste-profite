var moduloProduto = (function (window, document) {

    function createProd(callback) {

        var produtos;

        moduloJson.loadJSON(function (resposta) {
            var actual_JSON = JSON.parse(resposta);
            for (var i = actual_JSON.products.length - 4; i >= 0; --i) {
                var radioInput = document.createElement('input');

                if (actual_JSON.products[i].id === 1) {
                    radioInput.setAttribute('checked', 'checked');
                }
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', 'bslides');
                radioInput.setAttribute('id', 'bslides_' + actual_JSON.products[i].id);

                var slider = document.getElementById('slider2');

                slider.insertBefore(radioInput, slider.childNodes[0]);
            }

            for (var i = 0; i < actual_JSON.products.length; i++) {
                if (i < actual_JSON.products.length - 3) {
                    var arrow = document.createElement('label');

                    arrow.setAttribute('for', 'bslides_' + actual_JSON.products[i].id);
                    document.getElementById('productSliderArrows').appendChild(arrow);
                }

                var newElement = document.createElement('li');

                modulocalcProd.calculaDados(actual_JSON.products[i], function (retorno) {
                    tmp = retorno.split("~");
                    preco_normal = tmp[0];
                    preco_promo = tmp[1];
                    preco_final = tmp[2];
                    num_parc = tmp[3];
                    parcela = tmp[4];
                    economia = tmp[5];
                });

                corpo_produto = '<img class="product-image" src="imagens/sapatos/' + actual_JSON.products[i].imagem + '">';
                corpo_produto += '<img class="product-image-hover" src="imagens/sapatos/' + actual_JSON.products[i].imagemhover + '">';
                corpo_produto += '<p class="product-title"><span>' + actual_JSON.products[i].titulo + '</span></p>';
                corpo_produto += '<span class="product-stars"><a href="javascript: void(0);"><img src="css/imagens/estrela' + actual_JSON.products[i].classificacao + '.png"></a></span>';

                corpo_produto += '<div class="bloco-price">';

                //Tem preco normal e promo
                if (preco_normal !== '' && preco_promo !== '') {
                    corpo_produto += '<p class="product-previous-price">De: R$ ' + preco_normal + '</p>';
                }

                corpo_produto += '<p class="product-price">Por: <i>R$ ' + preco_final + '</i></p>';

                if (num_parc > 0) {
                    corpo_produto += '<p class="product-price-times">ou <span>até ' + num_parc + ' X </span> de <span>R$ ' + parcela + '</span></p>';
                } else {
                    corpo_produto += '<p class="product-price-times">&nbsp;</span></p>';
                }

                //Compensa o espaço quando não tem os 2 precos
                if (preco_normal === '' || preco_promo === '') {
                    corpo_produto += '<p class="product-previous-price">&nbsp</p>';
                }

                corpo_produto += '</div>';

                corpo_produto += '<a class="product-buy" href="javascript: void(0);">Comprar</a>';

                if (economia !== '0,00') {
                    corpo_produto += '<p class="product-save">Economize: R$ ' + economia + '</p>';
                } else {
                    corpo_produto += '<p class="product-save">&nbsp;</p>';
                }


                newElement.id = actual_JSON.products[i].id;
                newElement.className = "prod";
                newElement.innerHTML = corpo_produto;
                document.getElementById("products-list").appendChild(newElement);
            }

            var firstArrow = document.createElement('label');
            firstArrow.setAttribute('for', 'bslides_' + actual_JSON.products[0].id);
            firstArrow.setAttribute('class', 'goto-first');
            var lastArrow = document.createElement('label');
            lastArrow.setAttribute('for', 'bslides_' + actual_JSON.products[actual_JSON.products.length - 4].id);
            lastArrow.setAttribute('class', 'goto-last');

            document.getElementById('productSliderArrows').appendChild(firstArrow);
            document.getElementById('productSliderArrows').appendChild(lastArrow);

            var price = document.querySelectorAll(".product-previous-price");

            for (var i = 0; i < price.length; i++) {
                if (price[i].innerHTML.length < 7) {
                    price[i].style.opacity = 0;
                }
            }

            produtos = document.querySelectorAll(".prod");
            if (typeof callback === "function") {
                callback(produtos);
            }
        });
    }

    return {
        createProd: createProd
    };

}(window, document));
