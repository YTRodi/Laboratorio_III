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

// Función Asincrona
const realizarOperaciones = async () => {

    // await = 'esperar' ( Tengo que esperar que una función me retorne algo ).

    try {
        
        let suma = await sumar( 4, 3 ); // Esta función que es asincrónica lo vuelvo sincrónico
        let cuad = await cuadrado( suma );
        let rta = await multiplicar( cuad, 10 );
        console.log(rta)

    } catch ( obj ) {
        
        console.log( obj.error );

    }

};

realizarOperaciones();