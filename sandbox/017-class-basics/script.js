class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    console.log(this.name);
  }
}

Person.printHi = function () {
  console.log(`Hi!`);
};

Person.company = 'Oberbrunner, Herzog and Haley';

const person = new Person('Gislason, Stark and Keeling', '33');
console.log(person);
person.printName();
Person.printHi();
console.log(Person.company);

/*
----------------------------------
Static
----------------------------------
*/
class Company {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  static zipCode = '46704';
  static printHi() {
    console.log('Hi');
  }
}

const company = new Company(' Mueller Inc', '96378 Kris Circle');
console.log(company);
Company.printHi();

/*
----------------------------------
practice
----------------------------------
*/
class User {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }

  printPassword() {
    console.log(this.password);
  }
}

const user = new User('Queenie73@hotmail.com', '3Y247gIjwQpJEH4', 'English');
console.log(user);
user.printPassword();

/*
----------------------------------
getters & setters
----------------------------------
*/
class PersonTwo {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }

  get name() {
    return this.email.split('@')[0];
  }

  set name(value) {
    const [, suffix] = this.email.split('@');
    this.email = value + '@' + suffix;
  }

  printPassword() {
    console.log(this.password);
  }
}

const personTwo = new PersonTwo(
  'Leonel_Witting@yahoo.com',
  '0B52Ptjs_mYcIZ1',
  'Nepali'
);
personTwo.name = 'rajesh';
console.log(personTwo);
