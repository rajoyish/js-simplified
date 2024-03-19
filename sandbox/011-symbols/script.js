const sym1 = Symbol('Name');
const person = {
  age: 20,
  [sym1]: 'Rajesh',
};
console.log(person);
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value); // age is only visible
});
console.log(JSON.stringify(person)); // age is only visible

console.log(Object.getOwnPropertySymbols(person)); // symbol is visible

/*
----------------------------------
Symbols are always unique
----------------------------------
*/
const symTwo = Symbol('name');
const personTwo = {
  name: 'Rajesh',
  [symTwo]: 'Anu',
};
console.log(personTwo); // name property

/*
----------------------------------
Use case - Enums
----------------------------------
*/
const LOG_LEVEL = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARNING: Symbol('warning'),
  ERROR: Symbol('error'),
};

const logLevel = LOG_LEVEL.DEBUG;

if (logLevel === LOG_LEVEL.DEBUG) {
  console.log(logLevel);
}
