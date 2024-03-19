/*
----------------------------------
Old way
----------------------------------
*/
const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4;
if (!uniqueList.includes(newNumber)) {
  uniqueList.push(newNumber);
}
console.log(uniqueList);

/*
----------------------------------
Set
----------------------------------
*/
const setNewNumbers = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
setNewNumbers.add(4);
setNewNumbers.add(6);
console.log(setNewNumbers);

/*
----------------------------------
Retrieve values from the Set
----------------------------------
*/
console.log(setNewNumbers.has(4)); // true
setNewNumbers.forEach((value) => {
  console.log(value);
});

/*
----------------------------------
To delete the values from the set
----------------------------------
*/
setNewNumbers.delete(3);
// setNewNumbers.clear();
console.log(setNewNumbers);

/*
----------------------------------
Exercise
----------------------------------
*/
function removeDuplicate(array) {
  return [...new Set(array)]; // spreading out a brand new array
}
console.log(removeDuplicate([55, 44, 66, 66, 33, 22, 11, 55]));
