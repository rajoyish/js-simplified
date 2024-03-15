const person = {
  firstName: 'John',
  lastName: 'Doe',
  // address: {
  //   street: '123 Main Street',
  //   city: 'Anytown',
  //   state: 'CA',
  //   postalCode: '12345',
  // },
  // sayHello: () => {
  //   console.log('Hello!');
  // },
  // hobbies: ['reading', 'coding', 'watching movies'],
};

/*
----------------------------------
This gives 'Uncaught TypeError'
----------------------------------
*/
// console.log(person.address.street);

/*
----------------------------------
To fix this. Try uncomment the address object of the person
----------------------------------
*/
console.log(person?.address?.street);

/*
----------------------------------
Optional chaining in function
----------------------------------
*/
function callSayHello(params) {
  person?.sayHello?.();
}
callSayHello();

/*
----------------------------------
Optional chaining in array
----------------------------------
*/
console.log(person?.hobbies?.[1]);
