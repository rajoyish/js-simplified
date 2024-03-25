window.name = 'Global Name';

const person = {
  name: 'Rajesh',
};

function printName() {
  console.log(this.name);
}
printName.apply(person); // Rajesh
printName.call(person); // Rajesh

function sum(a, b) {
  return a + b;
}
console.log(sum.call(null, 2, 3)); // 5
console.log(sum.apply(null, [2, 3])); // 5
