// 1. Crea un objeto persona con propiedades como nombre, edad, esEstudiante, etc. Luego, muestra
// las propiedades del objeto en la consola.
let persona = {
    nombre: 'Alejandro',
    Edad: 19,
    esEstudiante: true
}
console.log(persona);

// 2. Crea un objeto coche con propiedades como marca, modelo, año, etc. Luego, utiliza el
// operador . para acceder a las propiedades del objeto y muestra el valor de una de ellas en
// la consola.
let coche = {
    marca: 'Renault',
    modelo: 'Logan',
    año: 2012
}
console.log(coche.marca);

// 3. Crea un objeto casa con propiedades como direccion, numHabitaciones, numBaños, etc. Luego,
// utiliza el método Object.keys() para obtener un array con las propiedades del objeto y
// muestra el resultado en la consola.
let casa = {
    direccion: 'cra 60 #64-58',
    numHabitaciones: 3,
    numBaños: 4
}
console.log(Object.keys(casa));

// 4. Crea un objeto producto con propiedades como nombre, precio, disponible, etc. Luego, utiliza
// el método Object.values() para obtener un array con los valores de las propiedades del
// objeto y muestra el resultado en la consola.
let producto = {
    nombre: 'IPHONE',
    precio: 3,
    disponibilidad: 'si hay'
}
console.log(Object.values(producto));

// 5. Crea un objeto pais con propiedades como nombre, capital, idioma, etc. Luego, utiliza el
// método Object.entries() para obtener un array con las propiedades y sus valores del objeto
// y muestra el resultado en la consola.
let pais = {
    nombre: 'colombia',
    capital: 'bogotá',
    idioma: 'español latino'
}
console.log(Object.entries(pais));

// 6. Crea un objeto persona1 con propiedades como nombre, edad, esEstudiante, etc. Luego, crea un
// objeto persona2 con las mismas propiedades y valores diferentes. Finalmente, utiliza el
// operador == para comparar los dos objetos y muestra el resultado en la consola.
let persona1 = {
    nombre: 'Sebastian',
    edad: 23,
    esEstudiante: true
}
let persona2 = {
    nombre: 'Cristian',
    edad: 22,
    esEstudiante: false
}
console.log(persona1 == persona2);
