const ol = document.querySelector( '.ol' );
const btnTraer = document.getElementById( 'btnTraer' );
const spinner = document.getElementById( 'spinner' );

btnTraer.addEventListener( 'click', e => {

    spinner.appendChild( crearSpinner() );

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( ( res ) => {

        // return res.json(); // Método asíncrono ( devuelve una promesa, lo capturo en el then siguiente)


        // Puedo usar la clase Promise como estática
        return !res.ok ? Promise.reject( res ) : res.json();
        
    })
    .then( ( data ) => {

        ol.appendChild( crearItems( data ) );

    })
    .catch( ( err ) => {

        console.log( err );

    })
    .finally( () => {

        spinner.textContent = '';

    });


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
        item.textContent = `${ element.name } ${ element.email }`;

        fragment.appendChild( item );

    });

    return fragment;

};