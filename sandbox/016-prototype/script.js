function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(this.name);
  };
}

const person = new Person('Klein, Tillman and Howell', 33);
console.log(person);
console.log(Object.getPrototypeOf(person));
person.printName();

/*
----------------------------------
Alternative
----------------------------------
*/
function PersonTwo(name, age) {
  this.name = name;
  this.age = age;
}

PersonTwo.prototype.printName = function () {
  console.log(this.name);
};

PersonTwo.printHi = function () {
  console.log('hi');
};

PersonTwo.goodName = 'Cassin - Weimann';
console.log(PersonTwo.goodName);
