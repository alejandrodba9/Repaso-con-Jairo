import React from "react";
import { useState } from "react";

// 1. Crea un objeto persona con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza el
// método Object.freeze() para evitar que se puedan modificar las propiedades del objeto y
// muestra el resultado en la consola.
let personas = {
    nombre: 'alejandro',
    edad: 19,
    esEstudiante: true
}
Object.freeze(personas)
console.log(personas);

// 2. Crea un objeto persona1 con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza
// el método Object.seal() para evitar que se puedan agregar o eliminar propiedades del
// objeto y muestra el resultado en la consola.
let persona1 = {
    nombre: 'alejandro',
    edad: 19,
    esEstudiante: false
}
Object.seal(persona1)
console.log(persona1);

// 3. Crea un objeto persona2 con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza
// el método Object.defineProperty() para agregar una propiedad al objeto con un valor
// predeterminado y muestra el resultado en la consola.
let persona2 = {
    nombre: 'jeancarlos',
    edad: 18,
    esEstudiante: false
}
Object.defineProperty(persona2, "nuevo", {
    value: "hola",
})
console.log(persona2.nuevo);

// 4. Crea un objeto persona3 con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza
// el método Object.create() para crear un nuevo objeto con las mismas propiedades y valores
// que el objeto original y muestra el resultado en la consola.
let persona3 = {
    nombre: 'rafa',
    edad: 18,
    esEstudiante: true
}

let nuevo = Object.create(persona3);
nuevo.nombre = "johan"; 
nuevo.edad = 20;
nuevo.esEstudiante = false;
console.log(nuevo);

// 5. Crea un objeto persona4 con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza
// el método Object.assign() para combinar las propiedades de dos objetos y mostrar el
// resultado en la consola.
let persona4 = {
    nombre: 'oscar',
    edad: 20,
    esEstudiante: false
}

let alternativo1 = {
    amigo: 'alex',
    edadamigo: 19,
    eraEstudiante: true
}
Object.assign(persona4,alternativo1)
console.log(Object.assign(persona4,alternativo1));


// 6. Crea un objeto persona5 con propiedades como nombre, edad, esEstudiante, etc. Luego, utiliza
// el método Object.keys() para obtener un array con las propiedades del objeto y el
// método Object.values() para obtener un array con los valores de las propiedades, y muestra
// ambos resultados en la consola.
let persona5 = {
    nombre: 'diego',
    edad: 21,
    esEstudiante: false
}
console.log(Object.keys(persona5),Object.values(persona5));

// 7. Crea un archivo H con una lista desordenada y un botón. Luego, utiliza JavaScript para agregar 
// un evento al botón que agregue un nuevo elemento a la lista con un texto de tu elección.
const Agrega = () => {
    const [title, setTitle] = useState("");
    const [toDos, setToDos] = useState(["python", "javascript", "text"]);
    const add = () => {
    setToDos([...toDos, title]);
    setTitle("");
};
return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"100px"}}>
        <input style={{width:"150px"}} type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={add}>Agregar</button>
        <ul>
        {toDos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
);
};

export default Agrega;
