export let algo = 30;

export class Persona {

    constructor( nombre, sexo, edad ) {

        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;

    }

    // AGREGANDO EL '_' es para que sea distinto ...

    //Propiedaes (los transformo en propiedades, ej: p1.Sexo = 'G')
    set Sexo( sexo ) { this._sexo = sexo.toLowerCase(); }

    get Sexo() { return this._sexo; }

    //Métodos lowerCamelCase
    saludar() { console.log(`Hola me llamo ${ this.nombre }!`); }

}

// export default function Sarasa() { console.log('Saraseo'); }

// OTRA FORMA DE EXPORTAR POR DEFAULT ( Porque es una función expresada. )
const Sarasa = function() { console.log('Saraseo'); }
export default Sarasa;
