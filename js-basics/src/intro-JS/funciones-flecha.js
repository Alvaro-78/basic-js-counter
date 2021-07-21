const greeting = ( name ) => {
    return `Hola ${ name }`
  };
  
  console.log(greeting( "pepe" ));
  
  
  const getUser = () => ({
   
      uuid: 'ACF1234',
      userName: "pepe"
  });
  
  
  const user = getUser();
  console.log(user);
  
  const getUserActive = (name) => ({
  
    uuid: "pepe9876",
    userName: "joan"
  
  });
  
  const userActive = getUserActive("Pepito");
  console.log(userActive);