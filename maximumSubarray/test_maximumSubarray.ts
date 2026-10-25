import Solution from './maximumSubarray.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

function assertRangeError(action: () => number, message: string): void {
    try {
        action();
    } catch (error) {
        if (error instanceof RangeError) {
            return;
        }
        throw error;
    }
    throw new Error(message);
}

for (const method of ['bruteForce', 'kadane'] as const) {
    assertEqual(Solution[method]([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6, `${method} should find the maximum`);
    assertEqual(Solution[method]([-3, -2, -5]), -2, `${method} should handle all-negative inputs`);
    assertEqual(Solution[method]([5]), 5, `${method} should handle one value`);
    assertRangeError(() => Solution[method]([]), `${method} should reject empty input`);
}

console.log('All maximumSubarray tests passed.');
