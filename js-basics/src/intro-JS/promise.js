import { getHeroeById } from './intro-JS/import-export'

// const promise = new Promise( (res, rej) => {
//   setTimeout( () => {
//     const heroe = getHeroeById(2);
//     console.table(heroe);
//     // res();
//     rej('No se pudo encontrar al héroe')
//   }, 2000 )
// } );

// promise.then( Heroe => {
//   console.table('Heroe', Heroe)
// })
// .catch( err => console.warn( err ))

const getHeroeByIdAsync = ( id ) => {

  return new Promise( (res, rej) => {

    setTimeout( () => {
      const heroe = getHeroeById( id );
      if( heroe) {

        res( heroe );
      } else {

        rej('No se pudo encontrar al héroe')
      }
      console.table(heroe);
    }, 2000 )
  } );
}

getHeroeByIdAsync(2)
.then( heroe => console.table)
.catch( err => console.warn( err ))