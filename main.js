function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else{
    console.log ('Elemento nao encontrado');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
  const teclas = listaDeTeclas[i];
  const instrumento = teclas.classList[1];
  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[i].onclick = function () {
    tocaSom(idAudio);
  };
}

teclas.onKeyDown = function (event) {
  if (event.code === 'Enter' || event.code === 'Space') {
    teclas.classList.add('ativa');
  }
  teclas.onKeyup = function (event) {
    teclas.classList.remove ('ativa');
  }
}