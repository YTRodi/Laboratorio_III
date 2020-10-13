const $parrafos = document.getElementById('parrafos');
console.log($parrafos);
console.log($parrafos.childNodes); // Trae todos los nodos, hasta los nodo textos vacios ( enter )
console.log($parrafos.children);

const hijos = $parrafos.children;
console.log(hijos);
console.log(hijos['p1']);
console.log(hijos['p2']);
console.log(hijos['p3']);

for (let i = 0; i < hijos.length; i++) {
    console.log(hijos[i]);
}

const listaParrafos = [...hijos]; // Lo transformo en un array con el SPREAD OPERATOR.
console.log(listaParrafos);
listaParrafos.forEach( e => { console.log(e); } );

// -----------------------------------------------------------
// -----------------------------------------------------------

// ! https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

console.log($parrafos.firstChild); // Toma el primer nodo ( Que puede ser de cualquier tipo )
console.log($parrafos.firstChild.nodeType); // TIPO 3.

console.log($parrafos.firstElementChild); // Toma el PRIMER nodo, pero está vez solamente toma a los nodo elemento.
console.log($parrafos.firstElementChild.nodeType); // TIPO 1.


// -----------------------------------------------------------
// ----------------- Padres e hijos ------------------

console.log($parrafos.parentNode);
console.log($parrafos.firstElementChild.previousElementSibling); // ( Nodo Hermano ) No hay nada antes que el p1
console.log($parrafos.firstElementChild.nextElementSibling);

console.log( $parrafos.hasChildNodes() ); // Pregunto si un elemento tiene hijos.
// $parrafos.removeChild($parrafos.firstElementChild);

while ($parrafos.hasChildNodes()) {
    // Borro todos los elementos.
    console.log($parrafos.firstChild);
    $parrafos.removeChild($parrafos.firstChild);
}