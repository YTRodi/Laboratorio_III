console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); //Documento completo HTML
console.log(document.title);
console.log(document.charset);
console.log(document.documentElement.lang);
console.log(document.forms); //Objeto HTMLCollection (No tiene los métodos de los arrays convencionales).
console.log(document.links);
console.log(document.styleSheets); //archivos CSS
console.log(document.scripts);


console.log(document.getElementById('linkGoogle'));
//!! DEPRECADAS ( Las reemplaza querySelector() )
// console.log(document.getElementsByTagName('a')); //HTMLCollection de todos los 'a' (Los trae por etiqueta).
// console.log(document.getElementsByName('nombre')); // NodeList (No es un array).
// console.log(document.getElementsByClassName('enlace'));

// const listaClaseEnlace = document.getElementsByClassName('enlace');
// console.log(listaClaseEnlace[0]);

document.getElementById('btn1').addEventListener('click', e => { alert('Saludar') });

// ------------------------------------------------------------------
// ------------------------------------------------------------------

console.log(document.querySelector('#btn1')); // id
console.log(document.querySelector('.enlace')); // clase ( Me trae el primero que encuentra )
console.log(document.querySelectorAll('.enlace')); // NodeList ( Contiene foreach ).

const unElementoClaseMiParrafo = document.querySelector('div .miParrafo');
const listaClaseEnlace = document.querySelectorAll('.enlace');
const listaClaseMisParrafos = document.querySelectorAll('.miParrafo');
const todosLosParrafos = document.querySelectorAll('p');
const unElementoIDpChau = document.querySelector('#pChau');
console.log(unElementoClaseMiParrafo);
console.log(listaClaseMisParrafos);
console.log('---------------------------------------');
console.log(todosLosParrafos);
console.log(unElementoIDpChau);
