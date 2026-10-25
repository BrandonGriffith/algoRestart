const assert = require('node:assert/strict');
const Solution = require('./binarySearch.js');

for (const method of ['iterative', 'recursive']) {
    assert.equal(Solution[method]([-1, 0, 3, 5, 9, 12], 9), 4);
    assert.equal(Solution[method]([-1, 0, 3, 5, 9, 12], 2), -1);
    assert.equal(Solution[method]([], 2), -1);
    assert.equal(Solution[method]([4], 4), 0);
    const duplicateIndex = Solution[method]([1, 2, 2, 3], 2);
    assert.ok([1, 2].includes(duplicateIndex));
}

console.log('All binarySearch tests passed.');
