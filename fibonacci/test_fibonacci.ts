import Solution from './fibonacci.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

function assertThrows(action: () => number, message: string): void {
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
    assertEqual(Solution[method](0), 0, `${method} should handle zero`);
    assertEqual(Solution[method](1), 1, `${method} should handle one`);
    assertEqual(Solution[method](10), 55, `${method} should calculate the tenth Fibonacci number`);
    assertThrows(() => Solution[method](-1), `${method} should reject negative input`);
    assertThrows(() => Solution[method](1.5), `${method} should reject non-integer input`);
}

assertEqual(Solution.memoization(40), 102334155, 'memoization should handle a larger input');
assertEqual(Solution.tabulation(40), 102334155, 'tabulation should handle a larger input');

console.log('All Fibonacci tests passed.');
