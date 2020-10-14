import crearTabla from "./tabla.js";
import Persona from "./personas.js";

let lista;
let proximoId;
let frmPersona;


window.addEventListener( 'load', inicializarManejadores );

function inicializarManejadores() {
    
    lista = obtenerPersonas();
    proximoId = obtenerId();

    const divTabla = document.getElementById( 'divTabla' );
    divTabla.appendChild( crearTabla(lista) );

    console.log(lista);
    // console.log(proximoId);

    frmPersona = document.forms[0];

    frmPersona.addEventListener( 'submit', e => {

        // Tengo que preguntar quién es el emisor del evento (Pq se puede disparar un submit para el alta/baja/modif)
        e.preventDefault();

        // Hago el alta de la Persona ( Lo puedo poner en la clase PERSONA!!!! o en un 'controller' donde tenga todos los métodos ).
        // #1
        // console.log(frmPersona.nombre.value);

        // #2
        // console.log(document.querySelector('#txtNombre').value);
        // console.log(document.querySelector('#txtApellido').value);
        // console.log(document.getElementById('txtEmail').value);
        // // Como la etiqueta tiene 'value', ya lo recupero más fácil. (Male o Female)
        // console.log(frmPersona.gender.value); 

        const nuevaPersona = obtenerPersona();
        if( nuevaPersona ) {
            
            console.log(nuevaPersona);

            lista.push( nuevaPersona );
            
            proximoId++;
            guardarDatos();
            
            console.log(lista);
            console.log('El próximo id es: ' + proximoId);

            // Función 'refrescarTabla'.
            divTabla.textContent = "";
            divTabla.appendChild( crearTabla(lista) )

        }

    });

};

const obtenerId = () => {

    return JSON.parse( localStorage.getItem( 'nextId' )) || 20000 ; // Si existe el valor guardado como next id, devuelvo eso. Sino devuelvo 20000

}

const obtenerPersonas = () => {

    return JSON.parse( localStorage.getItem( 'gente' )) || [] ; // 'gente' se llama la lista.

}

const obtenerPersona = () => {

    // hace el new persona y lo retorna.
    const nuevaPersona = new Persona( proximoId,
                                      document.querySelector('#txtNombre').value,
                                      document.querySelector('#txtApellido').value,
                                      document.getElementById('txtEmail').value,
                                      frmPersona.gender.value);

    return nuevaPersona;

}

//! Deprecado?
// ( Lo puedo poner en la clase PERSONA!!!! )
const altaPersona = () => {

    const nuevaPersona = new Persona( proximoId,
                                      document.querySelector('#txtNombre').value,
                                      document.querySelector('#txtApellido').value,
                                      document.getElementById('txtEmail').value,
                                      frmPersona.gender.value);

    // Push en la lista y luego agrego al localStorage.
    // lista.push( nuevaPersona );

    return nuevaPersona;
}

const guardarDatos = () => {

    localStorage.setItem( 'gente', JSON.stringify( lista ) );
    localStorage.setItem( 'nextId', JSON.stringify( proximoId ) );

}