var modulocalcProd = (function (window, document) {

    //Calcula valores para os produtos (desconto, valor parcela..)
    function calculaDados(actual_Potion, callback) {
        var preco_normal = actual_Potion.preconormal.trim();
        var preco_promo = actual_Potion.precopromo.trim();
        var num_parc = actual_Potion.parcelas;
        var val_parc_n = 0;
        var economia_n = 0;

        if (preco_promo === preco_normal) {
            preco_promo = '';
        }

        if (preco_normal && preco_promo) {
            preco_final = preco_promo;
        } else if (preco_normal) {
            preco_final = preco_normal;
        } else if (preco_promo) {
            preco_final = preco_promo;
        }

        preco_normal = preco_normal.replace(",", ".");
        preco_final = preco_final.replace(",", ".");
        preco_normal_n = parseFloat(preco_normal).toFixed(2);
        preco_final_n = parseFloat(preco_final).toFixed(2);

        economia_n = (preco_normal_n - preco_final_n).toFixed(2);

        if (num_parc && num_parc > 0) {
            val_parc_n = (preco_final_n / num_parc).toFixed(2);
        }

        if (preco_normal !== '') {
            preco_normal = preco_normal_n.toString();
        }
        preco_final = preco_final_n.toString();
        economia = economia_n.toString();
        parcela = val_parc_n.toString();

        preco_normal = preco_normal.replace(".", ",");
        preco_final = preco_final.replace(".", ",");
        economia = economia.replace(".", ",");
        parcela = parcela.replace(".", ",");

        retorno = preco_normal + "~";
        retorno += preco_promo + "~";
        retorno += preco_final + "~";
        retorno += num_parc + "~";
        retorno += parcela + "~";
        retorno += economia + "~";
        if (typeof callback === "function") {
            callback(retorno);
        }
    }

    return{
        calculaDados: calculaDados
    };

}(window, document));


