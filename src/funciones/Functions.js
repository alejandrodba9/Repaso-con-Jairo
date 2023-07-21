// 1. Crea una función saludar que reciba como parámetro un nombre y retorne un mensaje de
// saludo con el nombre. Luego, llama a la función con tu nombre como argumento y muestra
// el resultado en la consola.
function saludar(nombre) {
    return(`Hola ${nombre}, saludos`)
}
console.log(saludar("Alejandro"));

// 2. Crea una función sumar que reciba dos números como parámetros y retorne la suma de
// ambos. Luego, llama a la función con dos números de tu elección como argumentos y
// muestra el resultado en la consola.
function sumar(numero1,numero2) {
    return (numero1+numero2)
}
console.log(sumar(1,2));

// 3. Crea una función esPar que reciba un número como parámetro y retorne true si es par
// y false si es impar. Luego, llama a la función con un número de tu elección como
// argumento y muestra el resultado en la consola.
function esPar(numeroX) {
    if(numeroX % 2 === 0){
        console.log('Es par');
    }else{
        console.log('No es par');
    }
}
esPar(2);
esPar(5);

// 4. Crea una función multiplicar que reciba un número como parámetro y retorne una función
// que multiplique otro número por el número original. Luego, llama a la función retornada
// con dos números de tu elección como argumentos y muestra el resultado en la consola.
function multiplicar(numeroY) {
    return function (numeroZ) {
        return numeroY * numeroZ;
    }
}
let multiplicar2 = multiplicar(6)
let n1 = 4
let n2 = 2
let resultado1 = multiplicar2(n1)
let resultado2 = multiplicar2(n2)
console.log(`El resultado de multiplicar ${n1} por 5 es: ${resultado1}`);
console.log(`El resultado de multiplicar ${n2} por 5 es: ${resultado2}`);

// 5. Crea una función convertirFahrenheitACelsius que reciba una temperatura en grados
// Fahrenheit como parámetro y retorne la temperatura en grados Celsius. Luego, llama a la
// función con una temperatura de tu elección como argumento y muestra el resultado en la
// consola.
function convertirFahrenheitACelsius(Fahrenheit) {
    let gradosCelsius = ((Fahrenheit - 32) * 5) / 9;
    console.log(gradosCelsius.toFixed(2));
}
convertirFahrenheitACelsius(55);

// 6. Crea una función calcularFactorial que reciba un número como parámetro y retorne el
// factorial de ese número. Luego, llama a la función con un número de tu elección como
// argumento y muestra el resultado en la consola.
function calcularFactorial(num1) {
    let factorial = 1;
    for (let i = 1; i<= num1; i++) {
        factorial = factorial * i;
    }
    return factorial
}
console.log(calcularFactorial(4));
