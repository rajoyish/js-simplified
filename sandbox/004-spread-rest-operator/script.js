/*
----------------------------------
REST OPERATOR

The rest and spread operators (...) in JavaScript may look similar, but they serve different purposes.
Rest: Used in function parameters to collect all remaining arguments into an array.
Spread: Used to expand elements of an iterable (like an array) into individual elements.
----------------------------------
*/
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5, 5, 7, 8)); // 35

function sumThree(multiplier, ...numbers) {
  return multiplier * numbers.reduce((total, number) => total + number, 0);
}
console.log(sumThree(1000, 2, 3)); // 5000

function sumThree(multiplier, ...numbers) {
  console.log(multiplier, numbers);
  return multiplier * numbers.reduce((total, number) => total + number, 0);
}
sumThree(1000, 2, 3);

/*
----------------------------------
SPREAD OPERATOR
----------------------------------
*/
const numberArray = [200, 3, 4];
console.log(sumThree(...numberArray)); // 1400

function concatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const names = ['Carroll', 'McCullough'];
console.log(concatName(...names)); // Carroll McCullough

/*
----------------------------------
Copy an array using spread operator
----------------------------------
*/
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
const newColors = [...colors];
newColors.push('Rajesh');
console.log(colors, newColors);

/*
----------------------------------
Converting NodeList to array
----------------------------------
*/
const divs = [...document.querySelectorAll('div')];
divs.map((div) => {
  console.log(div);
});

/*
----------------------------------
REFRESHING ALL THE ELEMENTS IN THE ARRAY
----------------------------------
*/
const countries = [
  'United States',
  'Canada',
  'Brazil',
  'India',
  'China',
  'Australia',
  'France',
  'Germany',
  'Japan',
  'South Africa',
];
const [firstCountry, secondCountry, ...rest] = countries;
console.log(firstCountry, secondCountry, rest);

/*
----------------------------------
REFRESHING ALL THE ELEMENTS IN THE OBJECT
----------------------------------
*/
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
  },
  hobbies: ['reading', 'gardening', 'hiking'],
  isStudent: false,
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

const { firstName, lastName, ...restProps } = person;
console.log(firstName, lastName, restProps);

/*
----------------------------------
cloning a object
----------------------------------
*/
const workDetails = {
  companyName: 'Hues & Arrays',
  position: 'CEO',
};
const personName = {
  firstName: 'Rajesh',
  lastName: 'Budhathoki',
};
// THIS IS DIFFERENT PERSON WHICH EXTENDS THE PERSON OBJECT
const anotherPerson = { ...person, ...personName, ...workDetails, friend: 'Anu Ghimire' };
console.log(anotherPerson);
