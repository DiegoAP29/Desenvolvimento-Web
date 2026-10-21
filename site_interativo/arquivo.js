const titulo = document.getElementById("titulo");
const mudar = document.getElementById("mudar");
const restaurar = document.getElementById("restaurar");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const ocupacao = document.getElementById("ocupação");
const botao = document.getElementById("saudar");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador")
const add = document.getElementById("+1");
const zerar = document.getElementById("zerar")

mudar.addEventListener("click", function() {
    titulo.textContent = "Você clicou no botão!(=";
});


restaurar.addEventListener("click", function() {
    titulo.textContent = "Clique no botão abaixo!";
});

botao.addEventListener("click", function() {
    if (!nome.value.trim() || !idade.value.trim() || !ocupacao.value.trim()) {
        resultado.textContent = "Preencha todos os campos!";
        return;
    }

    resultado.textContent = `Olá ${nome.value}, prazer em te conhecer!
    Você tem ${idade.value} anos e é um ${ocupacao.value}`;
});

let cliques=0
add.addEventListener("click", function() {
    cliques = cliques+1
    contador.textContent = `Cliques: [${cliques}]`;
});

zerar.addEventListener("click", function() {
    cliques = 0
    contador.textContent = `Cliques: [${cliques}]`;
});