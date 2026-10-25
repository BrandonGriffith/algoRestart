const assert = require('node:assert/strict');
const Solution = require('./mergeIntervals.js');

assert.deepEqual(
    Solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]]),
    [[1, 6], [8, 10], [15, 18]],
);
assert.deepEqual(Solution.merge([[1, 4], [4, 5]]), [[1, 5]], 'touching intervals should merge');
assert.deepEqual(Solution.merge([[1, 10], [2, 3]]), [[1, 10]], 'nested intervals should merge');
assert.deepEqual(Solution.merge([]), []);

const intervals = [[5, 7], [1, 3]];
Solution.merge(intervals);
assert.deepEqual(intervals, [[5, 7], [1, 3]], 'input should not be mutated');
console.log('All mergeIntervals tests passed.');
