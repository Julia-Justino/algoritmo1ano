var i = 0;
var frase = "";

function papaio() {
    frase = inp_frase.value;
    let numero = Number(inp_numero.value);
    
    while (i <= numero) {
        resultado.innerHTML += `${i}`;
        i++;
    }
}