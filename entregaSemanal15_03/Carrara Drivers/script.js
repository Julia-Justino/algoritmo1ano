function fun_carrara() {
    let nomePassageiro = inp_nomeUsuario.value;
    console.log(nomePassageiro);
    let distancia = Number(inp_distancia.value);
    console.log(distancia);
    let numeroBandeira = Number(inp_bandeira.value);
    console.log(numeroBandeira);
    let horario = Number(inp_horario.value);
    console.log(horario)
    if(numeroBandeira > 3 || numeroBandeira<1){
        alert("Número incorreto");
    }else if(horario > 24 || horario < 0){
        alert("Horário incorreto");
    }
}