import React, {useState} from 'react';
import styled from 'styled-components';

// 1. Crea un componente Saludo que reciba una prop nombre y renderice un mensaje de
// saludo con el nombre. Luego, utiliza el componente en otro componente para
// mostrar el saludo en la página.
export const Saludo1 = ({ nombre }) => {
    return (
        <Principal1>
            Buenos Dias {nombre}
        </Principal1>
    );
};
export const Principal1 = styled.div`
    margin-bottom: -80px;
    font-size: 100px;
` 

// 2. Crea un componente Contador que tenga un estado contador inicializado en 0 y
// renderice un botón que incremente el contador al hacer clic. Luego, utiliza el
// componente en otro componente para mostrar el contador en la página.
export const Contador = () => {
    const [contador, setContador] = useState(0)
    const aumentar = () => {
        setContador(contador+1)
    }

    return ( 
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Principal2>
                <h3>Contador: {contador}</h3>
                <Boton onClick={aumentar}>Aumentar</Boton>
            </Principal2>
        </div>
    );
};
export const Principal2 = styled.div`
    height: 100px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: gray;
` 
export const Boton = styled.button`
    height: 30px;
    width: 100px;
    margin-top: -10px;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    &:hover{
        background-color: red;
    }
`

// 3. Crea un componente Lista que reciba una prop items que sea un array y renderice
// una lista de elementos <li> con los elementos del array. Luego, utiliza el
// componente en otro componente para mostrar una lista de elementos en la
// página.
export const Lista = ({ items }) => {
    return (
        <Fondo>
            {items.map((items, index) => (
                <li key={index}>{items}</li>
            ))}
        </Fondo>
    );
};
export const Fondo = styled.div`
    height: 100px;
    width: 100px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: gray;
`