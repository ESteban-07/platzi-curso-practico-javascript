// Helpers

function esPar(number) {
    return number % 2 === 0;
}

function calcularPromedio(lista) {
    const sumaLista = lista.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

// Mediana General

const salariosCol = colombia.map((person) => {
    return person.salary;
});

const salariosColSorted = salariosCol.sort((salarioA, salarioB) => {
    return salarioA - salarioB;
});

const medianaGeneral = medianaSalarios(salariosColSorted);

// Mediana del top 10%
// Utilizaremos el método slice en vez del splice
// para no mutar el array original y así poder hacer
// una copia superfical del array original con el top 10%

const sliceStart = parseInt((salariosColSorted.length * 90) / 100);

const sliceEnd = salariosColSorted.length;

const salariosColTop10 = salariosColSorted.slice(sliceStart, sliceEnd);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneral,
    medianaTop10Col,
});
