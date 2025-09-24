let amigos = [];

function adicionarAmigo() {
    const campoAmigo = document.getElementById("amigo");
    const nomeAmigo = campoAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        campoAmigo.value = '';
        return;
    }
    
    amigos.push(nomeAmigo);
    campoAmigo.value = '';
    atualizarListaAmigos();
    limparResultado();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}

function limparResultado() {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const campoAmigo = document.getElementById("amigo");
    
    campoAmigo.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });
    
    campoAmigo.focus();
});