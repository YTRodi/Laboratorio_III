const p1 = {
    nombre: 'Yago',
    edad: '22',
    sabeNadar: true
}

console.log(JSON.stringify(1234));
console.log(1234);

console.log(JSON.parse('1234')); // De cadena a un tipo de dato nativo de JS.

console.log(p1);
/**
 * Strings = Los pone con comillas dobles ""
 * Booleanos = Sin comillas
 */
console.log(JSON.stringify(p1)); // Lo transformo en JSON.


let x = JSON.stringify(p1);
console.log(JSON.parse(x));

// --------------------------------------------------------------
// -------------------  LocalStorage -------------
// --------------------------------------------------------------

// ! LO ÚNICO QUE PUEDO GUARDAR EN EL LOCALSTORAGE ES TEXTO!

// No se puede guardar nada que NO SEA UN STRING.
// localStorage.setItem('unaPersona', JSON.stringify(p1));

const otraPersona = JSON.parse(localStorage.getItem('unaPersona'));
console.log(otraPersona);

// Si la persona existe en el LocalStorage, guardo la referencia en la constante, caso contrario se guarda una array vacío.
const persona = JSON.parse( localStorage.getItem('unaPersona') ) || [];