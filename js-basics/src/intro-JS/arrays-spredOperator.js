// const arr = new Array;

const arr = [];
arr.push("pepe", "manolo", "miyu");

// Copiamos en arr y le añadimos "nana" con el spred operator

let arr2 = [...arr, "nana"];

// Con la función map recorremos todo el arr2 y le añadimos un valor

const arr3 = arr2.map((name) => {
  return name + ".mariano"
} );

console.log(arr)
console.log(arr2)
console.log(arr3)