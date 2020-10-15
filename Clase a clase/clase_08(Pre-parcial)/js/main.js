import crearTabla from "./tabla.js";
import Persona from "./personas.js";

let lista;
let proximoId;
let frmPersona;
let divTabla;

window.addEventListener( 'load', inicializarManejadores );


function inicializarManejadores() {
    
    lista = obtenerPersonas();
    proximoId = obtenerId();

    divTabla = document.getElementById( 'divTabla' );
    actualizarLista();

    // console.log(lista)
    // console.log(proximoId);

    frmPersona = document.forms[0];
    // console.log( document.querySelector( '#form-principal' ) );

    frmPersona.addEventListener( 'submit', e => {

        // Tengo que preguntar quién es el emisor del evento (Pq se puede disparar un submit para el alta/baja/modif)
        e.preventDefault(); // ABORTO EL ENVIO DEL FORMULARIO!


        // --------------------- ALTA ---------------------
        const nuevaPersona = obtenerPersona();

        if( nuevaPersona ) {
            
            console.log(nuevaPersona);

            lista.push( nuevaPersona );
            proximoId++;
            guardarDatos();
            
            console.log(lista);
            console.log('El próximo id es: ' + proximoId);

            // Función 'refrescarTabla() / actualizarTabla()'.
            actualizarLista();

            //Función ( limpiar los controles (nombre, apellido, etc etc) )

        }

    });

};

const obtenerId = () => {

    return JSON.parse( localStorage.getItem( 'nextId' )) || 20000 ; // Si existe el valor guardado como next id, devuelvo eso. Sino devuelvo 20000

}

const obtenerPersonas = () => {

    // Lee las personas que están en el localStorage o lo inicializa con un array vacio.
    return JSON.parse( localStorage.getItem( 'gente' )) || [] ; // 'gente' se llama la lista.

}

const obtenerPersona = () => {

    // hace el new persona y lo retorna.
    const nuevaPersona = new Persona( proximoId,
                                      document.querySelector('#txtNombre').value,
                                      document.querySelector('#txtApellido').value,
                                      document.querySelector('#txtEmail').value,
                                      frmPersona.gender.value);
        //radioButton: Como la etiqueta tiene 'value', ya lo recupero más fácil. (Male o Female)


    return nuevaPersona;

}


const guardarDatos = () => {

    localStorage.setItem( 'gente', JSON.stringify( lista ) );
    // localStorage.setItem( 'nextId', JSON.stringify( proximoId ) );
    localStorage.setItem( 'nextId', proximoId );

}

const actualizarLista = () => {

    // while( divTabla.hasChildNodes() ) {
    //     divTabla.remove
    //     ChildNode.remove()
    // }

    // setTimeout(() => {

        divTabla.textContent = "";
        divTabla.appendChild( crearTabla(lista) );
        
    // }, 5000);
    

};