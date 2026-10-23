const assert = require('node:assert/strict');
const Solution = require('./fibonacci.js');

for (const method of ['recursive', 'memoization', 'tabulation']) {
    assert.equal(Solution[method](0), 0);
    assert.equal(Solution[method](1), 1);
    assert.equal(Solution[method](10), 55);
    assert.throws(() => Solution[method](-1), RangeError);
    assert.throws(() => Solution[method](1.5), RangeError);
}

assert.equal(Solution.memoization(40), 102334155);
assert.equal(Solution.tabulation(40), 102334155);

console.log('All Fibonacci tests passed.');
