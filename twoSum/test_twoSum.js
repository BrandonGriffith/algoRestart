const assert = require('node:assert/strict');
const Solution = require('./twoSum.js');

assert.deepEqual(Solution.bruteForce([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(Solution.bruteForce([1, 2, 3], 6), []);
assert.deepEqual(Solution.hashMap([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(Solution.hashMap([1, 2, 3], 6), []);

console.log('All twoSum tests passed.');