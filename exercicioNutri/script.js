function fun_caloria() {
  let caloriaPao = 50 * Number(inp_pao.value);
  console.log(caloriaPao);
  let caloriaBolacha = 80 * Number(inp_bolacha.value);
  console.log(caloriaBolacha);
  let caloriaNescau = 70 * Number(inp_nescau.value);
  console.log(caloriaNescau);
  let calorias = caloriaPao + caloriaBolacha + caloriaNescau;
  console.log(calorias);

  if (inp_pao.value < 0 || inp_bolacha.value < 0 || inp_nescau.value < 0) {
    alert("Número invélido");
    msg.innerHTML = "";
    inp_bolacha.value = "";
    inp_pao.value = "";
    inp_nescau.value = "";
  } else {
    if (calorias <= 200) {
      msg.innerHTML = "<br> Parabéns, vai sair em forma da quarentena!";
    } else if (calorias <= 400) {
      msg.innerHTML =
        "<br> Cuidado, vai ficar mais fofinho(a) após quarentena!";
    } else {
      msg.innerHTML =
        "<br> Bom, acho que muitos não vão te reconhecer após a quarentena";
    }
  }
}
