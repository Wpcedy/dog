'use strict';

window.onload = function () {
    var cache = JSON.parse(window.localStorage.getItem('cache'));

    if (cache) {
        document.getElementById('nomeCachorro').value = cache.nomeCachorro;
        document.getElementById('listaCachorros').value = cache.listaCachorros;
        document.getElementById('corfonte').value = cache.corfonte;
        document.getElementById('fonte').value = cache.fonte;
        changeColor();
        changeFont();
    }
}

function changeColor() {
    document.body.style.color = document.getElementById('corfonte').value;
}

function changeFont() {
    document.body.style.fontFamily = document.getElementById('fonte').value;
}

function changeBreed() {
    document.getElementById('nomeCachorro').value = document.getElementById('listaCachorros').value;
}

function saveState() {
    let listaCachorros = document.getElementById('listaCachorros').value;
    let corfonte = document.getElementById('corfonte').value;
    let fonte = document.getElementById('fonte').value;
    let nomeCachorro = document.getElementById('nomeCachorro').value;

    let dataAtual = new Date();

    const cache = {
        listaCachorros: listaCachorros,
        corfonte: corfonte,
        fonte: fonte,
        nomeCachorro: nomeCachorro,
        dataAtual: dataAtual,
    };
    window.localStorage.setItem('cache', JSON.stringify(cache));
    alert('Cache salvo com sucesso');
}