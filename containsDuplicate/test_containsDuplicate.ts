import Solution from './containsDuplicate.ts';

function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message);
    }
}

assert(Solution.bruteForce([1, 2, 3, 1]) === true, 'bruteForce failed for input [1, 2, 3, 1]');
assert(Solution.bruteForce([1, 2, 3, 4]) === false, 'bruteForce failed for input [1, 2, 3, 4]');
assert(Solution.sorting([1, 2, 3, 1]) === true, 'sorting failed for input [1, 2, 3, 1]');
assert(Solution.sorting([1, 2, 3, 4]) === false, 'sorting failed for input [1, 2, 3, 4]');
assert(Solution.hashing([1, 2, 3, 1]) === true, 'hashing failed for input [1, 2, 3, 1]');
assert(Solution.hashing([1, 2, 3, 4]) === false, 'hashing failed for input [1, 2, 3, 4]');

console.log('All containsDuplicate tests passed.');
