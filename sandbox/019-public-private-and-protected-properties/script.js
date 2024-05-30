console.log('Hello');
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

  /*
----------------------------------
private variable
----------------------------------
*/
  #cleaningProductsCount = 500;

  set cleaningProductsCount(value) {
    if (value > 100) {
      this.#cleaningProductsCount = value;
    }
  }

  clean() {
    console.log(
      `Cleaned with ${this.numberOfMops} mops and ${
        this.#cleaningProductsCount
      } cleaning products`
    );
  }
}

const janitor = new Janitor('Nicolas', 25);
janitor.cleaningProductsCount = 105;
console.log(janitor.clean());
