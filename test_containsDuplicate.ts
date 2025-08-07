import Solution from './containsDuplicate.ts';

function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message);
    }
}

// Test bruteForce method
try {
    assert(Solution.bruteForce([1, 2, 3, 1]) === true, 'bruteForce failed for input [1, 2, 3, 1]');
    assert(Solution.bruteForce([1, 2, 3, 4]) === false, 'bruteForce failed for input [1, 2, 3, 4]');
    console.log('bruteForce tests passed.');
} catch (error) {
    console.error(error.message);
}

// Test sorting method
try {
    assert(Solution.sorting([1, 2, 3, 1]) === true, 'sorting failed for input [1, 2, 3, 1]');
    assert(Solution.sorting([1, 2, 3, 4]) === false, 'sorting failed for input [1, 2, 3, 4]');
    console.log('sorting tests passed.');
} catch (error) {
    console.error(error.message);
}

// Test hashing method
try {
    assert(Solution.hashing([1, 2, 3, 1]) === true, 'hashing failed for input [1, 2, 3, 1]');
    assert(Solution.hashing([1, 2, 3, 4]) === false, 'hashing failed for input [1, 2, 3, 4]');
    console.log('hashing tests passed.');
} catch (error) {
    console.error(error.message);
}
