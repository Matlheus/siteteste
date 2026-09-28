let botaoMorra = document.querySelector(".button");
let imagens = document.querySelectorAll(".slider img");
let indice = 0;

console.log(botaoMorra);
console.log(imagens);

function trocarfoto() {
    console.log("clicou trocando foto")
    imagens[indice].classList.remove("ativo")
    indice = (indice + 1) % imagens.length
    imagens[indice].classList.add("ativo")
}

botaoMorra.onclick = trocarfoto

