// Objetos Literales
// Definición de un objeto literal:
const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

console.log(personaje);

/*
 * Acceder a las propiedades del objeto
 * Se puede usar la notación de punto o la notación de corchetes
*/
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);

// Acceder a propiedades anidadas:
console.log("Lat", personaje.coords.lat);

// Acceder a arreglos dentro de objetos:
console.log("No. Trajes", personaje.trajes.length);
console.log("último traje", personaje.trajes[personaje.trajes.length - 1]);

// Usar una variable para acceder a una propiedad:
const x = "vivo";
console.log("Vivo", personaje[x]);

// Acceder a propiedades con nombres que no son válidos para la notación de punto:
console.log("Última película", personaje["ultima-pelicula"]);

// Modificar propiedades del objeto:
personaje.nombre = "Tony Presidio";
console.log(personaje);

// Eliminar propiedades del objeto:
delete personaje.edad;
console.log(personaje);

// Object.entries() devuelve un arreglo con los pares [key, value] del objeto:
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Congelar el objeto para que no se puedan modificar sus propiedades con Object.freeze():
Object.freeze(personaje);

// No se pueden agregar, eliminar o modificar propiedades del objeto después de congelarlo:
personaje.dinero = 10000000000;
personaje.casado = false;
// Esto sí se puede hacer porque es una modificación de un objeto anidado, no del objeto principal:
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

// Obtener las propiedades y los valores del objeto como arreglos con Object.getOwnPropertyNames() y Object.values():
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
