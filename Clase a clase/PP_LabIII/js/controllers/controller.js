import crearTabla, { divTabla } from "../tabla.js";
import { limpiarControles } from "../form.js";
import { guardarDatos } from "../localstorage.js";
import { txtId } from "../form.js";
import { txtNombre, txtApellido, txtEmail, rdoGender } from "../form.js";

// -------- Manejadores --------
// export const eventHandlerAlta = ( e, lista, proximoId ) => {

//     e.preventDefault();
//     // --------------------- ALTA ---------------------
//     // VALIDACIONES DE LOS CONTROLES ( txtNombre, txtApellido, txtEmail, radioButton )

//     const nuevaPersona = obtenerPersona();

//     if( nuevaPersona ) {

//         lista.push( nuevaPersona );
//         proximoId++;
//         guardarDatos( lista, proximoId );
//         actualizarLista( lista );
//         limpiarControles();

//     }

// }

export const eventHandlerBaja = ( e, lista, proximoId ) => {

    e.preventDefault();

    let listaLength = lista.length;
    const idPersonaSeleccionada = parseInt( txtId.value );  // Obtengo referencia del id

    if ( confirm( 'Seguro que desea eliminar este usuario?' ) ) { 

        for (let i = 0; i < listaLength; i++) {

            if( lista[i].id === idPersonaSeleccionada ) {

                lista.splice( i , 1); // 1er param: indice del elemento, 2do: cuantos deseo eliminar.
                guardarDatos( lista, proximoId );
                actualizarLista( lista );
                limpiarControles();
                break;
                
            }
            
        } 

    }

}

export const eventHandlerModificar = ( e, lista, proximoId ) => {

    console.log(lista);
    e.preventDefault();

    const idPersonaSeleccionada = parseInt( txtId.value );  // Obtengo referencia del id de la persona.
    const filtrado = lista.filter( x => x.id === idPersonaSeleccionada );
    // console.log(filtrado);

    if ( filtrado ) {


        filtrado[0].firstName = txtNombre.value;
        filtrado[0].lastName = txtApellido.value;
        filtrado[0].email = txtEmail.value;
        filtrado[0].gender = rdoGender.value;

        guardarDatos( lista, proximoId );
        actualizarLista( lista );
        limpiarControles();
        alert( 'Modificado con éxito!!' );

    }

    // if ( confirm( 'Seguro que desea modificar este usuario?' ) ) {

        // for ( let i = 0; i < listaLength; i++ ) {

        //     if( lista[i].id === idPersonaSeleccionada ) {

        //         console.log(lista);
        //         lista[i].firstName = txtNombre.value;
        //         lista[i].lastName = txtApellido.value;
        //         lista[i].email = txtEmail.value;
        //         lista[i].gender = rdoGender.value;
        //         guardarDatos( lista, proximoId );
        //         actualizarLista( lista );
        //         limpiarControles();
        //         alert( 'MODIFICADO CON ÉXITO!' );
        //         break;
                
        //     }

        // }   
    
    // }   

}

export const eventHandlerCancelar = ( e ) => {

    // console.log('estoy tocando el boton de cancelar');
    e.preventDefault();
    limpiarControles();

}

export const eventHandlerLimpiarTabla = ( e ) => {

    console.log('estoy tocando el boton de limpiar tabla');
    e.preventDefault();
    localStorage.clear();
    window.location.reload();

}


// Verifica que el localStorage esté vacío, si lo está crea el spinner, lo inyecta en divTabla y luego de 1,5s, se crea la tabla.
export const actualizarLista = ( lista ) => {

    console.log(lista);

    // Cuando no hay nada en el localStorage, no cargo el spinner ni uso el setTimeout().
    if(localStorage.length !== 0 ) {

        divTabla.textContent = "";
        divTabla.appendChild( crearPreloader() );
        
        setTimeout(() => {
            
            divTabla.textContent = "";
            divTabla.appendChild( crearTabla( lista ) );
            
        }, 1500);
        
    }

};

const crearPreloader = () => {

    const progressBar = document.createElement( 'img' );

    progressBar.width = 50;
    progressBar.src = './progress-bar.gif';
    progressBar.alt = 'Progressbar para la carga de la tabla.';

    return progressBar;
}