/*
 * Funciones
 *
 * Una función es un bloque de código que se puede reutilizar
 * Se puede definir una función con la palabra reservada function, seguida del nombre de la función y paréntesis
 * Dentro de los paréntesis se pueden definir los parámetros que recibe la función
 * El bloque de código de la función va entre llaves {}
 *
 * Una función puede devolver un valor con la palabra reservada return
 * Si no se especifica un return, la función devuelve undefined por defecto
 *
 * Una función puede recibir cualquier cantidad de argumentos, incluso más de los parámetros definidos
 * Los argumentos adicionales se pueden acceder con el objeto especial "arguments", que es un arreglo-like (no es un arreglo real, pero se comporta como uno)
 *
 * Las funciones en JavaScript son ciudadanos de primera clase, lo que significa que se pueden asignar a variables,
 * pasar como argumentos a otras funciones y devolver desde otras funciones
 */

// Función tradicional
function saludar(nombre) {
  /*
   * arguments es un objeto especial que contiene todos los argumentos pasados a la función.
   * No es un arreglo real, pero se comporta como uno.
   * Se puede acceder a sus elementos por índice y tiene la propiedad length.
   * No se puede usar métodos de arreglos directamente, pero se puede convertir a un arreglo real con Array.from() o el operador spread [...]
   * No está disponible en funciones flecha.
   */
  console.log(arguments);
  return "Hola " + nombre;

  // El código después del return no se ejecuta
  console.log("Soy un código que está después del return");
}

const retornoDeSaludar = saludar("René", 40, true, "Venezuela");
console.log("saludar: " + retornoDeSaludar);

// Función anónima tradicional asignada a una variable:
const saludarAlt = function (nombre) {
  return "Hola " + nombre;
};

console.log("saludarAlt: " + saludarAlt("René"));

/*
 * Función de flecha (arrow function)
 * Si tiene una sola expresión, se puede omitir el return y las llaves {}.
 * Si tiene un solo parámetro, se pueden omitir los paréntesis ().
 * Si no tiene parámetros, se deben usar paréntesis vacíos ().
 * No se puede usar como constructor (no se puede usar "new" con una función flecha).
 * No se puede usar "arguments" dentro de una función flecha (no tiene su propio objeto arguments).
 * No se puede usar "this" dentro de una función flecha (hereda el this del contexto donde fue definida).
 * Las funciones flecha son anónimas, no se pueden nombrar.
 */

// Función de flecha sin parámetros:
const saludarFlecha = () => {
  console.log("saludarFlecha: Hola Flecha");
};

saludarFlecha();

// Función de flecha con un solo parámetro:
const saludarFlechaAlt = (nombre) => {
  console.log("saludarFlechaAlt: Hola " + nombre);
};

saludarFlechaAlt('Mentirosa');

// Función tradicional con pase de parámetros:
function sumar(a, b) {
  return a + b;
}

console.log("Sumar: " + sumar(1, 2));

// Función de flecha con llaves {} y return:
const sumarFlecha = (a,b) => {
    return a + b;
}

console.log("SumarFlecha: " + sumarFlecha(1, 3));

// Función de flecha resumida, sin llaves {} y sin return:
const sumarFlechaResumida = (a, b) => a + b;

console.log("SumarFlechaResumida: " + sumarFlechaResumida(1, 4));

