// 1. Crea una función que tome un array de objetos que representan productos y
// devuelva un array con los nombres de los productos en mayúsculas.
function Nombres(productos) {
    return productos.map(producto => producto.nombre.toUpperCase());
}

const productos = [
    { nombre: 'Fabuloso' },
    { nombre: 'Clorox' },
    { nombre: 'Ajax' }
];

const nombresEnMayusculas = Nombres(productos);
console.log(nombresEnMayusculas);


// 2. Crea una función que tome un array de números y devuelva un array con los
// números elevados al cuadrado.
function elevarAlCuadrado(array) {
    return array.map(function(num) {
      return num ** 2;
    });
};

let nums = [24,78,65,15,83,26];
let resultado = elevarAlCuadrado(nums);
console.log(resultado);

// 3. Crea una función que tome un array de strings y devuelva un array con la longitud
// de cada string.
function obtenerLongitudCadenas(array2){
    return array2.map(function(string){
    return string.length;
    });
};

let strings = ["Hola", "mundo", "soy", "Alejandro"];
let longitud = obtenerLongitudCadenas(strings);
console.log(longitud);
