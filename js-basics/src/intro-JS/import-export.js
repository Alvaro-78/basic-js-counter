import{ Heroes } from '../data/Heroes';

console.table(Heroes);

// Buscamos Heroes por ID con el método find

 export const getHeroeById = (id) => Heroes.find((Heroe) => Heroe.id === id);

// console.log(getHeroeById(4));

// Buscamos la editorial de los Heroes con el método filter

const getHeroesByOwner = ( owner ) => Heroes.filter((Heroe) => Heroe.owner === owner);

// console.table(getHeroesByOwner('Marvel'))
