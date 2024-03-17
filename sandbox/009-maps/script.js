const CURRENCY_MAP = {
  'United States': '$',
  India: '₹',
};
const currencyINR = CURRENCY_MAP['India'];
console.log(currencyINR);

const CURRENCIES = [
  { symbol: '$', country: 'United States' },
  { symbol: '₹', country: 'India' },
];
const currencyUSD = CURRENCIES.find(
  (c) => c.country === 'United States'
).symbol;
console.log(currencyUSD);

/*
----------------------------------
Better way -- map
----------------------------------
*/
const map = new Map([
  ['United States', '$'],
  ['India', '₹'],
  [{ NP: 1 }, 'रु'], // you can also put object or anything as key
]);
console.log(map);

const user = {
  name: 'Rajesh',
};
const mapTwo = new Map([[user, { age: 18 }]]);
console.log(mapTwo);

const mapThree = new Map([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
  [4, 'D'],
  [5, 'E'],
]);
mapThree.forEach((value, key) => {
  console.log(value, key);
});
console.log(mapThree.size); // 5
console.log(mapThree.get(1)); // A
mapThree.set(6, 'F');
console.log(mapThree.has(2)); // true
mapThree.delete(3);

console.log(mapThree);

const items = new Map([
  [1, { id: 1, name: 'Test 1', desc: 'Desc 1' }],
  [2, { id: 2, name: 'Test 2', desc: 'Desc 2' }],
  [3, { id: 3, name: 'Test 3', desc: 'Desc 3' }],
]);

function getItem(id) {
  return items.get(id);
}

items.set(4, { id: 4, name: 'Test 4', desc: 'Desc 4' });
console.log(getItem(1));
console.log(items);
