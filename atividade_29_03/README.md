# Crie um programa o qual auxilie o usuário a controlar suas economias e atingir seu objetivo. Faça o teste de mesa completo para testar todas as condições do processo



## Tela-1

Receba:

a.        Nome do Usuário: Tem que estar preenchido com no mínimo 5 caracteres, caso contrário emitir alerta com a mensagem “Informar corretamente o nome do Usuário”

b.        Objetivo: Tem que estar preenchido e tem que começar com a literal: “Comprar”, “Adquirir”, “Importar” ou “Arrendar”, caso contrário emitir alerta com a mensagem “Informar corretamente o Objetivo”.

c.        Valor do Objetivo: Tem que ser maior 100 e menor que 1000. Se o valor não for maior que 100 emitir alerta com a mensagem “Vamos lá... Você quer poupar ou não!!!”. Se o valor não for menor que 1000 emitir alerta com a mensagem “Calma.... esse valor é só quando você estiver estagiando”.

Tenha um botão “Avançar” que caso tenha um ou mais erros no preenchimento da tela, exibir todos os alertas e aguardar o usuário corrigir os dados. Caso não tenha nenhum erro deverá apagar a Tela-1 e mostrar a Tela-2.

 

## Tela-2

a)        Tenha o seguinte texto no topo: Sr(a) XXXXXXXXXXXXXXX  Você tem guardado: R$0.00 , onde XXXXXXXXXXX é o nome do usuário (Tela-1)

b)       Tenha os botões "Guardar R$5,00" e "Retirar R$10,00". Ao clicar neles, o valor guardado aumenta ou diminui conforme o texto do botão indica

c)        Quando o valor guardado estiver em 0 ou mais, exiba abaixo da frase de a) a frase, na cor azul, “Finanças OK! – continue assim para atingir o objetivo”

d)       Caso o valor guardado passe de 80, exiba abaixo da frase de c) a frase “MUITO BEM!!! – você está próximo do objetivo”

e)       Quando o valor guardado for menor que 0, exiba abaixo da frase de a) a frase, na cor vermelha, “Finanças em perigo!”

f)         Caso o valor guardado seja menor que -20, exiba abaixo da frase de e) a frase "XXXXX quase no SERASA!”, onde XXXX é o nome do usuário (Tela-1)

g)        Caso o valor guardado seja igual ou maior que o valor do objetivo (Tela-1), realizar:

            o    Emitir alerta “PARABENS, XXXXX!!! você atingiu a meta de R$ 99999,99 e agora poderá YYYYYYY”, onde XXXXX é o nome do usuário (Tela-1), 9999,99 é o valor do objetivo (Tela-1) e YYYYYY é o objetivo (Tela-1).

           o    Apagar a Tela-2 e mostrar a Tela-3.

 

 

## Tela-3

a)        Mostar a frase: “Resumo da Jornada”

b)       Abaixo da frase a) mostrar:

            o    Nome: XXXXXXXXXXX (inserido na tela-1)

            o    Objetivo: XXXXXXXXX (inserido na tela-1)

            o    Valor Guardado: 9999,99 (valor calculado na tela-2)

            o    Quantidade de Depósitos: 9999 (quantificar os depósitos feitos na tela-2)

            o    Quantidade de Retiradas: 9999 (quantificar as retiradas feitas na tela-2)

            o    Se você não tivesse feito retiradas você teria hoje R$ 999,99

c)        Tenha um botão “Reiniciar” que quando clicado apaga a Tela-3 e retorna para Tela-1 para começar tudo novamente (como se estivesse reiniciando o programa



OBS: para apagar ou aparecer com uma “tela” você pode usar o display=none/block do style

OBS2: Sim é possível ter todos os elementos de uma “tela” dentro de uma div
