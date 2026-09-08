let btnAjuda = document.querySelectory(".botao-help");
let btnFechar = document .querySelectory(".botao-close");
let modal = document .querySelectory(".modal-fundo");

btnAjuda.addEventlistener("clike", abreModal);
btnFechar.addEventlistener("clike", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}