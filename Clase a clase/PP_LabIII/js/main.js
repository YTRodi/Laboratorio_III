import { frmPrincipal } from "./form.js";
import { botonBaja, botonModificar, botonCancelar, botonLimpiarTabla } from "./form.js";
import { obtenerPersona, limpiarControles } from "./form.js";
import { obtenerPersonas, obtenerId, guardarDatos } from "./localstorage.js";
import { actualizarLista, eventHandlerBaja, eventHandlerModificar, eventHandlerCancelar, eventHandlerLimpiarTabla } from "./controllers/controller.js";


let lista;
let proximoId;


window.addEventListener( 'load', initHanlders );


function initHanlders() {
    
    lista = obtenerPersonas(); // [ { Obj, Obj, Obj... } ]
    proximoId = obtenerId(); // number
    actualizarLista( lista );

    // ALTA
    frmPrincipal.addEventListener( 'submit', ( e ) => {

        e.preventDefault();
        // --------------------- ALTA ---------------------
        // VALIDACIONES DE LOS CONTROLES ( txtNombre, txtApellido, txtEmail, radioButton )
    
        const nuevaPersona = obtenerPersona();
    
        if( nuevaPersona ) {
    
            lista.push( nuevaPersona );
            proximoId++;
            guardarDatos( lista, proximoId );
            actualizarLista( lista );
            limpiarControles();
    
        }

    });


    // BAJA
    botonBaja.addEventListener( 'click', ( e ) => { eventHandlerBaja( e, lista, proximoId ) });


    // MODIFICAR
    botonModificar.addEventListener( 'click', ( e ) => { eventHandlerModificar( e, lista, proximoId ) });


    // CANCELAR
    botonCancelar.addEventListener( 'click', ( e ) => { eventHandlerCancelar( e ) });


    // LIMPIAR TABLA
    botonLimpiarTabla.addEventListener( 'click', ( e ) => { eventHandlerLimpiarTabla( e ) });

};