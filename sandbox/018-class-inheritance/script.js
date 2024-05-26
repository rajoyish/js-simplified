class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`I am ${this.name}`);
  }
}

/*
----------------------------------
Inheritance
----------------------------------
*/
class Dog extends Animal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }

  speak() {
    console.log('Bark!');
  }
}

const dog = new Dog('Puppy', 'Rajesh');
console.log(dog);
dog.speak();

/*
----------------------------------
Exorcise
----------------------------------
*/
class Cat extends Animal {
  speak() {
    console.log('Meow!');
  }
}

const cat = new Cat('Birman');
cat.speak();

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, numberOfMops) {
    super(name);
    this.numberOfMops = numberOfMops;
  }

  clean() {
    console.log(`Cleaned with ${this.numberOfMops} mops`);
  }
}

const janitor = new Janitor('Nicolas', 25);
console.log(janitor);
janitor.clean();
