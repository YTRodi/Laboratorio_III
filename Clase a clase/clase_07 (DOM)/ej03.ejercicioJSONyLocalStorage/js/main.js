const autos = [
    {"marca":"Chevrolet"},
    {"marca":"Ford"},
    {"marca":"Volkswagen"},
    {"marca":"Nissan"},
    {"marca":"Dodge"},
    {"marca":"Infiniti"},
    {"marca":"Volkswagen"},
    {"marca":"Mazda"},
    {"marca":"Nissan"},
    {"marca":"Chrysler"},
    {"marca":"Ford"},
    {"marca":"Lotus"},
    {"marca":"Chevrolet"},
    {"marca":"Toyota"},
    {"marca":"Audi"},
    {"marca":"Acura"},
    {"marca":"Audi"},
    {"marca":"Dodge"},
    {"marca":"Cadillac"},
    {"marca":"Volkswagen"}];

const crearLista = ( vec ) => {

    const lista = document.createElement( 'ul' ); // Lista no ordenada

    // forEach recorre el vector 'vec' y le tira cada uno de los elementos que tenga el vector
    vec.forEach( auto => {

        const item = document.createElement( 'li' );
        const texto = document.createTextNode( auto.marca );
        
        item.appendChild( texto ); // Li con la marca adentro.
        // Lo agrego a la lista ( ul ).
        lista.appendChild( item );

    });

    return lista;

}

const divInfo = document.getElementById('info');
console.log(divInfo);
divInfo.appendChild( crearLista( autos ) );