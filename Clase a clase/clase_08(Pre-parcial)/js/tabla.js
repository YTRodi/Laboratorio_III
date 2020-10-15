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

        // th.textContent = texto; Es lo mismo...
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

            // #1
            // tr.setAttribute( 'data-id', element[ 'id' ] );
            // console.log(tr);
            // console.log(element['id']);

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

    
    // null es un falsy.
    if( tr ) { // si tr es != de null...
        
        tr.addEventListener( 'click', ( e ) => {

            e.preventDefault();

            idPersonaSeleccionada = parseInt( e.path[1].dataset.id );

            cargarDatosForm( lista, idPersonaSeleccionada );
            // tr.classList.add('personaSeleccionada');

        });


    } else {
        console.log( 'tr null' );
    }

}

const cargarDatosForm = ( lista, id ) => {

    const labelId = document.querySelector( '#labelId' );
    const inputId = document.querySelector( '#txtId' );

    
    for (const persona of lista) {
        
        if( persona.id === id ) {
            
            inputId.value = persona.id;
            document.querySelector( '#txtNombre' ).value = persona.firstName;
            document.querySelector( '#txtApellido' ).value = persona.lastName;
            document.querySelector( '#txtEmail' ).value = persona.email;
            document.forms[0].gender.value = persona.gender;

            // Lógica: Si toco algún tr de la tabla, el botón de alta desaparece, aparece el input del ID, el botón de baja y modificar con todos los datos de la persona seleccionada.
            document.querySelector( '#btnAlta' ).classList.add( 'desaparecer' );

            labelId.classList.remove( 'desaparecer' );
            inputId.classList.remove( 'desaparecer' );

            document.querySelector( '#btnBaja' ).classList.remove( 'desaparecer' );
            document.querySelector( '#btnModif' ).classList.remove( 'desaparecer' );

            break;
        }

    }

};



// ? EXPORTO POR DEFAULT!!!!
// ? EXPORTO POR DEFAULT!!!!

export default crearTabla;

// ? EXPORTO POR DEFAULT!!!!
// ? EXPORTO POR DEFAULT!!!!