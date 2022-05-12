function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    700,
    200,
    400000000,
    1000,
    600,
    12,
    5
];

console.group("Lista Desordenada");
console.log(lista1);
console.groupEnd();

const listaOrdenada = lista1.sort(function compareFunction(a, b) {
    // 1. < 0 ... 'a' comes first
    // 2. = 0 ... nothing will be changed
    // 3. > 0 ... b comes first
    return a - b;
});

console.group("Lista Ordenada");
console.log(listaOrdenada);
console.groupEnd();

const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

let mediana;

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
    const elemento2 = listaOrdenada[mitadListaOrdenada];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

    console.group("Mediana de Array Par");
    console.log(mediana);
    console.groupEnd();
} else {
    mediana = listaOrdenada[mitadListaOrdenada];

    console.group("Mediana de Array Impar");
    console.log(mediana);
    console.groupEnd();
}