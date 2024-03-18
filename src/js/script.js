const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoVoltarCapitulo = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-fill");
  botaoPlayPause.classList.add("bi-pause-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-fill");
  botaoPlayPause.classList.add("bi-play-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }
  audioCapitulo.src = "src/books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa()
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audioCapitulo.src = "src/books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa()
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}



botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximoCapitulo.addEventListener("click", proximaFaixa);
botaoVoltarCapitulo.addEventListener("click", voltarFaixa);
