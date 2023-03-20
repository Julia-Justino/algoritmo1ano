function fun_historia() {
    console.log("funciona");
    let data = Number(inp_ano.value);

    if (data <0) {
      alert("Número inválido");
    }else if(data <= 1964){
        msg.innerHTML = `No ano ${data} o email nem havia sido criado ainda ...`;
    }else if(data == 1965){
        msg.innerHTML = `No ano ${data} o email estava sendo criado ...`;
    }else if(data <= 1969){
        msg.innerHTML = `No ano ${data}  o email já havia sido criado ... `;
    }else if(data >=1970){
        msg.innerHTML = `No ano ${data}  o email já havia sido aprimorado -
        Poderia ser enviado para outro computador ... `;
    }
   
}