const ol = document.querySelector( '.ol' );
const btnTraer = document.getElementById( 'btnTraer' );
const spinner = document.getElementById( 'spinner' );

btnTraer.addEventListener( 'click', e => {

    // traerPersonas();

    // CRUD!
    altaPersona();
    // modificarPersona();
    // bajaPersona();
});


// Functions
function bajaPersona() {

    const xhr = new XMLHttpRequest();

    spinner.appendChild( crearSpinner() );
    ol.textContent = '';

    xhr.addEventListener( 'readystatechange', () => {

        //Programamos lo que tiene que hacer cuando recibamos la respuesta del server.
        if ( xhr.readyState == 4 ) {

            if ( xhr.status >= 200 && xhr.status < 300 ) {

                //Código si salió todo bien, la respuesta viene en la propiedad responseText o responseXML
                let datos = JSON.parse(xhr.responseText);

                console.log( datos ); // Me trae el nuevo empleado ( esto lo retorna json-server  )
                
                // ol.appendChild( crearItems( datos ) );

            } else { 

                let msg = xhr.statusText || 'Se produjo un error';

                console.warn( `Error: ${ xhr.status } - ${ msg }` );

            }
            spinner.textContent = '';
        }
    });

    // #1 = Verbo de la petición
    // #2 = Url
    xhr.open( 'DELETE', "http://localhost:3000/personas/" + 21 );

    // Seteamos la cabecera de la petición, como es un POST = va por el body.
    xhr.setRequestHeader( 'Content-type', 'application/json;charset=utf-8' );

    // en el send() = va el dato que tengo que subir. (en DELETE no va nada.)
    xhr.send();

}

function modificarPersona() {

    // Pongo los campos de la persona menos el id
    let personaAModificar = {
        "nombre": "Scott",
        "apellido": "Rodi",
        "email": "scottrodi@gmail.com"
    };

    const xhr = new XMLHttpRequest();

    spinner.appendChild( crearSpinner() );
    ol.textContent = '';

    xhr.addEventListener( 'readystatechange', () => {

        //Programamos lo que tiene que hacer cuando recibamos la respuesta del server.
        if ( xhr.readyState == 4 ) {

            if ( xhr.status >= 200 && xhr.status < 300 ) {

                //Código si salió todo bien, la respuesta viene en la propiedad responseText o responseXML
                let datos = JSON.parse(xhr.responseText);

                console.log( datos ); // Me trae el nuevo empleado ( esto lo retorna json-server  )
                
                // ol.appendChild( crearItems( datos ) );

            } else { 

                let msg = xhr.statusText || 'Se produjo un error';

                console.warn( `Error: ${ xhr.status } - ${ msg }` );

            }
            spinner.textContent = '';
        }
    });

    // #1 = Verbo de la petición
    // #2 = Url
    xhr.open( 'PUT', "http://localhost:3000/personas/" + 21 );

    // Seteamos la cabecera de la petición, como es un POST = va por el body.
    xhr.setRequestHeader( 'Content-type', 'application/json;charset=utf-8' );

    // en el send() = va el dato que tengo que subir.
    xhr.send( JSON.stringify( personaAModificar ) );

}

function altaPersona() {

    // Pongo los campos de la persona menos el id
    let nuevaPersona = {
        "nombre": "Maggie",
        "apellido": "Rodi",
        "email": "maggierodi@gmail.com"
    };

    const xhr = new XMLHttpRequest();

    spinner.appendChild( crearSpinner() );
    ol.textContent = '';

    xhr.addEventListener( 'readystatechange', () => {

        //Programamos lo que tiene que hacer cuando recibamos la respuesta del server.
        if ( xhr.readyState == 4 ) {

            if ( xhr.status >= 200 && xhr.status < 300 ) {

                //Código si salió todo bien, la respuesta viene en la propiedad responseText o responseXML
                let datos = JSON.parse(xhr.responseText);

                console.log( datos ); // Me trae el nuevo empleado ( esto lo retorna json-server  )

                // ol.appendChild( crearItems( datos ) );

            } else { 

                let msg = xhr.statusText || 'Se produjo un error';

                console.warn( `Error: ${ xhr.status } - ${ msg }` );

            }
            spinner.textContent = '';
        }
    });

    // #1 = Verbo de la petición
    // #2 = Url
    xhr.open( 'POST', 'http://localhost:3000/personas' );

    // Seteamos la cabecera de la petición, como es un POST = va por el body.
    xhr.setRequestHeader( 'Content-type', 'application/json;charset=utf-8' );

    // en el send() = va el dato que tengo que subir.
    xhr.send( JSON.stringify( nuevaPersona ) );

}

function traerPersonas() {
    
    const xhr = new XMLHttpRequest();

    spinner.appendChild( crearSpinner() );
    ol.textContent = '';

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
    xhr.open( 'GET', 'http://localhost:3000/personas' );

    xhr.send();

}

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
        item.textContent = `${ element.nombre } ${ element.email }`;

        fragment.appendChild( item );

    });

    return fragment;

};