// mês com 31 dias
const FATURAMENTO_TOTAL = [
    14206, 8746, 13818, 16642, 11622, 12681, 12061, 18199, 16729, 
    17381, 14593, 15622, 14667, 19690, 17078, 18747, 15304, 11189, 
    18684, 16396, 11721, 14106, 11039, 12099, 11081, 13529, 11062, 
    17014, 19181, 17931, 11310
]

let faturamentoMensal = 0;
let menorFaturamento = FATURAMENTO_TOTAL[0];
let maiorFaturamento = FATURAMENTO_TOTAL[0];

FATURAMENTO_TOTAL.map(faturamentoDiario => {
    faturamentoMensal += faturamentoDiario;

    if(faturamentoDiario > maiorFaturamento) {
        maiorFaturamento = faturamentoDiario;
    }

    if(faturamentoDiario < menorFaturamento) {
        menorFaturamento = faturamentoDiario;
    }

})

const mediaFaturamento = faturamentoMensal/FATURAMENTO_TOTAL.length;
let diasQueSuperaramMediaFaturamento = 0;
FATURAMENTO_TOTAL.map(faturamentoDiario => {
    if(faturamentoDiario > mediaFaturamento) {
        diasQueSuperaramMediaFaturamento++;
    }
})

console.log(`
Menor valor faturado em um dia: ${menorFaturamento}
Maior valor faturado em um dia: ${maiorFaturamento}
Quantidade de dias que superaram a média do faturamento mensal ${diasQueSuperaramMediaFaturamento}
`);