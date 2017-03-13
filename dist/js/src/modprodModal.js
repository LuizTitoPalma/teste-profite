var modprodModal = (function (window, document) {

//    //Calcula valores para os produtos (desconto, valor parcela..)
//    function calculaDados(actual_Potion, callback) {
//        var preco_normal = actual_Potion.preconormal.trim();
//        var preco_promo = actual_Potion.precopromo.trim();
//        var num_parc = actual_Potion.parcelas;
//        var val_parc_n = 0;
//        var economia_n = 0;
//
//        if (preco_promo === preco_normal) {
//            preco_promo = '';
//        }
//
//        if (preco_normal && preco_promo) {
//            preco_final = preco_promo;
//        } else if (preco_normal) {
//            preco_final = preco_normal;
//        } else if (preco_promo) {
//            preco_final = preco_promo;
//        }
//
//        preco_normal = preco_normal.replace(",", ".");
//        preco_final = preco_final.replace(",", ".");
//        preco_normal_n = parseFloat(preco_normal).toFixed(2);
//        preco_final_n = parseFloat(preco_final).toFixed(2);
//
//        economia_n = (preco_normal_n - preco_final_n).toFixed(2);
//
//        if (num_parc && num_parc > 0) {
//            val_parc_n = (preco_final_n / num_parc).toFixed(2);
//        }
//
//        if (preco_normal !== '') {
//            preco_normal = preco_normal_n.toString();
//        }
//        preco_final = preco_final_n.toString();
//        economia = economia_n.toString();
//        parcela = val_parc_n.toString();
//
//        preco_normal = preco_normal.replace(".", ",");
//        preco_final = preco_final.replace(".", ",");
//        economia = economia.replace(".", ",");
//        parcela = parcela.replace(".", ",");
//
//        retorno = preco_normal + "~";
//        retorno += preco_promo + "~";
//        retorno += preco_final + "~";
//        retorno += num_parc + "~";
//        retorno += parcela + "~";
//        retorno += economia + "~";
//        if (typeof callback === "function") {
//            callback(retorno);
//        }
//    }

    //Monta o conteúdo básico das páginas carrinho e avaliação
    function telasProduto(actual_Potion, callback) {
        montaContent = '';

        modulocalcProd.calculaDados(actual_Potion, function (retorno) {
            tmp = retorno.split("~");
            preco_normal = tmp[0];
            preco_promo = tmp[1];
            preco_final = tmp[2];
            num_parc = tmp[3];
            parcela = tmp[4];
            economia = tmp[5];
        });

        montaContent += '<p class="product-title"><span>' + actual_Potion.titulo + ' ( Id: ' + actual_Potion.id + ' )</span></p>';
        montaContent += '<p class="product-price">R$ ' + preco_final;

        if (num_parc > 0) {
            montaContent += ' ( ' + num_parc + ' X ' + parcela + ' )';
        }

        montaContent += '</p>';
        montaContent += '<img src="imagens/sapatos/' + actual_Potion.imagem + '">';
        
        if (typeof callback === "function") {
            callback(montaContent);
        }
    }

    //Mapeia Zoom, Classificação e carrinho
    function bindModal(produtos) {

        for (var i = produtos.length - 1; i >= 0; --i) {

            var linkClicado = '';

            //checa se o link "estrelas" foi clicado e seta 'linkClicado'
            var x = document.getElementById(produtos[i].id).getElementsByTagName('a')[0].onclick = function () {
                linkClicado = 'estrelas';
            };

            //checa se o link "comprar" foi clicado e seta 'linkClicado'
            var x = document.getElementById(produtos[i].id).getElementsByTagName('a')[1].onclick = function () {
                linkClicado = 'carrinho';
            };

            //Verifica o event click
            document.getElementById(produtos[i].id).onclick = function () {

                var myid = this.id;
                var newContent = "";

                newContent += '<div id="closeModal" class="product-title"></div>';
                moduloJson.loadJSON(function (resposta) {
                    var actual_JSON = JSON.parse(resposta);
                    var actual_Potion = actual_JSON.products[myid - 1];

                    if (linkClicado === '') {
                        newContent += '<img src="imagens/sapatos/' + actual_Potion.imagemzoom + '">';
                    }

                    if (linkClicado === 'estrelas') {
                        newContent += '<p class="product-title"><span><h1><b>CLASSIFIQUE ESTE PRODUTO:</b></h1></span></p><br>';

                        modprodModal.telasProduto(actual_Potion, function (xdadosproduto) {
                            newContent += xdadosproduto;
                        });
                        
                        if (actual_Potion.classificacao === 0) {
                            newContent += '<p class="product-price">Este produto ainda não foi classificado.</p><br>';
                        } else if (actual_Potion.classificacao === 1) {
                            newContent += '<p class="product-price">Atualmente classificado com ' + actual_Potion.classificacao + ' estrela !!!</p><br>';
                        } else {
                            newContent += '<p class="product-price">Atualmente classificado com ' + actual_Potion.classificacao + ' estrelas !!!</p><br>';
                        }
                     
                        newContent += '<p class="product-price">(Página de avaliação do produto pelo comprador)</p><br>';
                        linkClicado = '';
                    }

                    if (linkClicado === 'carrinho') {
                        newContent += '<p class="product-title"><span><h1><b>ADICIONADO AO CARRINHO:</b></h1></span></p><br>';

                        modprodModal.telasProduto(actual_Potion, function (xdadosproduto) {
                            newContent += xdadosproduto;
                        });

                        linkClicado = '';
                    }

                    moduloModal.callModal(newContent);
                });
            };
        }
    }

    return {
        bindModal: bindModal,
        telasProduto: telasProduto
        //calculaDados: calculaDados
    };

}(window, document));
