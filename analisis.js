function calcularPromedio(lista) {
    const sumaLista = lista.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const salariosCol = colombia.map((person) => {
    return person.salary;
});

const salariosColSorted = salariosCol.sort((salarioA, salarioB) => {
    return salarioA - salarioB;
});

function esPar(number) {
    return number % 2 === 0;
}

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

console.log(medianaSalarios(salariosColSorted));
