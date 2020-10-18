import Persona from "./personas.js";
import { obtenerId } from "./localstorage.js";

// ------ Controles Formulario ------

// Form principal.
export const frmPrincipal = document.querySelector( '#form-principal' );

// LabelId, TextBox's, radioButton ( Gender );
export const labelId = document.querySelector( '#labelId' );
export const txtId = document.querySelector( '#txtId' );
export const txtNombre = document.querySelector('#txtNombre');
export const txtApellido = document.querySelector('#txtApellido');
export const txtEmail = document.querySelector('#txtEmail');
export const rdoGender = frmPrincipal.gender;

// Botones ( Alta, Baja, Modificar, LimpiarTabla );
export const botonAlta = document.querySelector( '#btnAlta' );
export const botonBaja = document.querySelector( '#btnBaja' );
export const botonModificar = document.querySelector( '#btnModif' );
export const botonCancelar = document.querySelector( '#btnCancelar' );
export const botonLimpiarTabla = document.querySelector( '#btnLimpiarTabla' );


// ------ Funciones ------
export const obtenerPersona = () => {

    const nuevaPersona = new Persona( obtenerId(),
                                      txtNombre.value,
                                      txtApellido.value,
                                      txtEmail.value,
                                      rdoGender.value);
        //radioButton: Como la etiqueta tiene 'value', ya lo recupero más fácil. (Male o Female)

    return nuevaPersona;

}

export const limpiarControles = () => {

    // console.log(txtNombre,txtApellido,txtEmail,rdoGender);
    txtNombre.value = '';
    txtApellido.value = '';
    txtEmail.value = '';
    rdoGender.value = 'Male';
    
    botonAlta.classList.remove( 'desaparecer' ); // Le saco la clase desaparecer al botón del alta

    labelId.classList.add( 'desaparecer' );
    txtId.classList.add( 'desaparecer' );
    botonBaja.classList.add( 'desaparecer' );
    botonModificar.classList.add( 'desaparecer' );
    
};