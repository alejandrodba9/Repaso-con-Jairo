import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Agrega from './objetosavanzados/ObjetosAvanzados'
import {Contador, Lista, Saludo1} from './React/CreacionComponentes/creacioncomponentes'
import { Color, Reloj } from './React/EstadosReact/estados';


const array = ["pollo","carne","higado","pescado"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='principal'>
      <Saludo1 nombre={'Alejandro'}/>
      <Agrega/>
      <Contador/>
      <Lista items={array}/>
      <Color/>
      <Reloj/>
    </div>
  </React.StrictMode>
);
