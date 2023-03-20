const ESTADOS = [
    {
        estado: "SP",
        faturamento: 67836.43
    },
    {
        estado: "RJ",
        faturamento: 36678.66
    },
    {
        estado: "MG",
        faturamento: 29229.88
    },
    {
        estado: "ES",
        faturamento: 27165.48
    },
    {
        estado: "Outros",
        faturamento: 19849.53
    }
]

let faturamentoTotal = 0;

ESTADOS.map((estado) => {
    let { faturamento } = estado;
    faturamentoTotal += faturamento;
})

console.log(`O faturamento mensal total da distribuidora foi de R$${faturamentoTotal}`);

ESTADOS.map((estado) => {
    let { faturamento, estado: nomeEstado } = estado;
    const PERCENTUAL_PARTICIPACAO_POR_ESTADO = ((faturamento/faturamentoTotal) * 100).toFixed(2);
    console.log(`A participação do estado de ${nomeEstado} foi de ${PERCENTUAL_PARTICIPACAO_POR_ESTADO}%`);
})