// 1. Crea una variable esMayorDeEdad y asígnale un valor booleano que indique si eres mayor de
// edad o no. Luego, utiliza un condicional if para imprimir un mensaje en la consola si eres
// mayor de edad y otro mensaje si no lo eres.
let esMayorDeEdad = false

if(esMayorDeEdad) {
    console.log('El usuario es mayor de edad');
}else{
    console.log('No es mayor de edad');
}

// 2. Crea una variable esEstudiante y asígnale un valor booleano que indique si eres estudiante o
// no. Luego, utiliza un condicional if-else para imprimir un mensaje en la consola si eres
// estudiante y otro mensaje si no lo eres.
let esEstudiante = true
if(esEstudiante) {
    console.log('El usuario es Estudiante');
}else{
    console.log('El usuario es NO Estudiante');
}

// 3. Crea una variable esCasado y asígnale un valor booleano que indique si estás casado o no.
// Luego, utiliza un condicional switch para imprimir un mensaje en la consola dependiendo
// del valor de la variable.
let esCasado = false
switch (esCasado) {
    case false: 
        console.log('El usuario no es casado');
        break;
    case true: 
        console.log('El usuario es casado');
        break;

    default:
        console.log('No se digitó ninguna información');
        break;
}

// 4. Crea una variable esDivertido y asígnale un valor booleano. Luego, utiliza un operador
// ternario para imprimir un mensaje en la consola si la variable es verdadera y otro mensaje si
// no lo es.
let esDivertido = false
console.log(esDivertido ? 'Si lo es' : 'No lo es');

// 5. Crea una variable esInteligente y asígnale un valor booleano. Luego, utiliza el
// operador ´!´ para imprimir el valor opuesto de la variable en la consola.
let esInteligente = true
console.log(!esInteligente);
// 6. Crea una variable esActivo y asígnale un valor booleano. Luego, utiliza el operador && para
// imprimir un mensaje en la consola si la variable es verdadera y otra cosa si no lo es
let esActivo = true
if (esActivo && esActivo) {
    console.log("Es verdadero");
} else {
    console.log("Es falsa");
}
