var i = 0;
var guardado = "";
var poupanca = "";
var meses = "";
var juros = "";

function validar() {
    guardado = Number(inp_valorGuardado.value);
    poupanca = Number(inp_poupado.value);
    meses = Number(inp_meses.value);
    juros = Number(inp_juros.value);

    if (poupanca < 0) {
        alert("Digite o valor poupado corretamente, não é permitido números negativos neste campo");
        location.reload();
    } else if (inp_poupado.value == "") {
        alert("Preencha o campo valor poupado");
        location.reload();
    } else if (inp_valorGuardado.value == "") {
        alert("Preencha o campo valor guardado");
        location.reload();
    }
    else if (meses < 10) {
        alert("Digite a quantidade de meses corretamente, não é permitido números MENORES do que 10 neste campo");
        location.reload();
    } else if (inp_meses.value == "") {
        alert("Preencha o campo meses");
        location.reload();
    } else if (inp_juros.value == "") {
        alert("Preencha o campo juros");
        location.reload();
    } else if (juros < 0.5 || juros > 2.5) {
        alert("Preencha o campo percentual de juros mensal, percentual de juros tem que estar entre meio e dois.");
        location.reload();
    }
    calculo();
}

var valorInicial = "";

var valorFinal1 = "";
var valorFinal2 = "";
var saldoFinal = "";
function calculo() {
    while (i <= meses) {
        if (i < 1) {
           
            msg.innerHTML += `Mês ${i} - saldo inicial  = R$ ${guardado} saldo final = R$${valorFinal1 = guardado + (guardado * (juros/100))}<br> `
            i++;
        } else {
            msg.innerHTML += `Mês ${i} - saldo inicial = R$:${ valorInicial = (poupanca * i) + guardado}  saldo final = R$${valorFinal2 = valorInicial + (valorInicial * (juros/100))}
            <br>`;
            console.log(valorInicial);
            i++ 
        }
        
        // Mês X - saldo inicial = R$999,99 saldo final = R$888,88
    }
    /* let jurosAplicados = (valorInicial * juros)/100;
    let jurosMes1 = (guardado * juros)/100;
    let descontoJuros = valorInicial*jurosAplicados;
    let valorFinal = valorInicial - descontoJuros; */

    /*“Você começou com R$ 9999,99 Depositou R$ 8888,88 #seliga isto é a somatória dos valores poupados E agora você tem: R$ 7777,77 #seliga isto o último saldo final Neste período sua conta rendeu R$ 6666,66 #seliga isto é a somatória dos juros Sua rentabilidade foi de 5,55% */
    msg.innerHTML += `<br> Você começou com R$:${inp_valorGuardado.value} Depositou R$:${(poupanca *meses)} E agora você tem: R$:${valorFinal2} Neste período sua conta rendeu ${(i*juros/100).toFixed(2)} Sua rentabilidade foi de ${juros*meses}% `

}

function limpar() {
    location.reload();
}

