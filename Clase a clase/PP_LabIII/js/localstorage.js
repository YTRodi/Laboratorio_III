
export const obtenerId = () => {

    return JSON.parse( localStorage.getItem( 'nextId' )) || 20000 ; // Si existe el valor guardado como next id, devuelvo eso. Sino devuelvo 20000

}

export const obtenerPersonas = () => {

    // Lee las personas que están en el localStorage o lo inicializa con un array vacio.
    return JSON.parse( localStorage.getItem( 'gente' )) || [] ; // 'gente' se llama la lista.

}

export const guardarDatos = ( lista, proximoId ) => {
    
    localStorage.setItem( 'gente', JSON.stringify( lista ) );
    localStorage.setItem( 'nextId', proximoId );

}