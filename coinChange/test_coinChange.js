const assert = require('node:assert/strict');
const Solution = require('./coinChange.js');

for (const method of ['memoization', 'tabulation']) {
    assert.equal(Solution[method]([1, 2, 5], 11), 3);
    assert.equal(Solution[method]([2], 3), -1);
    assert.equal(Solution[method]([2], 0), 0);
    assert.equal(Solution[method]([], 5), -1);
    assert.throws(() => Solution[method]([0, 1], 3), TypeError);
    assert.throws(() => Solution[method]([1], -1), RangeError);
}

const coins = [1, 2, 5];
Solution.tabulation(coins, 11);
assert.deepEqual(coins, [1, 2, 5], 'coin values should not be mutated');
console.log('All coinChange tests passed.');
