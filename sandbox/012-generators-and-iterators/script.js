function* simpleGenerator(params) {
  console.log('before 1');
  yield 1;
  console.log('after 1');
  console.log('before 2');
  yield 2;
  console.log('after 2');
  console.log('before 3');
  yield 3;
  console.log('after 3');
}
const generator = simpleGenerator();
generator.next();
generator.next();
generator.next();
generator.next();

/*
----------------------------------
Use Case
----------------------------------
*/
function* idGenerator() {
  let count = 1;

  while (true) {
    yield count++;
  }
}

const idGenCall = idGenerator();

console.log(idGenCall.next());
console.log(idGenCall.next());
console.log(idGenCall.next());
console.log(idGenCall.next());

function* idGeneratorTwo() {
  let count = 1;

  while (true) {
    const incrementor = yield count;
    if (incrementor != null) {
      count += incrementor;
    } else {
      count++;
    }
  }
}

const idGenCallTwo = idGeneratorTwo();
console.log('idGenCallTwo:', idGenCallTwo.next());
console.log('idGenCallTwo:', idGenCallTwo.next(10));
console.log('idGenCallTwo:', idGenCallTwo.next());
console.log('idGenCallTwo:', idGenCallTwo.return()); // early return
console.log('idGenCallTwo:', idGenCallTwo.next());
