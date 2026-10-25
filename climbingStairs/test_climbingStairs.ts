import Solution from './climbingStairs.ts';

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

for (const method of ['recursive', 'memoization', 'tabulation'] as const) {
    assertEqual(Solution[method](0), 1, `${method} should handle zero`);
    assertEqual(Solution[method](1), 1, `${method} should handle one`);
    assertEqual(Solution[method](5), 8, `${method} should count five stairs`);
    assertRangeError(() => Solution[method](-1), `${method} should reject negative input`);
    assertRangeError(() => Solution[method](1.5), `${method} should reject non-integer input`);
}

assertEqual(Solution.memoization(40), 165580141, 'memoization should handle a larger input');
assertEqual(Solution.tabulation(40), 165580141, 'tabulation should handle a larger input');
console.log('All climbingStairs tests passed.');
