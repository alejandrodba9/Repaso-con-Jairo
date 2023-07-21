import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

// 1. Crea un componente Color que tenga un estado color inicializado en blanco y renderice un
// botón que al hacer clic cambie el color de fondo del componente a un color aleatorio.
// Luego, utiliza el componente en otro componente para mostrar el botón en la página.
export const Color = () => {
    const [color, setColor] = useState('#ffffff');

const cambiarColor = () => {
    const coloresAleatorios = ['#8de315', '#0e12f3', '#5733ff', '#33aaff', '#ff33aa', '#eeff04', '#aa33ff' ];
    const colorAleatorio = coloresAleatorios[Math.floor(Math.random() * coloresAleatorios.length)];
    setColor(colorAleatorio);
};

return (
    <Principal colores={color}>
        <button onClick={cambiarColor}>Cambiar Color</button>
    </Principal>
)};

export const Principal = styled.div`
    height: 170px;
    width: 200px;
    background-color: ${({colores}) => colores || "#fff" };
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        border: none;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: #000;
            color: #fff;
        }
    }
`


// 2. Crea un componente Reloj que tenga un estado hora inicializado en la hora actual y renderice
// la hora en la página. Luego, utiliza el componente en otro componente para mostrar el reloj
// en la página y actualiza la hora cada segundo.
export const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
    const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
}, 1000);

    return () => clearInterval(intervalo);
}, []);

return <div>
    <Fondo>
    {hora}
    </Fondo>
</div>;
};
export const Fondo = styled.div`
    height: 280px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 300px;
`


