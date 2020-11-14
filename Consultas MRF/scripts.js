// console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos
soluciones.usuariosFemeninos = function(usuarios){

	return usuarios.filter( element => element.genero === 'Female' );

}
console.log(soluciones.usuariosFemeninos(data)); // DONE

// ===============================================================================================
// ===============================================================================================

// Retornar un array de strings (el email de los usuarios de sexo masculino)
soluciones.mailsVarones = function(usuarios){

	const genderMale = usuarios.filter( x => x.genero === 'Male' );
	const filtroEmail = genderMale.map( x => x.email );

	return filtroEmail;
}
console.log(soluciones.mailsVarones(data)); // DONE

// ===============================================================================================
// ===============================================================================================

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'
soluciones.usuariosMayores = function(usuarios, edad){
	
	const usuariosMapeados = usuarios.map( x => {

		return {
			nombre: x.nombre,
			email: x.email,
			edad: x.edad
		}

	});
	const filtroEdad = usuariosMapeados.filter( x => x.edad > edad );

	return filtroEdad;
}
console.log(soluciones.usuariosMayores(data, 40)); // DONE

// ===============================================================================================
// ===============================================================================================

//! NO SALEEEEEEEEEEEEE
// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.
soluciones.usuarioMasGrande = function(usuarios){
	
	
}
console.log(soluciones.usuarioMasGrande(data));

// ===============================================================================================
// ===============================================================================================

// Retornar el promedio de edad de los usuarios (number)
soluciones.promedio = function(usuarios){
  
	const edades = usuarios.map( x => x.edad );
	// console.log(edades);

	const lenEdades = edades.length;
	// console.log(lenEdades);

	const totalEdades = edades.reduce( ( acc, el ) =>  acc + el , 0); // SUMO
	// console.log(totalEdades);

	return totalEdades / lenEdades;

}
console.log("Promedio edad usuarios " + soluciones.promedio(data)); // DONE

// ===============================================================================================
// ===============================================================================================

// Retornar el promedio de edad de los usuarios hombres (number)
soluciones.promedioVarones = function(usuarios){

	const soloHombres = usuarios.filter( x => x.genero === 'Male');
	// console.log(soloHombres);

	const edades = soloHombres.map( x => x.edad );
	console.log(edades);
	// console.log(edades);

	const lenEdades = edades.length;
	// console.log(lenEdades);

	const totalEdades = edades.reduce( ( acc, el ) =>  acc + el , 0);
	// console.log(totalEdades);

	return totalEdades / lenEdades;
   
}
console.log("Promedio edad Varones " + soluciones.promedioVarones(data)); // DONE

// ===============================================================================================
// ===============================================================================================

// Retornar el promedio de edad de los usuarios mujeres (number)
soluciones.promedioMujeres = function(usuarios){
	
	const soloHombres = usuarios.filter( x => x.genero === 'Female');
	// console.log(soloHombres);

	const edades = soloHombres.map( x => x.edad );
	console.log(edades);
	// console.log(edades);

	const lenEdades = edades.length;
	// console.log(lenEdades);

	const totalEdades = edades.reduce( ( acc, el ) =>  acc + el , 0);
	// console.log(totalEdades);

	return totalEdades / lenEdades;

}
console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data)); // DONE