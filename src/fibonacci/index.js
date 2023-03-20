function isInFibonacci(n) {
    let a = 0;
    let b = 1;
    while (b < n) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === n;
}

let numero = Number(prompt("Digite o número e verifique se ele está na sequência Fibonacci"));

const estaNaSequencia = isInFibonacci(numero);

if(estaNaSequencia) {
    alert(`O número ${numero} está na sequência Fibonacci!`);
} else {
    alert(`O número ${numero} não está na sequência Fibonacci!`);
}