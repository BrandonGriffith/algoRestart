import Solution from './binarySearch.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

for (const method of ['iterative', 'recursive'] as const) {
    assertEqual(Solution[method]([-1, 0, 3, 5, 9, 12], 9), 4, `${method} should find a target`);
    assertEqual(Solution[method]([-1, 0, 3, 5, 9, 12], 2), -1, `${method} should report a miss`);
    assertEqual(Solution[method]([], 2), -1, `${method} should handle empty input`);
    assertEqual(Solution[method]([4], 4), 0, `${method} should handle one value`);
    if (![1, 2].includes(Solution[method]([1, 2, 2, 3], 2))) {
        throw new Error(`${method} should find one of the matching indices`);
    }
}

console.log('All binarySearch tests passed.');
