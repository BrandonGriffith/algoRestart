const assert = require('node:assert/strict');
const Solution = require('./climbingStairs.js');

for (const method of ['recursive', 'memoization', 'tabulation']) {
    assert.equal(Solution[method](0), 1);
    assert.equal(Solution[method](1), 1);
    assert.equal(Solution[method](5), 8);
    assert.throws(() => Solution[method](-1), RangeError);
    assert.throws(() => Solution[method](1.5), RangeError);
}

assert.equal(Solution.memoization(40), 165580141);
assert.equal(Solution.tabulation(40), 165580141);
console.log('All climbingStairs tests passed.');
