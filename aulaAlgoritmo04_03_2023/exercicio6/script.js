nomeAmor = "";
i = 0;

function gaga() {
    console.log("Funciona função")
    nomeAmor = inp_amor.value;
   let numero = Number(inp_numeroAmor.value);
    console.log(`${nomeAmor}, e o número foi ${numero}`);
    
    while (i <= numero) {
        console.log(`${i}, roda`);
        resultado.innerHTML += `${nomeAmor}, eu te amo! Sempre lembre disso!<br>`;
        i++;
    } 
}