const assert = require('node:assert/strict');
const Solution = require('./maximumSubarray.js');

for (const method of ['bruteForce', 'kadane']) {
    assert.equal(Solution[method]([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    assert.equal(Solution[method]([-3, -2, -5]), -2);
    assert.equal(Solution[method]([5]), 5);
    assert.throws(() => Solution[method]([]), RangeError);
}

console.log('All maximumSubarray tests passed.');
