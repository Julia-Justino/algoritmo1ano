function fun_chocolate() {
    console.log("funcionando");
    const quantidade = Number(inp_quantidade.value);
    let valor = quantidade * 3.00;
    if (quantidade >= 12) {
        valor = quantidade * 2.50;
        msg.innerHTML =`o valor da sua compra foi de $: ${valor}`
    }else{
        msg.innerHTML =`o valor da sua compra foi de $: ${valor}` 
    }
}