window.name = 'Global Name';

const person = {
  name: 'Rajesh',
};

function printName() {
  console.log(this.name);
}
const newPrintName = printName.bind();
newPrintName(); // Global Name

/*
----------------------------------
Binding specific object
----------------------------------
*/
const newPrintNameTwo = printName.bind(person); // redefining 'this' keyword
newPrintNameTwo(); // Rajesh

/*
----------------------------------
binding function parameters
----------------------------------
*/
function sum(a, b) {
  return a + b;
}

const sumTwoAndThree = sum.bind(null, 2, 3);
console.log(sumTwoAndThree());

/*
----------------------------------
Use case
----------------------------------
*/
function product(a, b) {
  return a * b;
}

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => {
  return product(2, number);
});
console.log('newNumbers:', newNumbers);

/*
----------------------------------
Better way using bind
----------------------------------
*/
const newNumbersTwo = numbers.map(product.bind(null, 2));
console.log('newNumbersTwo:', newNumbersTwo);
