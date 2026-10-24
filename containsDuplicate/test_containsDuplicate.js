const assert = require('node:assert/strict');
const Solution = require('./containsDuplicate');

assert.equal(Solution.bruteForce([1, 2, 3, 1]), true);
assert.equal(Solution.bruteForce([1, 2, 3, 4]), false);
assert.equal(Solution.sorting([1, 2, 3, 1]), true);
assert.equal(Solution.sorting([1, 2, 3, 4]), false);
assert.equal(Solution.hashing([1, 2, 3, 1]), true);
assert.equal(Solution.hashing([1, 2, 3, 4]), false);

console.log('All containsDuplicate tests passed.');