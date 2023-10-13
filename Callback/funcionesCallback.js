function recibir (callback) {
    const numero = parseInt(prompt("Ingrese un número"))
    if (numero > 10) {
        callback();
    }
}

function calculareimprimir () {
    let resultado = 0
    for ( i = 1; i <= 100; i++) {
        resultado += i
    }
    alert(resultado);
}

recibir(calculareimprimir);