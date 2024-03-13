const firstName = 'Rajesh';
const age = 20;
const sayHi = () => {
  console.log('Hi');
};

/*
----------------------------------
Without enhanced object literals
----------------------------------
*/
// const person = {
//   firstName: firstName,
//   age: age,
//   sayHi: sayHi,
// };
// console.log(person);

/*
----------------------------------
With enhanced object literals
----------------------------------
*/
const person = {
  firstName,
  age,
  sayHi,
};
console.log(person);

/*
----------------------------------
Refactor 2
----------------------------------
*/
const propertyName = 'name';
const index = 1;

const anotherPerson = {
  [propertyName]: firstName,
  [`age-${index}`]: age,
  sayAnotherHi() {
    console.log('Another Hi');
  },
};
console.log(anotherPerson);
