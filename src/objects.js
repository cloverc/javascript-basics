export const createPerson = (name, age) => {
  // creates an object with the given name and age properties
  let person = {
    name: name,
    age: age
  };
  return (person);
};

export const getName = (object) => {
  return(object['name']);
};

export const getProperty = (property, object) => {
  return(object[property]);
};

export const hasProperty = (property, object) => {
  // checks whether object has given property
  return object.hasOwnProperty(property);
};

export const isOver65 = (person) => {
  // returns true if the person is aged over 65
  return person.age > 65
};

export const getAges = (people) => {
  // returns the ages of each person in the array
  return people.map(person => person.age);
};

export const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

export const findHondas = (cars) => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

export const averageAge = (people) => {
  // call function ^ up there to get ages
  const peopleAges = getAges(people);

  return peopleAges.reduce((total, age) => total + age) / people.length;
};

export const createTalkingPerson = (name, age) => {
  // returns a person who can introduce themselves
  return {
    name: name,
    age: age,
    introduce: function() {
      return 'Hi Fred, my name is ' + name + ' and I am ' + age + '!';
    }
  };
};
