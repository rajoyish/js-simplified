function greet(firstName, lastName, salutation = 'Hi') {
  console.log(`${salutation} ${firstName} ${lastName}`);
}
greet('Rajesh', 'Budhathoki', 'Hey');

function greetTwo(
  firstName,
  lastName,
  salutation = 'Hi',
  fullname = `${firstName} ${lastName}`
) {
  console.log(`${salutation} ${firstName} ${lastName} ${fullname}`);
}
greetTwo('Rajesh', 'Budhathoki', 'Hey', 'Anu Ghimire');

function greetThree(
  firstName,
  lastName,
  { salutation = 'Hi', suffix: suffix = 'Mr' } = {}
) {
  console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}
greetThree('Abbott', 'Fadel');
