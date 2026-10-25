const assert = require('node:assert/strict');
const Solution = require('./bestTimeToBuySellStock.js');

for (const method of ['bruteForce', 'onePass']) {
    assert.equal(Solution[method]([7, 1, 5, 3, 6, 4]), 5);
    assert.equal(Solution[method]([7, 6, 4, 3, 1]), 0);
    assert.equal(Solution[method]([]), 0);
    assert.equal(Solution[method]([5]), 0);
}

const prices = [7, 1, 5, 3, 6, 4];
Solution.onePass(prices);
assert.deepEqual(prices, [7, 1, 5, 3, 6, 4], 'prices should not be mutated');
console.log('All bestTimeToBuySellStock tests passed.');
