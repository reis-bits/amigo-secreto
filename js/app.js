let amigosIncluidos = [];
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {

    let nomeAmigo = document.getElementById('nome-amigo').value;

    amigosIncluidos.push(nomeAmigo);
    listaAmigos.innerHTML = ` <p id="lista-amigos"> ${amigosIncluidos} </p>`;

    document.getElementById('nome-amigo').value = "";

    console.log(amigosIncluidos);
}

function sortear() {
    embaralhar(amigosIncluidos);

    for (let i = 0; i < amigosIncluidos.length; i++) {

        if (i == amigosIncluidos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosIncluidos[i] + '-->' + amigosIncluidos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosIncluidos[i] + '-->' + amigosIncluidos[i + 1] + '<br>';
        }
    }
}

function embaralhar(li) {
    for (let i = li.length; i > 0; i--) {
        const iAleatorio = Math.floor(Math.random() * i);

        [li[i - 1], li[iAleatorio]] = [li[iAleatorio], li[i - 1]];

    }

    console.log(li)
}

function reiniciar() {
    amigosIncluidos = [];
    listaAmigos.innerHTML = '';
    listaSorteio.innerHTML = '';

    console.log(amigosIncluidos);
} 