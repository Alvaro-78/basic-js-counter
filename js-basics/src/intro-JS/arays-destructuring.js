const characters = ["Goku", "Vegeta", "Trunks"];

const [ p1, p2, p3 ] = characters;

console.log(p3);

const returnArr = () => {
  return ['ABC', 123];
}

const [ words, numbers ] = returnArr();
console.log(words, numbers)