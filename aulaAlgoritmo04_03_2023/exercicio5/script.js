i = 0;
function numeros() {
    console.log("está chamando");
    resposta.innerHTML += "Escreva os números cabalisticos : <br>"
   while (i < 31) {
        if (i == 3 || i == 4 || i == 7 || i == 10 || i == 12) {
            resposta.innerHTML += `Número cabalistico<br>`;
        }
        else {
            resposta.innerHTML += `${i}<br>`
        }
        i++;
    }
}