var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

/******************** Selecionando o Nivel ********************/
var cria_mosquito_tempo = 1500;

if(nivel === "normal") {
    //1500 ml
    cria_mosquito_tempo = 1500;
}else if(nivel === "Dificil") {
    //100 ml
    cria_mosquito_tempo = 1000;
}else if (nivel === "Chuck Norris") {
    //750 ml
    cria_mosquito_tempo = 750;
}
var nivel = window.location.search;
nivel = nivel.replace("?", "");


//Função Tamanho da Tela
function ajuste_tamanho_tela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
ajuste_tamanho_tela();

var cronometro = setInterval(function() {
    tempo-= 1;
    if(tempo <= 0) {
        clearInterval(cronometro);
        clearInterval(cria_mosquito);
        window.location.href = "vitoria.html"
    }else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000);

function posicao_randomica() {

    //Remover o mosquito anterior caso exista.
    if(document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if(vidas >=3) {
            window.location.href = "fim_de_jogo.html"
        }else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
            
    }

    var posicao_x = Math.floor(Math.random() * largura) - 90;
    var posicao_y = Math.floor(Math.random() * altura) - 90;

    posicao_x = posicao_x < 0 ? 0: posicao_x;
    posicao_y = posicao_y < 0 ? 0: posicao_y;

    console.log(posicao_x, posicao_y);

    //Elemento HTML
    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = tamanho_aleatorio() + " " + lado_aleatorio();
    mosquito.style.left = posicao_x + "px";
    mosquito.style.top = posicao_y + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    //Removendo mosquito pelo click
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanho_aleatorio() {
    var classe = Math.floor(Math.random() *3);

    switch(classe) {
        case 0: 
            return "mosquito1"
        case 1: 
            return "mosquito2"
        case 2: 
            return "mosquito3"
    }
}

function lado_aleatorio() {
    var classe = Math.floor(Math.random() *2);
    switch(classe) {
        case 0: 
            return "lado_a"
        case 1: 
            return "lado_b"
    }
}