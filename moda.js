console.log(calcularModa([1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]));
// ['2', 5]

function calcularModa(arr) {
    const listaCount = {};

    arr.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
}