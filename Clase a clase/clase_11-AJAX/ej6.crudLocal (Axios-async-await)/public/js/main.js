const $ol = document.querySelector( '.ol' );
const $btnTraer = document.getElementById( 'btnTraer' );
const $spinner = document.getElementById( 'spinner' );
const BASE_URL = 'http://localhost:3000/personas';

btnTraer.addEventListener( 'click', e => {

    // LEVANTAR EL SERVIDOR CON EL COMANDO: json-server -w db.json

    //! CRUD!
    // traerPersonas();
    // traerUnaPersona( 3 );

    // altaPersona();
    // modificarPersona( 21 );
    // bajaPersona( 2 );
});

// DELETE
const bajaPersona = async ( id ) => {

    // Borro la propiedad 'data' porque no la necesito.
    const options = {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        const res = await axios( `${ BASE_URL }/${ id }`, options );

        const data = res.data;
        console.log( data );
        alert('eliminado con éxito');
        
    } catch ( err ) {

        let msgError = err.response.statusText || 'Se produjo un error';
        console.error( `Estado de la petición: ${ err.response.status } - ${ msgError }` );
        alert('catch');
        
    } finally {
        spinner.textContent = '';
    }

}

// PUT
const modificarPersona = async ( id ) => {

    // Pongo los campos de la persona menos el id
    let nuevaPersona = {
        "nombre": "Luna",
        "apellido": "Roy",
        "email": "lunita@outlook.es"
    };

    const options = {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify( nuevaPersona )
    }

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        const res = await axios( `${ BASE_URL }/${ id }`, options );

        const data = res.data;
        console.log( data );
        alert('modificado con éxito');
        
    } catch ( err ) {

        let msgError = err.response.statusText || 'Se produjo un error';
        console.error( `Estado de la petición: ${ err.response.status } - ${ msgError }` );
        alert('catch');
        
    } finally {
        spinner.textContent = '';
    }

}

// POST
const altaPersona = async () => {

    // Pongo los campos de la persona menos el id
    let nuevaPersona = {
        "nombre": "Maggie",
        "apellido": "Rodi",
        "email": "maggierodi@gmail.com"
    };

    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify( nuevaPersona )
    }

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        // Como el método viene por la cabecera ( options ), no hace falta usar el .post/get/put/delete
        const res = await axios( 'http://localhost:3000/personas', options );
        // console.log( res );

        const data = res.data;
        console.log( data );
        
    } catch ( err ) {

        let msgError = err.response.statusText || 'Se produjo un error';
        console.error( `Estado de la petición: ${ err.response.status } - ${ msgError }` );
        
    } finally {
        spinner.textContent = '';
    }

}

//GET ( por id )
const traerUnaPersona = async ( id ) => {

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        const res = await axios.get( `http://localhost:3000/personas/${ id }` );
        // console.log( res );
        const request = res.request;
        // console.log( request );


        /** NOTA:
         * #1 - A diferencia de Fetch no hace falta convertir el dato como JSON, sino ya viene parseado
         * en la propiedad .data
         */
        const data = res.data; 
        console.log( data );


        console.log( `Estado de la petición: ${ res.statusText } - Código: ${ res.status }` );
        
    } catch ( err ) {

        let msgError = err.response.statusText || 'Se produjo un error';
        console.error( `Estado de la petición: ${ err.response.status } - ${ msgError }` );
        
    } finally {
        spinner.textContent = '';
    }
    
}

//GET ( todos )
const traerPersonas = async () => {

    $spinner.appendChild( crearSpinner() );
    $ol.textContent = '';

    try {

        const res = await axios.get( 'http://localhost:3000/personas' );
        // console.log( res );
        const request = res.request;
        // console.log( request );


        /** NOTA:
         * #1 - A diferencia de Fetch no hace falta convertir el dato como JSON, sino ya viene parseado
         * en la propiedad .data
         */
        const data = res.data; 
        // console.log( data );
        $ol.appendChild( crearItems( data ) );


        console.log( `Estado de la petición: ${ res.statusText } - Código: ${ res.status }` );
        
    } catch ( err ) {

        let msgError = err.response.statusText || 'Se produjo un error';
        console.error( `Estado de la petición: ${ err.response.status } - ${ msgError }` );
        
    } finally {
        spinner.textContent = '';
    }
    
}


// Functions
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