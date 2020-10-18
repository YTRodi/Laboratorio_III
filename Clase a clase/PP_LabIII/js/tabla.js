import { labelId , txtId, txtNombre, txtApellido, txtEmail, rdoGender } from "./form.js";
import { botonAlta, botonBaja, botonModificar } from "./form.js";


export const divTabla = document.querySelector( '#divTabla' );


const crearTabla = ( lista ) => {

    const tabla = document.createElement( 'table' );

    tabla.appendChild( crearCabecera( lista[0] ) );
    tabla.appendChild( crearCuerpo( lista ) );

    return tabla;
};

const crearCabecera = ( item ) => {

    const tHead = document.createElement( 'thead' );
    const tr = document.createElement( 'tr' );

    for (const key in item) {
        
        const th = document.createElement( 'th' );
        const texto = document.createTextNode( key );

        th.appendChild( texto );
        tHead.appendChild(th);
    }


    return tHead;

};

const crearCuerpo = ( lista ) => {

    const tBody = document.createElement( 'tbody' );

    lista.forEach( element => {

        const tr = document.createElement( 'tr' );

        for (const key in element) {
            
            // table data
            const td = document.createElement( 'td' );

            // Como es un array asociativo, nos da el valor del atributo key.
            const texto = document.createTextNode( element[ key ] );
            td.appendChild( texto );
            tr.appendChild( td );

        }

        // console.log(element.id);

        if( element.hasOwnProperty( 'id' ) ) { // Si el elemento tiene la propiedad 'id'

            // #2
            tr.dataset.id = element[ 'id' ];

        } else {

            console.log( 'El elemento no tiene la propiedad "id".' );
            
        }

        //Le agrego el manejador del evento.
        agregarManejadorTR( tr, lista );

        tBody.appendChild( tr );

    });

    return tBody;

};

const agregarManejadorTR = ( tr, lista ) => {
    
    let idPersonaSeleccionada;

    if( tr ) { 
        
        tr.addEventListener( 'click', ( e ) => {

            e.preventDefault();

            idPersonaSeleccionada = parseInt( e.path[1].dataset.id );

            cargarDatosForm( lista, idPersonaSeleccionada );

        });


    } else {
        console.log( 'tr null' );
    }

}

const cargarDatosForm = ( lista, id ) => {
    
    for (const persona of lista) {
        
        if( persona.id === id ) {
            
            txtId.value = persona.id;
            txtNombre.value = persona.firstName;
            txtApellido.value = persona.lastName;
            txtEmail.value = persona.email;
            rdoGender.value = persona.gender;

            // Lógica: Si toco algún tr de la tabla, el botón de alta desaparece, aparece el input del ID ( deshabilitado ), el botón de baja y modificar con todos los datos de la persona seleccionada.
            labelId.classList.remove( 'desaparecer' );
            txtId.classList.remove( 'desaparecer' );

            botonAlta.classList.add( 'desaparecer' );

            botonBaja.classList.remove( 'desaparecer' );
            botonModificar.classList.remove( 'desaparecer' );

            console.log( persona );

            break;
        }

    }

};


export default crearTabla;