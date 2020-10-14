import crearTabla from "./tabla.js";
import Persona from "./personas.js";

// const lista = 
// [
//     {"id":1,"first_name":"Feliza","last_name":"Corser","email":"fcorser0@google.es","gender":"Female"},
//     {"id":2,"first_name":"Nial","last_name":"Barnardo","email":"nbarnardo1@wisc.edu","gender":"Male"},
//     {"id":3,"first_name":"Tish","last_name":"D'Costa","email":"tdcosta2@miitbeian.gov.cn","gender":"Female"},
//     {"id":4,"first_name":"Kiel","last_name":"Switsur","email":"kswitsur3@php.net","gender":"Male"},
//     {"id":5,"first_name":"Ashlin","last_name":"Corderoy","email":"acorderoy4@amazonaws.com","gender":"Male"},
//     {"id":6,"first_name":"Carline","last_name":"Francisco","email":"cfrancisco5@loc.gov","gender":"Female"},
//     {"id":7,"first_name":"Josey","last_name":"Cowl","email":"jcowl6@ycombinator.com","gender":"Female"},
//     {"id":8,"first_name":"Kip","last_name":"Serrier","email":"kserrier7@huffingtonpost.com","gender":"Male"},
//     {"id":9,"first_name":"Dillie","last_name":"Finnes","email":"dfinnes8@google.com.au","gender":"Male"},
//     {"id":10,"first_name":"Alain","last_name":"Daykin","email":"adaykin9@weibo.com","gender":"Male"},
//     {"id":11,"first_name":"Diane-marie","last_name":"Hannond","email":"dhannonda@yale.edu","gender":"Female"},
//     {"id":12,"first_name":"Korey","last_name":"Tuma","email":"ktumab@macromedia.com","gender":"Male"},
//     {"id":13,"first_name":"Jae","last_name":"Hendrick","email":"jhendrickc@aol.com","gender":"Male"},
//     {"id":14,"first_name":"Bronnie","last_name":"Kubyszek","email":"bkubyszekd@trellian.com","gender":"Male"},
//     {"id":15,"first_name":"Janaya","last_name":"Wilber","email":"jwilbere@fastcompany.com","gender":"Female"},
//     {"id":16,"first_name":"Paten","last_name":"Bradburne","email":"pbradburnef@skyrock.com","gender":"Male"},
//     {"id":17,"first_name":"Bartlet","last_name":"Beelby","email":"bbeelbyg@cbslocal.com","gender":"Male"},
//     {"id":18,"first_name":"Leila","last_name":"Bachelor","email":"lbachelorh@elpais.com","gender":"Female"},
//     {"id":19,"first_name":"Findlay","last_name":"Puller","email":"fpulleri@hc360.com","gender":"Male"},
//     {"id":20,"first_name":"Worthington","last_name":"Ivanin","email":"wivaninj@techcrunch.com","gender":"Male"}];

const lista = [];

const btnTabla = document.getElementById( 'btnTabla' );

//'e' es donde viene la info del evento.
btnTabla.addEventListener( 'click', ( e ) => {

    const divTabla = document.getElementById( 'divTabla' );

    divTabla.appendChild( crearTabla( lista ) );
    
    // console.log(e);
    // console.log(e.target); // Me dice quién fue el emisor del evento.

});


// const crearTabla = ( lista ) => {

//     const tabla = document.createElement( 'table' );

//     tabla.appendChild( crearCabecera( lista[0] ) );
//     tabla.appendChild( crearCuerpo( lista ) );

//     return tabla;
// };

// const crearCabecera = ( item ) => {

//     const tHead = document.createElement( 'thead' );
//     const tr = document.createElement( 'tr' );

//     for (const key in item) {
        
//         const th = document.createElement( 'th' );
//         const texto = document.createTextNode( key );

//         // th.textContent = texto; Es lo mismo...
//         th.appendChild( texto );
//         tHead.appendChild(th);
//     }


//     return tHead;

// };

// const crearCuerpo = ( lista ) => {

//     const tBody = document.createElement( 'tbody' );

//     lista.forEach( element => {

//         const tr = document.createElement( 'tr' );

//         for (const key in element) {
            
//             // table data
//             const td = document.createElement( 'td' );

//             // Como es un array asociativo, nos da el valor del atributo key.
//             const texto = document.createTextNode( element[ key ] );
//             td.appendChild( texto );
//             tr.appendChild( td );

//         }

//         if( element.hasOwnProperty( 'id' ) ) { // Si el elemento tiene la propiedad 'id'

//             // #1
//             // tr.setAttribute( 'data-id', element[ 'id' ] );
//             // console.log(tr);
//             // console.log(element['id']);

//             // #2
//             tr.dataset.id = element[ 'id' ];

//         } else {
//             console.log( 'El elemento no tiene la propiedad "id".' );
//         }

//         //Le agrego el manejador del evento.
//         agregarManejadorTR( tr );

//         tBody.appendChild( tr );

//     });

//     return tBody;

// };

// const agregarManejadorTR = ( tr ) => {

//     // Objetivo: mostrar el id.
    
//     // null es un falsy.
//     if( tr ) { // si tr es != de null...

//         // 3er parámetro en addEventListener es...
//         tr.addEventListener( 'click', ( e ) => {

//             // e.target va a ser el tr
//             // #1
//             // alert(e.target.getAttribute( 'data-id' ));

//             // console.log(e.target);

//             // #2
//             console.log(e);
//             alert( e.path[1].dataset.id );

//         });

//     } else {
//         console.log( 'tr null' );
//     }

// }