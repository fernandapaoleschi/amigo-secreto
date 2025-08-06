const listaDeAmigos = [];
const inputNome = document.getElementById('amigo');

function adicionarAmigo() {
  const nomeTexto = inputNome.value.trim();
  listaDeAmigos.push(nomeTexto);
  atualizarLista();
  inputNome.value = '';
}

function atualizarLista(){
  const listaNome = document.getElementById('listaAmigos');
  listaNome.innerHTML = '';

  listaDeAmigos.forEach(nomeTexto => {
    const li = document.createElement('li');
    li.textContent = nomeTexto;
    listaNome.appendChild(li);
  })

}