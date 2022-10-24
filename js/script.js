let numero = "";
let n1 = 0;
var signal;
var result


let resultado = document.querySelector("#resultado")

function getNum(num) {
    numero += num;
    resultado.innerHTML = numero;
}

function c() {
    numero = "";
    n1 = 0;
    result = 0;
    resultado.innerHTML = numero;
}

function apagar(){
    numero = numero.substring(0, numero.length -1);
    resultado.innerHTML = numero;
}

function operation(signal) {
    n1 = numero;
    numero = "";
    resultado.innerHTML = numero;
    operacao = signal;
    return signal
}

function igual() {
    switch (operacao) {
        case "mais":
            result = parseFloat(n1) + parseFloat(numero);
            resultado.innerHTML = result;
            numero = result;
            break
        case "menos":
            result = parseFloat(n1) - parseFloat(numero);
            resultado.innerHTML = result;
            numero = result;
            break
        case "multiplicar":
            result = parseFloat(n1) * parseFloat(numero);
            resultado.innerHTML = result;
            numero = result;
            break
        case "dividir":
            result = parseFloat(n1) / parseFloat(numero);
            resultado.innerHTML = result;
            numero = result;
            break
    }
}