let nombre = "Peter Parker";
console.log(nombre);

/*
 * Reasignación de valor: No se redefine la variable.
 * var permitía redefinir la variable, pero let no.
 */
nombre = "Ben Parker";
console.log(nombre);

// Maneras de definir strings.
nombre = "Tía May";
nombre = `Tía May`;
nombre = "Tía May";

console.log(typeof nombre);

/*
 * Javascript es un lenguaje de tipado dinámico.
 * En JavaScript, se puede cambiar el tipo de dato de una variable en cualquier momento.
 * Esto puede llevar a errores difíciles de detectar.
 * Por eso, en proyectos grandes, se recomienda usar TypeScript, que es un superset de JavaScript
 * que añade tipado estático opcional al lenguaje.
 */

nombre = 123;
console.log(typeof nombre);

// Tipo boolean
let esMarvel = false;
console.log(typeof esMarvel);

// Tipo number
let edad = 33;
console.log(typeof edad);

// El tipo number en JavaScript abarca tanto enteros como decimales.
let numero = 33.001;
console.log(typeof numero);

// Tipo undefined, se usa cuando una variable no ha sido inicializada.
let superPoder;
console.log(typeof superPoder);

/*
 * Tipo null, representa la ausencia intencional de cualquier valor.
 * Es un objeto en JavaScript, lo cual es considerado un error del lenguaje.
 * A pesar de ser un error, se mantiene por compatibilidad con versiones anteriores.
 * Es decir, debía ser un valor primitivo aparte, pero por un error en la implementación inicial de JavaScript, typeof null devuelve "object".
 * Para verificar si una variable es null, se debe comparar directamente con null.
 */
let soyNull = null;
console.log(typeof soyNull);

/*
 * Tipo Symbol, se usa para crear identificadores únicos para propiedades de objetos.
 * Cada vez que se crea un Symbol, es único, incluso si tienen la misma descripción.
 * Se usa principalmente para evitar colisiones de nombres en propiedades de objetos.
 */
let symbol1 = Symbol("a");
let symbol2 = Symbol("a");

console.log(typeof symbol1);

console.log(symbol1 === symbol2);
