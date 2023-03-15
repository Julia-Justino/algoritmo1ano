function fun_rendaTuvalu() {
  let rendaMensal = Number(inp_rendaMensal.value);
  console.log(rendaMensal);

  if (rendaMensal < 0) {
    alert("Número inválido");
    msg.innerHTML = ""
    inp_rendaMensal.value = "";
  } else {
    if (rendaMensal <= 250) {
      msg.innerHTML = "Classe E (até 250)";
    } else if (rendaMensal <= 900) {
      msg.innerHTML = "Classe D (+250 até 900)";
    } else if (rendaMensal <= 2500) {
      msg.innerHTML = "Classe C (+900 até 2500)";
    } else if (rendaMensal <= 9500) {
      msg.innerHTML = "(Classe B +2500 até 9500)";
    } else {
      msg.innerHTML = "(Classe A +9500)";
    }
  }
}
