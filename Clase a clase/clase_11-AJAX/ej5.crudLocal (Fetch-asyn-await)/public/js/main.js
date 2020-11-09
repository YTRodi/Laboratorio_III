const $ol = document.querySelector( '.ol' );
const $btnTraer = document.getElementById( 'btnTraer' );
const $spinner = document.getElementById( 'spinner' );

btnTraer.addEventListener( 'click', e => {

    // LEVANTAR EL SERVIDOR CON EL COMANDO: json-server -w db.json

    //! CRUD!
    traerPersonas();

    // altaPersona();
    // modificarPersona( 3 );
    // bajaPersona( 16 );
});

// DELETE
const bajaPersona = async ( id ) => {

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        const options = {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        }

        const res = await fetch( `http://localhost:3000/personas/${ id }`, options );
        // console.log( res );

        if( !res.ok ) {
            
            let msgError = res.statusText || 'Se produjo un error';
            throw { status: res.status, statusText: msgError };
        }

        const data = await res.json();
        console.log( data );

        console.log( `Estado de la petición: ${ res.statusText } - Código: ${ res.status }` );
        
    } catch ( err ) {
        console.log(err);
        console.error( `Estado de la petición: ${ err.status }` );
        console.error( `Texto del estado: ${ err.statusText }` );

    } finally {

        $spinner.textContent = '';

    }

}

// PUT
const modificarPersona = async ( id ) => {

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {
        let nuevaPersona = {
            "nombre": "Nezuko",
            "apellido": "Kamado",
            "email": "kny@gmail.es"
        };

        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify( nuevaPersona )
        }

        const res = await fetch( `http://localhost:3000/personas/${ id }`, options );
        // console.log( res );

        if( !res.ok ) {
            
            let msgError = res.statusText || 'Se produjo un error';
            throw { status: res.status, statusText: msgError };
        }

        const data = await res.json();
        console.log( data );

        console.log( `Estado de la petición: ${ res.statusText } - Código: ${ res.status }` );
        
    } catch ( err ) {
        console.log(err);
        console.error( `Estado de la petición: ${ err.status }` );
        console.error( `Texto del estado: ${ err.statusText }` );

    } finally {

        $spinner.textContent = '';

    }

}

// POST
const altaPersona = async () => {

    $spinner.appendChild( crearSpinner() );
    // $ol.textContent = '';

    try {
        let nuevaPersona = {
            "nombre": "Perlita",
            "apellido": "Roy",
            "email": "perlus@gmail.com"
        };

        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify( nuevaPersona )
        }

        const res = await fetch( 'http://localhost:3000/personas', options );
        // console.log( res );

        if( !res.ok ) {
            
            let msgError = res.statusText || 'Se produjo un error';
            throw { status: res.status, statusText: msgError };
        }

        const data = await res.json();
        console.log( data );

        setTimeout(() => {
            console.log( `Estado de la petición: ${ res.statusText } - Código: ${ res.status }` );
        }, 5000);
        
    } catch ( err ) {
        console.log(err);
        console.error( `Estado de la petición: ${ err.status }` );
        console.error( `Texto del estado: ${ err.statusText }` );

    } finally {

        $spinner.textContent = '';

    }

}

//GET ( por id )
//HACER... 


//GET ( todos )
const traerPersonas = async () => {

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {
        
        const res = await fetch( 'http://localhost:3000/personas' );
        // console.log( res );

        if( !res.ok ) {
            
            let msgError = res.statusText || 'Se produjo un error';
            throw { status: res.status, statusText: msgError };
        }

        const data = await res.json();
        console.log( data );

        $ol.appendChild( crearItems( data ) );

        
    } catch ( err ) {
        console.log(err);
        console.error( `Estado de la petición: ${ err.status }` );
        console.error( `Texto del estado: ${ err.statusText }` );

    } finally {

        $spinner.textContent = '';

    }
    
}

const crearSpinner = () => {

    const $img = document.createElement( 'img' );

    $img.src = './img/spinner.gif';
    $img.alt = 'Imagen Spinner';

    return $img;

}

const crearItems = ( data ) => {

    const $fragment = document.createDocumentFragment(); // Fragmento de HTML

    data.forEach(element => {
        
        const $item = document.createElement( 'li' );
        $item.textContent = `${ element.nombre } ${ element.apellido } ${ element.email }`;

        $fragment.appendChild( $item );

    });

    return $fragment;

};