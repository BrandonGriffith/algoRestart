import Solution from './numberOfIslands.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

assertEqual(Solution.numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
]), 3, 'should count separate islands');
assertEqual(Solution.numIslands([]), 0, 'should handle empty grid');
assertEqual(Solution.numIslands([['0', '0'], ['0', '0']]), 0, 'should handle water-only grid');
assertEqual(Solution.numIslands([['1']]), 1, 'should handle one land cell');

const grid = [['1', '1'], ['0', '1']];
const original = JSON.stringify(grid);
Solution.numIslands(grid);
if (JSON.stringify(grid) !== original) {
    throw new Error('grid should not be mutated');
}
console.log('All numberOfIslands tests passed.');
