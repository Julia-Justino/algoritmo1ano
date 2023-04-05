
    var nome = "";
    var objetivo = "";
    var valorE = 0;
    
function analisar() {
     nome = inp_nome.value;
     objetivo = inp_objetivo.value;
     valorE = Number(inp_valor.value);

    if (nome.length < 5) {
        alert(`Informar corretamente o nome do Usuário`);
        console.log(`${nome.length}`)
    }
    if (objetivo.startsWith('Comprar') || objetivo.startsWith('Comprar') || objetivo.startsWith('Adquirir') || objetivo.startsWith('Importar') || objetivo.startsWith('Arrendar')) {
        console.log(`${objetivo}`)
    } else {
        alert(`Informar corretamente o Objetivo`);
    }
    if (valorE < 101) {
        alert("Vamos lá... Você quer poupar ou não!!!");
    } else if (valorE > 1000) {
        alert("Calma.... esse valor é só quando você estiver estagiando");
    }
    botaoAvancar.innerHTML = "";
    apagar1();
    teste.innerHTML += `<br>Sr(a): ${nome}. Você tem guardado: <b>R$0.00</b>`;
    avancarNeste.innerHTML += '<br><button onclick="soma5()">Guardar R$5,00</button>';
    avancarNeste.innerHTML += '<button onclick="menos10()">Retirar R$10,00</button>';
    avancarNeste.innerHTML += '<button onclick="limpar()">Limpar</button>';
}
function apagar1() {
    form.style="display:none";
}
var valor = 0;
function analiseValor() {
    
    console.log();
    if (valor > 0) {
        avancar.innerHTML = ` <p style="color: blue;">Finanças OK! – continue assim para atingir o objetivo</p>`;
    } else if (valor < 0) {
        avancar.innerHTML = ` <p style="color: red;">Finanças em perigo!</p>`;
        
    }
    if (valor > 79) {
        avancar.innerHTML = ` MUITO BEM!!! – você está próximo do objetivo`;
    }
    if (valor < -19) {
        avancar.innerHTML = `${nome} quase no SERASA!`;
    }
    if(valor == valorE ){
        /*PARABENS, XXXXX!!! você atingiu a meta de R$ 99999,99 e agora poderá YYYYYYY”, onde XXXXX é o nome do usuário (Tela-1), 9999,99 é o valor do objetivo (Tela-1) e YYYYYY é o objetivo (Tela-1).*/ 
        alert(`PARABENS, ${nome}!!! você atingiu a meta de R$ ${valorE} e agora poderá ${objetivo}`)
        
        form.innerHTML ="";
        resumo();
    }
}
function limpar() {
    avancar.innerHTML = ``;
    teste.innerHTML = "";
}
var qtdDepositos = 0;
function soma5() {
    console.log("A função de 5 está chamando")
    valor = valor + 5;
    teste.innerHTML += `<br> Você tem guardado: R$${valor.toFixed(2)}`;
    qtdDepositos = qtdDepositos +1;
    analiseValor();
}
var qtdRetiradas = 0;

function menos10() {
    console.log("A função de -10 está chamando")
    valor = valor - 10;
    teste.innerHTML += `<br> Você tem guardado: R$${valor.toFixed(2)}`;
    qtdRetiradas = qtdRetiradas +1;
    analiseValor();
}



function resumo() {
    limpar();
    avancarNeste.innerHTML = "";
    avancar.innerHTML += `Resumo da Jornada<br>`;
    avancar.innerHTML +=`Nome: ${nome} <br>
    Objetivo: ${objetivo}<br>
    Valor Guardado: ${valor}<br>
    Quantidade de Depósitos: ${qtdDepositos}<br>
    Quantidade de Retiradas: ${qtdRetiradas}<br>
    Se você não tivesse feito retiradas você teria hoje R$: ${(qtdRetiradas*10) + valor}
    `
    avancar.innerHTML += `<button onclick = "tela1()">Avançar</button>`;
}

function tela1() {
    avancar.innerHTML ="";
    teste.innerHTML+=` <h1>Calcular economias</h1>
    <span>Digite seu nome:</span>
    <input type="text" id="inp_nome" placeholder="Digite seu nome:"><br>
    <span>Digite seu objetivo:</span>
    <input type="text" id="inp_objetivo" placeholder="Digite seu objetivo"><br>
    <span>Digite o valor</span>
    <input type="text" id="inp_valor" placeholder="Digite o valor do Objetivo"><br>
    <div id="botaoAvancar">
        <button onclick="analisar()">Avançar</button>
    </div>`;
}
