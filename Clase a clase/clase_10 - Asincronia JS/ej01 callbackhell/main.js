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
// const sumar = ( a, b, callback ) => {

//     let suma;

//     // Simulo la latencia.
//     setTimeout(() => {
        
//         suma = a + b;
//         console.log( suma );
//         console.log( 'Tengo el resultado de la suma!' );
        
//         // Cuando tenga el resultado, va a llamar a esta función.
//         callback( suma );

//     }, 1500);

// };

// const cuadrado = ( a, callback ) => {

//     let cuad;

//     setTimeout(() => {
        
//         cuad = a * a;
//         console.log( cuad );
//         console.log( 'Ya tengo el cuadrado!!' );

//         callback( cuad );

//     }, 1500);
    
// };

// const multiplicar = ( a, b, callback ) => {

//     let producto;

//     setTimeout(() => {
        
//         producto = a * b;
//         console.log( producto );
//         console.log( 'Tengo el resultado del producto!' );

//         callback( producto );

//     }, 1500);
    
// };


// sumar( 4, 3, ( resultadoSuma ) => {

//     cuadrado( resultadoSuma, ( resultadoCuadrado ) => {
        
//         multiplicar( resultadoCuadrado, 10, ( resultadoProducto ) => {

//             console.log( resultadoProducto );

//         } );

//     } );

// } );