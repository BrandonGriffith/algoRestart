const assert = require('node:assert/strict');
const Solution = require('./productOfArrayExceptSelf.js');

assert.deepEqual(Solution.prefixSuffix([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepEqual(Solution.prefixSuffix([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
assert.deepEqual(Solution.prefixSuffix([]), []);

const nums = [1, 2, 3, 4];
Solution.prefixSuffix(nums);
assert.deepEqual(nums, [1, 2, 3, 4], 'input should not be mutated');
console.log('All productOfArrayExceptSelf tests passed.');
