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
        agregarManejadorTR( tr );

        tBody.appendChild( tr );

    });

    return tBody;

};

const agregarManejadorTR = ( tr ) => {

    // Objetivo: mostrar el id.
    
    // null es un falsy.
    if( tr ) { // si tr es != de null...

        // 3er parámetro en addEventListener es...
        tr.addEventListener( 'click', ( e ) => {

            // e.target va a ser el tr
            // #1
            // alert(e.target.getAttribute( 'data-id' ));

            // console.log(e.target);

            // #2
            console.log(e);
            alert( e.path[1].dataset.id );

        });

    } else {
        console.log( 'tr null' );
    }

}

// ? EXPORTO POR DEFAULT!!!!
// ? EXPORTO POR DEFAULT!!!!

export default crearTabla;

// ? EXPORTO POR DEFAULT!!!!
// ? EXPORTO POR DEFAULT!!!!