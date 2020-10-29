// CONSEJO: Utilizar cuando sea un nivel de anidamiento > 2

//! PROMESAS ( Sirve para organizar el callback hell )
// #1 No hace falta los callback.
// #2 Las funciones retornan una promesa.
const sumar = ( a, b ) => {

    // Resolve: if ( promesa resuelta )
    // Reject: else ( promesa incumplida )
    return new Promise( ( resolve, reject ) => {

        let suma;

        // Simulo la latencia.
        setTimeout(() => {
            
            if ( typeof a !== 'number' || typeof b !== 'number' ) {

                reject( { error: 'Parámetros inválidos en sumar' } );

            } else {

                suma = a + b;
                console.log( suma );
                console.log( 'Tengo el resultado de la suma!' );
                resolve( suma );

            }

        }, 1500);

    } );

};

const cuadrado = ( a ) => {

    return new Promise( ( resolve, reject ) => { 

        let cuad;

        setTimeout(() => {

            if ( typeof a !== 'number' ) {

                reject( { error: 'Parámetros inválidos en cuadrado' } );

            } else {

                cuad = a * a;
                console.log( cuad );
                console.log( 'Ya tengo el cuadrado!!' );
                resolve( cuad );

            }

        }, 1500);

    } );
    
};

const multiplicar = ( a, b ) => {

    return new Promise( ( resolve, reject ) => { 

        let producto;

        setTimeout(() => {
            
            if ( typeof a !== 'number' || typeof b !== 'number' ) {

                reject( { error: 'Parámetros inválidos en multiplicar' } );

            } else {

                producto = a * b;
                console.log( producto );
                console.log( 'Tengo el resultado del producto!' );
                resolve( producto );

            }

        }, 1500);

    } );
    
};

// console.log(typeof sumar( 4, 3 )); // Obj

// #1 then => 'entonces...'
// #2 catch => idem bloque try catch
// #3 Cuando tenga el resultado, lo paso como parámetro del then.
sumar( 4, 3 )
.then( resultadoSuma => cuadrado( undefined ) )
.then( resultadoCuad => multiplicar( resultadoCuad, 10 ) )
.then( resultadoProducto => {

    console.log( resultadoProducto );

} )
.catch( ( obj ) => {

    console.log( obj.error );

} );
