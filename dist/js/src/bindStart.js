//Carrega este bloco apenas 1 X
//------------------------------------------------------------------------------
var time_to_slide; //Global
function controlaBanner(modo) {

    if (modo === 'stop') {
        clearTimeout(time_to_slide);
        return;
    }

    time_to_slide = setTimeout(function () {
        var rads = document.getElementsByName('slides');
        for (var i = 0; i < rads.length; i++) {
            if (rads[i].checked) {
                if (i + 1 >= rads.length) {
                    rads[0].checked = true;
                    break;
                }
                rads[i].checked = false;
                rads[i + 1].checked = true;
                break;
            }
        }
        controlaBanner('start');
    }, 5000);
}

//Adiciona eventos ao Id("slider1") para controle do Banner
document.getElementById("banner-frame").addEventListener("click", function () {
    var rads = document.getElementsByName('slides');
    for (var i = 0; i < rads.length; i++) {
        if (rads[i].checked) {
            modmBanner.modalBanner(i, function (resposta) {
                //console.log(resposta);
            });
        }
    }
});
document.getElementById("slider1").addEventListener("mouseover", function () {
    controlaBanner('stop');
    return false;
});
document.getElementById("slider1").addEventListener("mouseout", function () {
    controlaBanner('start');
    return false;
});

//Inicia o movimento
controlaBanner('start');

//Adiciona eventos ao cadastro e ao login
document.getElementById("login").getElementsByTagName('a')[0].addEventListener("click", function () {
    modmCadastro.funcCadastro(function (resposta) {
        //console.log(resposta);
    });
});
document.getElementById("login").getElementsByTagName('a')[1].addEventListener("click", function () {
    modmCadastro.funcLogin(function (resposta) {
        //console.log(resposta);
    });
});

//Adiciona evento para o botão de pesquisa
document.getElementById("bot-pesquisa").addEventListener("click", function () {
    modmPesquisa.funcPesquisa(function (resposta) {
        //console.log(resposta);
    });
});


//Adiciona evento para o link do consultor (o 1 link é mailto..
document.getElementById("contato").getElementsByTagName('a')[1].addEventListener("click", function () {
    modmConsultor.funcConsultor(function (resposta) {
        //console.log(resposta);
    });
});

//------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    moduloProduto.createProd(modprodModal.bindModal);
});

window.onresize = window.onload = function () {
//carrega imagens do banner
    var images = document.querySelectorAll(".banner-image");

    //Abaixo de 640, considera-se um dispositivo mobile
    if (window.innerWidth < 640) {
        for (i = 0; i < images.length; ++i) {
            images[i].src = images[i].getAttribute("data-src-mobile");
        }
    } else {
        for (i = 0; i < images.length; ++i) {
            images[i].src = images[i].getAttribute("data-src");
        }
    }
};