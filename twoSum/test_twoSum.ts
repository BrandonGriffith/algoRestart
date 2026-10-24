import SolutionTS from './twoSum.ts';

const solution = SolutionTS;

function assertEqual(actual: number[], expected: number[], message: string): void {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(message);
    }
}

assertEqual(solution.bruteForce([2, 7, 11, 15], 9), [0, 1], 'bruteForce should find matching indices');
assertEqual(solution.bruteForce([1, 2, 3], 6), [], 'bruteForce should return an empty array when no pair exists');
assertEqual(solution.hashMap([2, 7, 11, 15], 9), [0, 1], 'hashMap should find matching indices');
assertEqual(solution.hashMap([1, 2, 3], 6), [], 'hashMap should return an empty array when no pair exists');

console.log('All twoSum tests passed.');