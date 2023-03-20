function fun_carrara() {
  let nomePassageiro = inp_nomeUsuario.value;
  console.log(nomePassageiro);
  let distancia = Number(inp_distancia.value);
  console.log(distancia);
  let numeroBandeira = Number(inp_bandeira.value);
  console.log(numeroBandeira);
  let horario = Number(inp_horario.value);
  console.log(horario);
  let valor = distancia * 1.25;
  let valorTaxa = valor;
  if (
    numeroBandeira > 3 ||
    numeroBandeira < 1 ||
    horario > 23 ||
    horario < 0 ||
    distancia < 0
  ) {
    alert("Número incorreto");
    msg.innerHTML = "";
    inp_bandeira.value = "";
    inp_distancia.value = "";
    inp_horario.value = "";
    inp_nomeUsuario.value = "";
  } else if (numeroBandeira == 1) {
    if (horario <= 6) {
      valorTaxa = valor * 0.05;
      valor = valor + valorTaxa;
      console.log("fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
      msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
    } else if ( horario <= 12) {
      valorTaxa = valor * 0.1;
      valor = valor + valorTaxa;
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}, ${valorTaxa}`;
    } else {
      valorTaxa = valor * 0.15;
      valor = valor + valorTaxa;
      console.log("funciona klkkkkkkkkkkllllllllllllllllllllllll");
      msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
    }
  }
  if (numeroBandeira == 2) {
      if (horario <= 6) {
          valorTaxa = valor * 0.1;
          valor = valor + valorTaxa;
          console.log("Etapa 2   fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
          msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
        } else if ( horario <= 12) {
          valorTaxa = valor * 0.2;
          valor = valor + valorTaxa;
          console.log("Etapa 2  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
          msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}, ${valorTaxa}`;
        } else {
          valorTaxa = valor * 0.3;
          valor = valor + valorTaxa;
          console.log("Etapa 2  funciona klkkkkkkkkkkllllllllllllllllllllllll");
          msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
        }
    
  } else {
    if (numeroBandeira == 3) {
        if (horario <= 6) {
            valorTaxa = valor * 0.15;
            valor = valor + valorTaxa;
            console.log("Etapa 3   fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
            msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
          } else if ( horario <= 12) {
            valorTaxa = valor * 0.3;
            valor = valor + valorTaxa;
            console.log("Etapa 3  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}, ${valorTaxa}`;
          } else {
            valorTaxa = valor * 0.45;
            valor = valor + valorTaxa;
            console.log("Etapa 3  funciona klkkkkkkkkkkllllllllllllllllllllllll");
            msg.innerHTML = `Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de ${valor}`;
          }
    }
  }
}

