// 1. Crea un array numeros con varios números. Luego, utiliza el método push() para agregar un
// número al final del array y muestra el resultado en la consola.
const numeros = [40,57,36,98,15,25];
numeros.push(83)
console.log(numeros);

// 2. Crea un array colores con varios colores. Luego, utiliza el método pop() para eliminar el
// último color del array y muestra el resultado en la consola.
const colores = ['azul','verde','amarillo','rojo','blanco']
colores.pop(4)
console.log(colores);

// 3. Crea un array nombres con varios nombres. Luego, utiliza el método shift() para eliminar el
// primer nombre del array y muestra el resultado en la consola.
const nombres = ['alejandro','jeancarlos','jesus','oscar','johan']
nombres.shift(0)
console.log(nombres);

// 4. Crea un array animales con varios animales. Luego, utiliza el método unshift() para agregar
// un animal al principio del array y muestra el resultado en la consola.
const animales = ['gato','perro','loro','pez','leon']
animales.unshift('lagarto')
console.log(animales);

// 5. Crea un array edades con varias edades. Luego, utiliza el método sort() para ordenar las
// edades de menor a mayor y muestra el resultado en la consola.
const edades = [19,18,15,10,24,31]
edades.sort()
console.log(edades);

// 6. Crea un array numeros1 con varios números. Luego, utiliza el método filter() para crear un
// nuevo array con los números mayores aun valor específico:
const numeros1 = [15, 27, 35, 43, 51];
const filtrados = numeros1.filter(function(mayor) {
    return mayor > 34;
});
console.log(filtrados);
