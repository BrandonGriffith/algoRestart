const assert = require('node:assert/strict');
const Solution = require('./numberOfIslands.js');

assert.equal(Solution.numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
]), 3);
assert.equal(Solution.numIslands([]), 0);
assert.equal(Solution.numIslands([['0', '0'], ['0', '0']]), 0);
assert.equal(Solution.numIslands([['1']]), 1);

const grid = [['1', '1'], ['0', '1']];
const original = structuredClone(grid);
Solution.numIslands(grid);
assert.deepEqual(grid, original, 'grid should not be mutated');
console.log('All numberOfIslands tests passed.');
