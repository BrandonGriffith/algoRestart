import Solution from './mergeIntervals.ts';

function assertEqual(actual: number[][], expected: number[][], message: string): void {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${message}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
    }
}

assertEqual(
    Solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]]),
    [[1, 6], [8, 10], [15, 18]],
    'should merge overlapping intervals',
);
assertEqual(Solution.merge([[1, 4], [4, 5]]), [[1, 5]], 'should merge touching intervals');
assertEqual(Solution.merge([[1, 10], [2, 3]]), [[1, 10]], 'should merge nested intervals');
assertEqual(Solution.merge([]), [], 'should handle empty input');

const intervals = [[5, 7], [1, 3]];
Solution.merge(intervals);
assertEqual(intervals, [[5, 7], [1, 3]], 'should not mutate input');
console.log('All mergeIntervals tests passed.');
