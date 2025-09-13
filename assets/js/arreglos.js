// Arreglos
// Son objetos especiales, que nos permiten almacenar múltiples valores en una sola variable

// Maneras de definir arreglos
// const arr = new Array(10);
// const arr = [];

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videoJuegos });

console.log(videoJuegos[0]);

// Los arreglos son objetos
console.log(typeof videoJuegos);
console.log(videoJuegos instanceof Array);

/*
 *Los arreglos en JS no necesariamente son homogéneos
 *Pueden tener diferentes tipos de datos
 *Pueden tener funciones
 *Pueden tener objetos
 *Pueden tener otros arreglos
 *Pueden tener lo que sea
 */
let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

console.log({ arregloCosas });
console.log(arregloCosas[2]);
console.log(arregloCosas[7][4][1]);
