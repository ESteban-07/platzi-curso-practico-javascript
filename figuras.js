// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(lado1, lado2, base) {
    // Utilizaremos la fórmula de Herón para calcular el área del triángulo conociendo únicamente todos sus lados
    const a = lado1;
    const b = lado2;
    const c = base;

    // La variable 's' significa SemiPerímetro
    const s = perimetroTriangulo(a, b, c) / 2;

    const areaTriangulo = (Math.sqrt(s*(s-(a))*(s-(b))*(s-(c)))).toFixed(4);

    return areaTriangulo;
}

console.groupEnd();


// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuaremos con el HTML

// FUNCIONES PARA LOS CÁLCULOS DEL CUADRADO
function calcularPerimetroCuadrado() {
    const lado = parseInt(document.getElementById("inputCuadrado").value);
    
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const lado = parseInt(document.getElementById("inputCuadrado").value);
    
    const area = areaCuadrado(lado);
    alert(area);
}

// FUNCIONES PARA LOS CÁLCULOS DEL TRIÁNGULO
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const base = parseInt(document.getElementById("base").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = parseInt(document.getElementById("lado1").value);
    const lado2 = parseInt(document.getElementById("lado2").value);
    const base = parseInt(document.getElementById("base").value);

    const area = areaTriangulo(lado1, lado2, base);
    alert(area);
} 

// FUNCIONES PARA LOS CÁLCULOS DEL CÍRCULO
function calcularPerimetroCirculo() {
    const radio = parseInt(document.getElementById("radio").value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = parseInt(document.getElementById("radio").value);

    const area = areaCirculo(radio);
    alert(area);
}