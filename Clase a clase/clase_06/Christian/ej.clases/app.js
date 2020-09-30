// Importamos la clase 'Persona' del archivo persona.js
// Importamos la clase 'Empleado' del archivo persona.js

// #NOTA: PONER SIEMPRE EL './' Y LA EXTENSIÓN '.js'
// Si no ponemos el './' va a ir a la raíz del server y no lo va a encontrar
// POR DEFAULT: Sólo se pueden exportar por default una sola vez por archivo.
import { Persona as Person, algo } from './persona.js';
import { Empleado } from "./empleado.js";
import Default from "./Default.js";
import Sarasa from './persona.js';

const p1 = new Person( 'Maggie', 'f', 6 );

console.log( p1 );
console.log( algo );


const e1 = new Empleado( 'Juana', 'F', 24, 60000 );

console.log( e1 );


const d1 = new Default();
d1.saludar();
console.log(d1);


Sarasa();