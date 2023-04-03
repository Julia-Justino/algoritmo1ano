var contador = 0;
function clique() {
    while (contador < 101) {
        lista.innerHTML += `${contador}<br>`
        contador = contador +2;
    }
}