let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
// Para saber la cantidad de elementos en un arreglo, usamos la propiedad .length
console.log("Largo:", juegos.length);

/*
 * Acceder a los elementos del arreglo se hace por su índice, que empieza en 0 y va hasta length-1
 * Por ejemplo, en un arreglo de 4 elementos, los índices van de 0 a 3.
 * Si se intenta acceder a un índice que no existe, devuelve undefined.
 * Se puede usar una expresión para calcular el índice.
 */
let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

/*
 * forEach permite iterar sobre los elementos del arreglo
 * Recibe una función callback que se ejecuta por cada elemento del arreglo
 * La función callback recibe tres argumentos: el elemento, el índice y el arreglo completo
 */
juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

/*
 * Los arreglos en JavaScript son dinámicos, se pueden agregar o eliminar elementos fácilmente.
 */

// .push() agrega al final y devuelve la nueva longitud
let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

// .unshift() agrega al inicio y devuelve la nueva longitud
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

// .pop() elimina el último elemento y lo devuelve
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// .shift() elimina el primer elemento y lo devuelve
juegoBorrado = juegos.shift();
console.log({ juegoBorrado, juegos });

// .splice(indice, cantidad) elimina "cantidad" elementos a partir del "indice" y devuelve un arreglo con los elementos eliminados
let juegosBorrados = juegos.splice(0, 2);
console.log({ juegosBorrados, juegos });

/*
 * indexOf es una función que recibe un elemento y devuelve la posición (índice) en la que se encuentra en el arreglo.
 * Si no lo encuentra, devuelve -1.
 * Es case sensitive, por lo que "mario" y "Mario" son diferentes.
 */
let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex });
