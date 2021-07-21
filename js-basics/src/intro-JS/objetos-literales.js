const persona = {
  
    nombre: "pepe",
    apellido: "grillo",
    edad: 40,
    direccion: {
      calle:" penó de la conquesta",
      zip: 46920,
      lat: 19.4567,
      lng: 34.5678
    }
}
  
  // Cuidado Mutación de las propiedades
  
  // const persona2 = persona;
  // persona2.nombre = "peter"
  
  console.table(persona);
  // console.table(persona2)
  
  // Clonado del objeto con el spred operator
  
  const persona2 = { ...persona };
  persona2.nombre = "bastet"
  
  console.table(persona2)
  