// 1. Utiliza un ciclo while para imprimir los números del 1 al 10 en la consola.
let i = 1;

while (i <= 10) {
console.log(i);
    i++;
};

// 2. Utiliza un ciclo for para imprimir los números pares del 2 al 20 en la consola.
for (let z = 2; z <= 20; z += 2) {
    console.log(z);
};

// 3. Utiliza un ciclo do-while para pedir al usuario que ingrese un número entre 1 y 10 y
// seguir pidiendo hasta que lo haga correctamente.
let numero;
do {
    numero = 10
} while (numero <= 1 || numero >= 10);
console.log("Numero valido");

// 5. Utiliza el método map() para crear un nuevo array con los cuadrados de los
// números de otro array y muestra el resultado en la consola.
const nums1 = [3, 9, 12, 20, 33];
const cuadrados = nums1.map(numero => numero ** 2);
console.log(cuadrados);

// 6. Utiliza el método filter() para crear un nuevo array con los números pares de otro
// array y muestra el resultado en la consola.
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = nums2.filter(numero => numero % 2 === 0);
console.log(numerosPares);


