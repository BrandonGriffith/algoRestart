import Solution from './productOfArrayExceptSelf.ts';

function assertEqual(actual: number[], expected: number[], message: string): void {
    if (actual.join(',') !== expected.join(',')) {
        throw new Error(`${message}: expected [${expected}], received [${actual}]`);
    }
}

assertEqual(Solution.prefixSuffix([1, 2, 3, 4]), [24, 12, 8, 6], 'should compute each product');
assertEqual(Solution.prefixSuffix([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0], 'should handle zeros');
assertEqual(Solution.prefixSuffix([]), [], 'should handle empty input');

const nums = [1, 2, 3, 4];
Solution.prefixSuffix(nums);
assertEqual(nums, [1, 2, 3, 4], 'should not mutate input');
console.log('All productOfArrayExceptSelf tests passed.');
