const obj = {};

// Bad - calls .toString() on everything
const cloned1 = JSON.parse(JSON.stringify(obj));

// Bad - only one level deep
const cloned2 = { ...obj };

// Good - clones everything deeply
const cloned3 = structuredClone(obj);

//////

const originalObj = { a: 1, b: 2 };

const newObj = { ...originalObj };

newObj.b = 3;

console.log(originalObj); // { a: 1, b: 2 }

////////
const originalObj2 = { deep: { a: 1, b: 2 } };

const newObj2 = { ...originalObj2 };

newObj2.deep.b = 3;

console.log(originalObj); // { deep: { a: 1, b: 3 } }

////
const originalObj3 = { deep: { a: 1, b: 2 } };

const newObj3 = JSON.parse(JSON.stringify(originalObj3));

newObj3.deep.b = 3;

console.log(originalObj); // { deep: { a: 1, b: 2 } }

///////7

const originalObj4 = { date: new Date() };

const newObj4 = JSON.parse(JSON.stringify(originalObj4));

// "2024-09-08T00:00:00.000Z",
// or whatever time it is now
console.log(newObj4.date);

////const originalObj = {
const originalObj5 = {
  set: new Set([1, 2, 3]),
  map: new Map([
    ["a", 1],
    ["b", 2],
  ]),
};

const newObj5 = JSON.parse(JSON.stringify(originalObj5));

console.log(newObj5.set); // {}
console.log(newObj5.map); // {}

///////
const originalObj6 = {
  date: new Date(),
  set: new Set([1, 2, 3]),
  map: new Map([
    ["a", 1],
    ["b", 2],
  ]),
};

const newObj6 = structuredClone(originalObj6);

console.log(newObj6.date); // Date object
console.log(newObj6.set); // Set object
console.log(newObj6.map); // Map object

///
const originalObj7 = { deep: { a: 1, b: 2 } };

const newObj7 = structuredClone(originalObj7);

newObj7.deep.b = 3;

console.log(originalObj7); // { deep: { a: 1, b: 2 } }
