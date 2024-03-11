const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];

// const first = names[0];
// const second = names[1];

const [first, second] = names; // same as the above two code
console.log(first, second);

const [alice, , charlie] = names; // skipping 'bob' with comma in destructuring
console.log(alice, charlie);

function addAndMultiply(a, b) {
  return [a + b, a * b];
}
const [sum, product] = addAndMultiply(5, 6);
console.log(sum, product);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    postalCode: '12345',
    country: 'United States of America',
  },
  hobbies: ['reading', 'gardening', 'hiking'],
  isStudent: false,
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

/*
----------------------------------
OBJECT DESTRUCTURING
----------------------------------
*/
// const personName = `${person.firstName} ${person.lastName}`;
// const age = person.age;
const { firstName: fname, lastName, age } = person;
// console.log(`${firstName} ${lastName}`, age);
console.log(fname, age);

// const { street } = address;
// console.log(street);

const {
  address: { street, city, state, country = 'Nepal' },
} = person;
console.log(street, city, state, country);

/*
----------------------------------
NESTED ARRAy DESTRUCTURING
----------------------------------
*/
const colors = ['red', 'purple', ['black', 'rose']];
const [red, purple, nestedColorsArray] = colors;
console.table(nestedColorsArray);

/*
----------------------------------
USECASESES
----------------------------------
*/
function addAndMultiply2(a, b) {
  return { total: a + b, multiply: a * b };
}
const { total, multiply } = addAndMultiply2(400, 100);
console.log(total, multiply);

function nameToFirstAndLast(fName) {
  return fName.split(' ');
}
const [FirstName, LastName] = nameToFirstAndLast('Ella Wyman');
console.log(FirstName, LastName);

function nameToFirstAndLast2(fullName) {
  const [fN, lN] = fullName.split(' ');
  return {
    fN: fN,
    lN: lN,
  };
}
const { fN, lN } = nameToFirstAndLast2('Steven Feil');
console.log(fN, lN);

function addAndMultiply3({ a, b }) {
  return [a + b, a * b];
}
const [sum3, product3] = addAndMultiply3({ a: 300, b: 700 });
console.log(sum3, product3);
