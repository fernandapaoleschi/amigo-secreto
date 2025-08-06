const listaDeAmigos = [];
const inputNome = document.getElementById('amigo');

inputNumero.addEventListener("keypress", function(e){
  const keyCode = (e.keyCode ? e.keyCode : e.wich);
  if (keyCode > 47 && keyCode < 58){
    e.preventDefault();
  }
})


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