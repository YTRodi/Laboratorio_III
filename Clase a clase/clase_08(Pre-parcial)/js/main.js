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

    divTabla = document.querySelector( '#divTabla' );
    actualizarLista();

    frmPersona = document.querySelector( '#form-principal' );

    frmPersona.addEventListener( 'submit', e => {

        e.preventDefault();

        // --------------------- ALTA ---------------------
        const nuevaPersona = obtenerPersona();

        if( nuevaPersona ) {

            // console.log(nuevaPersona);
            lista.push( nuevaPersona );
            proximoId++;
            guardarDatos();
            
            // console.log(lista);
            // console.log('El próximo id es: ' + proximoId);

            // Función 'refrescarTabla() / actualizarTabla()'.
            actualizarLista();
            
            //Función ( limpiar los controles (nombre, apellido, etc etc) )
            limpiarControles();

        }

    });

    // BOTON DE BAJA 
    const botonBaja = document.querySelector( '#btnBaja' );
    // console.log(botonBaja);

    botonBaja.addEventListener( 'click', ( e ) => {

        e.preventDefault();
        let listaLength = lista.length;
        const idPersonaSeleccionada = parseInt( document.querySelector( '#txtId' ).value );  // Obtengo referencia del id de la persona.

        if ( confirm('Seguro que desea eliminar este usuario?') ) { 

            if ( confirm('Seguro seguro seguro que desea ELIMINAR este usuario?') ) { 
 
                for (let i = 0; i < listaLength; i++) {

                    if( lista[i].id === idPersonaSeleccionada ) {

                        lista.splice( i , 1); // 1er param: indice del elemento, 2do: cuantos deseo eliminar.
                        guardarDatos();
                        actualizarLista();
                        limpiarControles();
                        break;
                        
                    }
                    
                } 

            }

        }
        

    });

    // BOTON DE MODIFICACION 
    const botonModificar = document.querySelector( '#btnModif' );

    botonModificar.addEventListener( 'click', ( e ) => {

        e.preventDefault();
        let listaLength = lista.length;
        const idPersonaSeleccionada = parseInt( document.querySelector( '#txtId' ).value );  // Obtengo referencia del id de la persona.

        if ( confirm('Seguro que desea modificar este usuario?') ) {

            for ( let i = 0; i < listaLength; i++ ) {

                if( lista[i].id === idPersonaSeleccionada ) {
    
                    lista[i].firstName = document.querySelector( '#txtNombre' ).value
                    lista[i].lastName = document.querySelector( '#txtApellido' ).value
                    lista[i].email = document.querySelector( '#txtEmail' ).value
                    lista[i].gender = document.forms[0].gender.value
                    guardarDatos();
                    actualizarLista();
                    limpiarControles();
                    alert( 'MODIFICADO CON ÉXITO!' );
                    break;
                    
                }

            }   
        
        }     

             

    });



    // BOTON DE CANCELAR (función: agregarManejadorBtnCancelar())
    const botonCancelar = document.querySelector( '#btnCancelar' );

    botonCancelar.addEventListener( 'click' , (e) => {

        // console.log('estoy tocando el boton de cancelar');
        e.preventDefault();
        limpiarControles();

    });

    // BOTON DE LIMPIAR TABLA ( Limpia el localStorage ).
    const botonLimpiarTabla = document.querySelector( '#btnLimpiarTabla' );

    botonLimpiarTabla.addEventListener( 'click', ( e ) => {

        e.preventDefault();
        localStorage.clear();
        window.location.reload();

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

// --------------------------- MIAS ---------------------------
// --------------------------- MIAS ---------------------------
const limpiarControles = () => {

    document.querySelector('#txtNombre').value = '';
    document.querySelector('#txtApellido').value = '';
    document.querySelector('#txtEmail').value = '';
    frmPersona.gender.value = 'Male';
    document.querySelector( '#btnAlta' ).classList.remove( 'desaparecer' ); // Le saco la clase desaparecer al botón del alta

    document.querySelector( '#labelId' ).classList.add( 'desaparecer' );
    document.querySelector( '#txtId' ).classList.add( 'desaparecer' );
    document.querySelector( '#btnBaja' ).classList.add( 'desaparecer' );
    document.querySelector( '#btnModif' ).classList.add( 'desaparecer' );

};