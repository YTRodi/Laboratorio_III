// CONSEJO: Utilizar cuando sea un nivel de anidamiento 2 

//! Entorno bloqueante.
// const sumar = ( a, b ) => a + b;
// const cuadrado = ( a ) => a * a;
// const multiplicar = ( a, b ) => a * b;

// let suma = sumar( 4, 3 );
// let cuad = cuadrado( suma );
// let rta = multiplicar( cuad, 10 );

// console.log(rta);

// ------------------------------------------------------------
// ------------------------------------------------------------

//! CALLBACK HELL!!
const sumar = ( a, b, callback ) => {

    let suma;

    // Simulo la latencia.
    setTimeout(() => {
        
        if ( typeof a !== 'number' || typeof b !== 'number' ) {

            callback( 'Todo mal en suma' );

        } else {

            //! Esta mal visto poner un else en JS.
            suma = a + b;
            console.log( suma );
            console.log( 'Tengo el resultado de la suma!' );
            
            //! El primer parámetro del callback por lo general es null.
            callback( null, suma );

        }

    }, 1500);

};

const cuadrado = ( a, callback ) => {

    let cuad;

    setTimeout(() => {
        
        if ( typeof a !== 'number') {

            callback( 'Todo mal en cuadrado' );

        } else {

            cuad = a * a;
            console.log( cuad );
            console.log( 'Ya tengo el cuadrado!!' );

            callback( null, cuad );

        }

    }, 1500);
    
};

const multiplicar = ( a, b, callback ) => {

    let producto;

    setTimeout(() => {
        
        if ( typeof a !== 'number') {

            callback( 'Todo mal en multiplicar' );

        } else {

            producto = a * b;
            console.log( producto );
            console.log( 'Tengo el resultado del producto!' );

            callback( null, producto );

        }

    }, 1500);
    
};


sumar( 4, 3, ( error, resultadoSuma ) => {

    if ( error ) {  console.log( error ); return }

    cuadrado( resultadoSuma, ( error, resultadoCuadrado ) => {

        if ( error ) { console.log( error ); return }
        
        multiplicar( resultadoCuadrado, null, ( error, resultadoProducto ) => {

            if ( error ) {

                console.log( 'Error en multiplicar' );
                
            } else {

                console.log( resultadoProducto );

            }

        } );

    } );

} );