const personas = [
    {"id":1,"first_name":"Ewart","last_name":"Clohissy","email":"eclohissy0@mlb.com","gender":"Male"},
    {"id":2,"first_name":"Sybila","last_name":"Mengo","email":"smengo1@ibm.com","gender":"Female"},
    {"id":3,"first_name":"Diena","last_name":"Woodison","email":"dwoodison2@over-blog.com","gender":"Female"},
    {"id":4,"first_name":"Alexio","last_name":"Borthwick","email":"aborthwick3@arizona.edu","gender":"Male"},
    {"id":5,"first_name":"Steffen","last_name":"Bachanski","email":"sbachanski4@discovery.com","gender":"Male"},
    {"id":6,"first_name":"Sammie","last_name":"Drake","email":"sdrake5@cocolog-nifty.com","gender":"Male"},
    {"id":7,"first_name":"Sigrid","last_name":"Jessop","email":"sjessop6@disqus.com","gender":"Female"},
    {"id":8,"first_name":"Marcellina","last_name":"Cubbino","email":"mcubbino7@plala.or.jp","gender":"Female"},
    {"id":9,"first_name":"Garrard","last_name":"Tatham","email":"gtatham8@paypal.com","gender":"Male"},
    {"id":10,"first_name":"Trip","last_name":"Weins","email":"tweins9@devhub.com","gender":"Male"},
    {"id":11,"first_name":"Missie","last_name":"O'Cannavan","email":"mocannavana@paypal.com","gender":"Female"},
    {"id":12,"first_name":"Melissa","last_name":"Stert","email":"mstertb@yale.edu","gender":"Female"},
    {"id":13,"first_name":"Lara","last_name":"Baddiley","email":"lbaddileyc@photobucket.com","gender":"Female"},
    {"id":14,"first_name":"Fanchon","last_name":"Escalero","email":"fescalerod@imdb.com","gender":"Female"},
    {"id":15,"first_name":"Marjorie","last_name":"Reddle","email":"mreddlee@spiegel.de","gender":"Female"},
    {"id":16,"first_name":"Henrik","last_name":"Ross","email":"hrossf@liveinternet.ru","gender":"Male"},
    {"id":17,"first_name":"Walker","last_name":"Sherr","email":"wsherrg@yahoo.com","gender":"Male"},
    {"id":18,"first_name":"Brenden","last_name":"Trippitt","email":"btrippitth@wikipedia.org","gender":"Male"},
    {"id":19,"first_name":"Lanni","last_name":"McLaine","email":"lmclainei@t-online.de","gender":"Female"},
    {"id":20,"first_name":"Edmund","last_name":"Danet","email":"edanetj@guardian.co.uk","gender":"Male"}];


const crearTablaDinamica = ( arrayPersonas ) => {

    const tabla = document.createElement( 'table' );
    tabla.setAttribute( 'style','border-collapse: collapse;' );

    const caption = document.createElement( 'caption' );
    const tHead = document.createElement( 'thead' );
    const tBody = document.createElement( 'tbody' );
    const trHead = document.createElement( 'tr' );

    
    // ---------------- CAPTION ----------------
    let textoCaption = document.createTextNode( 'Tabla de personas' ); // Creo un nodo del tipo texto para agregarle el caption.
    caption.appendChild( textoCaption );
    tabla.appendChild( caption );


    // ---------------- THEAD ( Sólo me importan las cabeceras ) ----------------
    for ( const key in personas[0] ) {

        const th = document.createElement( 'th' );
        const llave = document.createTextNode( key );
        // th.setAttribute( 'style', 'border: 1px solid black; padding: 5px' );
        th.appendChild( llave );
        trHead.appendChild( th );

    }

    // Agrego tabla > thead > tr
    tHead.appendChild( trHead );
    tabla.appendChild( tHead );


    arrayPersonas.forEach( persona => {

        // ---------------- TBODY ----------------
        const trBody = document.createElement( 'tr' );

        const tdId = document.createElement( 'td' );
        const tdFirst_name = document.createElement( 'td' );
        const tdLast_name = document.createElement( 'td' );
        const tdEmail = document.createElement( 'td' );
        const tdGender = document.createElement( 'td' );


        // Creo los nodo texto con los valores de los atributos de cada persona.
        const id = document.createTextNode( persona.id );
        const firstName = document.createTextNode( persona.first_name );
        const lastName = document.createTextNode( persona.last_name );
        const email = document.createTextNode( persona.email );
        const gender = document.createTextNode( persona.gender );

        
        // Agrego a los nodos textos a sus respectivos td.
        tdId.appendChild( id );
        tdFirst_name.appendChild( firstName );
        tdLast_name.appendChild( lastName );
        tdEmail.appendChild( email );
        tdGender.appendChild( gender );

        // Agrego los td al trBody ( Solamente hay un trBody )
        trBody.appendChild( tdId );
        trBody.appendChild( tdFirst_name );
        trBody.appendChild( tdLast_name );
        trBody.appendChild( tdEmail );
        trBody.appendChild( tdGender );

        // Agrego el trBody al tBody ( Solamente hay uno sólo )
        tBody.appendChild( trBody );

        // Agrego el tBody a la tabla.
        tabla.appendChild( tBody );
    } );
    
    return tabla;
    
};

// ---------------- Pruebas ABM ----------------
const nuevaPersona = 
{   id: 21,
    first_name: 'Maggie',
    last_name: 'Rodi',
    email: 'maggie@gmail.com',
    gender: 'Female' 
};
personas.push( nuevaPersona );

const otraPersona = {};
otraPersona.id = 22;
otraPersona.first_name = 'Peter';
otraPersona.last_name = 'Parker';
otraPersona.email = 'arañita@gmail.com';
otraPersona.gender = 'Male';

personas.push(otraPersona);

const arrayPersonas = [...personas]; // Spread Operator
// arrayPersonas.pop();
// console.log(arrayPersonas);

// ---------------- Pruebas JSON ----------------
const unaPersona = JSON.stringify( nuevaPersona );
// console.log(unaPersona);

const objetoPersona = JSON.parse( unaPersona );
// console.log(objetoPersona);

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// ---------------- Agrego la tabla al body ----------------
document.body.appendChild( crearTablaDinamica( personas ) );


// ---------------- Agrego los estilos a los th y td ----------------
const caption = document.querySelector( 'caption' );
const todosLosTH = document.querySelectorAll('th');
const todosLosTD = document.querySelectorAll('td');

caption.setAttribute( 'style',
                      `border: 1px solid black;
                       padding: 5px;
                       text-align:center;
                       background-color: #513DFF;
                       color: #FFF;` );

todosLosTH.forEach( el => {

    el.setAttribute( 'style',
                     `border: 1px solid black;
                      padding: 5px;
                      text-align:center;
                      background-color: #664FFF;
                      color: #FFF;` );

});

todosLosTD.forEach( el => {

    el.setAttribute( 'style',
                     `border: 1px solid black;
                      padding: 5px;
                      text-align:center;` );

});