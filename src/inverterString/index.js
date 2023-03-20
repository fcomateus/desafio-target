function inverterString() {
    const string = document.querySelector('#string').value;
    let stringInvertida = '';

    for(let i = string.length; i >= 0; i--) {
        stringInvertida += string.charAt(i);
    }

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = stringInvertida;
}