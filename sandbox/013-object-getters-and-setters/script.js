const person = {
  firstName: 'Rajesh',
  lastName: 'Budhathoki',
  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullname());

/*
----------------------------------
Better way - using get
----------------------------------
*/
const personTwo = {
  firstName: 'Thelma',
  lastName: 'Trantow',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};
personTwo.fullName = 'Miss Horace';
console.log(personTwo.fullName);
console.log(personTwo);

/*
----------------------------------
Exercise
----------------------------------
*/
const personThree = {
  age: 25,
  get birthYear() {
    const date = new Date();
    return date.getFullYear() - this.age;
  },
};
console.log(personThree.birthYear);
