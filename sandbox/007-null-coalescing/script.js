function greet(firstName = 'Rajesh', lastName) {
  lastName = lastName ?? 'Budhathoki';
  console.log(`${firstName} ${lastName}`);
}
greet('Rajesh', null);
