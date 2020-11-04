const ol = document.querySelector( '.ol' );
const btnTraer = document.getElementById( 'btnTraer' );
const spinner = document.getElementById( 'spinner' );

btnTraer.addEventListener( 'click', e => {

    const xhr = new XMLHttpRequest();

    spinner.appendChild( crearSpinner() );

    xhr.addEventListener( 'readystatechange', () => {

        //Programamos lo que tiene que hacer cuando recibamos la respuesta del server.
        if ( xhr.readyState == 4 ) {

            if ( xhr.status >= 200 && xhr.status < 300 ) {

                //Código si salió todo bien, la respuesta viene en la propiedad responseText o responseXML
                let datos = JSON.parse(xhr.responseText);

                ol.appendChild( crearItems( datos ) );

            } else { 

                let msg = xhr.statusText || 'Se produjo un error';

                console.warn( `Error: ${ xhr.status } - ${ msg }` );

            }
            spinner.textContent = '';
        }
    });

    // #1 = Verbo de la petición
    // #2 = Url
    xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/users' );

    xhr.send();
    
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