const person = {
    
    namePerson: 'John',
    age: 34,
    job: 'plumber'
  };
  
  const { namePerson,age } = person;
  
  
  console.log( namePerson, age );
  
  // Asignamos un valor dado en person a getPerson
  
  const getPerson =  ({ namePerson, age, job }) => {
  
    return {
      nameSecret: job,
      age2: age
    }
  };
  
  const { nameSecret, age2 } = getPerson( person );
  console.log(nameSecret, age2)