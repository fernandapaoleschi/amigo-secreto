const listaDeAmigos = [];
const inputNome = document.getElementById('amigo');
const inputNumero = document.querySelector("#amigo");

inputNumero.addEventListener("keypress", function (e) {
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
})


function adicionarAmigo() {

    const nomeTexto = inputNome.value.trim();
    if (nomeTexto === '') {
        alert('Por favor, digite o nome de um amigo antes de adicionar.');
        return;
    }
    listaDeAmigos.push(nomeTexto);
    atualizarLista();
    inputNome.value = '';

}

function atualizarLista() {
    const listaNome = document.getElementById('listaAmigos');
    listaNome.innerHTML = '';

    listaDeAmigos.forEach(nomeTexto => {
        const li = document.createElement('li');
        li.textContent = nomeTexto;
        listaNome.appendChild(li);
    })
}

function sortearAmigo() {
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById('resultado').textContent = `Nome sorteado: ${nomeSorteado}`;
}