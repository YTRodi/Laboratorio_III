import { Persona } from "./persona.js";

export class Empleado extends Persona {

    constructor( nombre, sexo, edad, sueldo ) {

        //Llamamos al constructor base con la palabra reservada 'super'
        super( nombre, sexo, edad );
        this.sueldo = sueldo;

    }

    informarSueldo() { console.log(`Mi sueldo es: ${ this.sueldo }`); }

    saludar() { console.log(`Soy un empleado y me llamo ${ this.nombre }`); }

}