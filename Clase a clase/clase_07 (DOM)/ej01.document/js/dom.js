const titulo = document.getElementById('titulo');
// // titulo.setAttribute('id','otroID');
// console.log(titulo.hasAttribute('class'));

// console.log(titulo.getAttribute('id'));
// console.log(titulo.hasAttribute('id'));
// titulo.removeAttribute('id');
// console.log(titulo.hasAttribute('id'));

// console.log(titulo.className);
// console.log(titulo.classList); // DOMTokenList ( Con el nombre de todas las clases )
// console.log(titulo.classList[0]);

// // Le agrego la clase 'letrasVerdes'
// titulo.classList.add('letrasVerdes','rojo');
// console.log(titulo.classList);

// ----------------------------------------------------------------
// ----------------------------------------------------------------

const linkGoogle = document.getElementById('linkGoogle');
const linkClarin = document.getElementById('linkClarin');
linkClarin.classList.replace('azul','rojo'); // Cambio una clase por otra.
const boton = document.querySelector('#btn1');
boton.addEventListener('click', e => {
    // '.toggle' => Si lo no tiene lo agrega, si lo tiene lo saca.
    linkGoogle.classList.toggle('link');
    titulo.classList.toggle('rojo');
    titulo.classList.toggle('letrasVerdes');
});

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// Cuando se tiene que traer una referencia de algún elemento del DOM ( de la interfaz gráfica ).
const $parrafoChau = document.getElementById('pChau');

console.log($parrafoChau.id);

$parrafoChau.setAttribute('style','background-color: blueviolet; color: yellow;');

// ----------------------------------------------------------------
// ----------------------------------------------------------------

//?? Hay 3 métodos para escribir/inyectar texto dentro de la etiqueta.
const $info = document.getElementById('info');

// #1 ( No forma parte del standard )
$info.innerText = '<h2>Hola mundo</h2>'; // No escribe código HTML, solo texto plano.

// #2 ( No habría que usarlo )
$info.innerHTML = '<h2>Chau mundo</h2>'; // No lo tenemos en memoria.

// #3 ( Forma parte del standard, pero NO ESCRIBE CÓDIGO HTML )
$info.textContent = '<h2>Holis</h2>';



// ----------------------------------------------------------------
// ------------------- BUENAS PRÁCTICAS -------------------
// ------------ En lugar de inyectar texto en una etiqueta, creamos un elemento.  -------------------

// Creo un elemento.
const unH2 = document.createElement('h2');

// ! #1 
// ( Creando un nodo texto y luego lo inyecto )
// let text = document.createTextNode('Esto es un título H2 ( creado dinámicamente con JS)');
// unH2.appendChild(text); // Agrego un nuevo nodo al elemento unH2

// ! #2 
// ( Inyectarlo directamente con el text content )
unH2.textContent = 'Chau mundo';

unH2.classList.add('rojo');

$info.appendChild(unH2); // Lo inyecto en el elemento $info


// ----------------------------------------------------------------
// --------------------- DATA ATTRIBUTE --------------------------

titulo.dataset.description = 'Esto es un data attribute';
titulo.setAttribute('data-description','Esto es otra forma de inyectar un data attribute');

console.log(titulo.dataset.description);