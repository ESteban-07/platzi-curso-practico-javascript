function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

calcularMediana([700, 200, 400000000, 1000, 600, 12, 5]);
// 600


function calcularMediana(arr) {
    const listaOrdenada = arr.sort(function compareFunction(a, b) {
        return a - b;
    });

    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
        const elemento2 = listaOrdenada[mitadListaOrdenada];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadListaOrdenada];
    }

    return mediana;
}