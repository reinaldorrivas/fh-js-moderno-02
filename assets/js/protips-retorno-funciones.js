/*
 * Función que retorna un objeto literal
 * Si se retorna un objeto literal, se debe envolver el objeto entre paréntesis () para que no se confunda con el cuerpo de la función.
 * Si el objeto tiene una sola propiedad, se puede usar la sintaxis abreviada { propiedad } en lugar de { propiedad: propiedad }.
 * Si la función tiene solo una línea que retorna un valor, se puede omitir el return y las llaves {}.
 */
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("René", "Rivas");

console.log(persona);

/*
 * Función que retorna múltiples valores usando rest parameters
 * Se usa rest parameters para agrupar todos los argumentos en un arreglo.
 */
const imprimeArgumentos = (...args) => {
  console.log({ args });
  return args;
};

// Desestructuración de arreglos:
const [casado, vivo, nombre, saludo] = imprimeArgumentos(
  36,
  false,
  false,
  "Reinaldo",
  "Hola"
);

console.log({edad, casado, vivo, nombre, saludo });

// Desestructuración de objetos:
// Si la función retorna un objeto, se puede desestructurar directamente en la llamada a la función.
// Se puede renombrar la variable al desestructurar usando : nuevoNombre
const { apellido: nuevoApellido } = crearPersona("Reinaldo", "Rivas");

console.log({ nuevoApellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// Desestructuración en los parámetros de la función:
// Se pueden asignar valores por defecto a las propiedades que no existan en el objeto.
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
