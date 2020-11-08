const ol = document.querySelector( '.ol' );
const btnTraer = document.getElementById( 'btnTraer' );
const spinner = document.getElementById( 'spinner' );

btnTraer.addEventListener( 'click', async () => {

    spinner.appendChild( crearSpinner() );
    ol.textContent = '';

    try {
        
        let res = await fetch('https://jsonplaceholder.typicode.com/users'); // Que espere a que termine fetch
        // console.log(res);
        
        if ( !res.ok ) {
            
            let msg = res.statusText || 'Se produjo un error';

            throw { status: res.status, statusText: msg }; // Retorno un obj.

            // throw new Error( `Error!! res.status: ${ res.status } - mensaje: ${ msg }` );

        }

        let data = await res.json();
        console.log( data );

        const datosMapeados = data.map( dato => {

            return {
                nombre: dato.name,
                email: dato.email,
                direccion: dato.address.street,
                telefono: dato.phone,
                nombreCompania: dato.company.name
            }

        });

        console.log(datosMapeados);

        ol.appendChild( crearItems( datosMapeados ) );
        // ol.appendChild( crearItems( data ) );

    } catch ( err ) {
        
        console.error( `Estado de la petición: ${ err.status }` );
        console.error( `Texto del estado: ${ err.statusText }` );

    } finally {

        spinner.textContent = '';

    }


});


// Functions
const crearSpinner = () => {

    const img = document.createElement( 'img' );

    img.src = './img/spinner.gif';
    img.alt = 'Imagen Spinner';

    return img;

}

const crearItems = ( data ) => {

    const fragment = document.createDocumentFragment(); // Fragmento de HTML

    data.forEach(element => {
        
        const item = document.createElement( 'li' );
        // item.textContent = `${ element.name } ${ element.email }`;
        item.textContent = `${ element.nombre } || ${ element.email } || ${ element.direccion } || ${ element.nombreCompania }`;

        fragment.appendChild( item );

    });

    return fragment;

};

// const traerPersonas = async () => {

//     spinner.appendChild( crearSpinner() );

//     try {
        
//         let res = await fetch('https://jsonplaceholder.typicode.com/user'); // Que espere a que termine fetch

//         let msg = res.statusText || 'Se produjo un error';

//         if ( !res.ok ) {

//             throw new Error( `Error!! res.status: ${ res.status } - mensaje: ${ mensaje }` );

//         }

//         let data = await res.json();

//         ol.appendChild( crearItems( data ) );

//     } catch (err) {
        
//         console.error( err );

//     } finally {

//         spinner.textContent = '';

//     }

// }