// Variáveis declaradas, sendo estas: Um array vazio que vai incluir o nome dos amigos, a lista dos amigos, e a lista do sorteio dentro do HTML.
let amigosIncluidos = [];
let listaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');


function navegacaoTeclado() {
    const inputNome = document.getElementById('nome-amigo');

    inputNome.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            adicionar();
            event.preventDefault();
        }
    });
}

window.onload = navegacaoTeclado;

// Função que adiciona os amigos ao sorteio e atualiza o array
function adicionar() {

    // Pega o valor do nome do amigo dentro do input no HTML e converte o nome para letras maiúsculas.
    let nomeAmigo = document.getElementById('nome-amigo').value.toUpperCase();

    // Se nenhum nome for informado no input, retorna a função e exibe um alerta pedindo um nome.
    if (nomeAmigo == '') {
        alert('Informe um nome!');
        return;
    }

    // Caso o nome digitado já tenha sido incluido, retorna a função e exibe um alerta, relatando a repetição.
    if (amigosIncluidos.includes(nomeAmigo)) {
        alert('Esse nome já foi incluido');
        return;
    }

    // Coloca o nome do amigo dentro do array
    amigosIncluidos.push(nomeAmigo);
    // Imprime o array no HTML dentro da lista de amigos.
    listaAmigos.innerHTML = ` <p id="lista-amigos"> ${amigosIncluidos} </p>`;

    // Informações de desenvolvedor.
    document.getElementById('nome-amigo').value = "";
    console.log(amigosIncluidos);
}

// Função responsável por realizar o sorteio e imprimir no HTML
function sortear() {
    // Recupera a função embaralhar.
    embaralhar(amigosIncluidos);

    // Impede o sorteio de acontecer se haver menos de 4 incluidos.
    if (amigosIncluidos.length < 4) {
        alert('Você precisa de pelo menos 4 participantes');
        return;
    }

    // Condicional que lê o HTML e determina que, se a lista possui texto (Ou seja, já rolou sorteio)...
    if (listaSorteio.innerHTML.trim() != '') {
        // Que seja esvaziada e chama a função imprimir sorteio.
        listaSorteio.innerHTML = '';
        resultadoSorteio();
        // Se a lista não possuir texto...
    } else {
        // Ela simnplesmente pega os resultados do sorteio, e imprime.
        resultadoSorteio();
    }

}

function resultadoSorteio() {
    for (let i = 0; i < amigosIncluidos.length; i++) {

        if (i == amigosIncluidos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosIncluidos[i] + '-->' + amigosIncluidos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosIncluidos[i] + '-->' + amigosIncluidos[i + 1] + '<br>';
        }
    }
}

// Função que embaralha o array ( através do Algoritmo de Fisher-Yates).
function embaralhar(li) {
    // Percorre o array de trás para frente
    for (let i = li.length; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i (exclusivo)
        const iAleatorio = Math.floor(Math.random() * i);

        // Troca o elemento na posição i-1 com o elemento na posição iAleatorio
        [li[i - 1], li[iAleatorio]] = [li[iAleatorio], li[i - 1]];
    }

    // Informações do Desenvolvedor
    console.log(li);
}

// Função que além de esvaziar o Array limpa por completo o HTML.
function reiniciar() {
    // Esvazia o array.
    amigosIncluidos = [];
    //Limpa o HTML
    listaAmigos.innerHTML = '';
    listaSorteio.innerHTML = '';

    // Informações do Desenvolvedor.
    console.log(amigosIncluidos);
} 