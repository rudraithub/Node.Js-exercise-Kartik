// const assert = require("assert");
// function add(a, b) {
//   return a + b;
// }
// assert.equal(add(2, 3), 5, "Adding 2 and 3 should equal 5");
// assert.strictEqual(add(2, 3), 5, "Adding 2 and 3 should strictly equal 5");
// assert.deepEqual([1, 2, 3], [1, 2, 3], "Arrays should be deeply equal");

//assert.deepEqual()
// const obj1 = {
//   a: {
//     b: 1,
//   },
// };
// const obj2 = {
//   a: {
//     b: 2,
//   },
// };
// const obj3 = {
//   a: {
//     b: 1,
//   },
// };
// const obj4 = { __proto__: obj1 };

// assert.notDeepEqual(obj1, obj1);
// assert.notDeepEqual(obj1, obj2);
// assert.notDeepEqual(obj1, obj3);
// assert.notDeepEqual(obj1, obj4);

const v8 = require("v8");
// console.log(v8.getHeapStatistics());
console.log(v8.getHeapSpaceStatistics());
