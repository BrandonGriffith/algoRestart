import Solution from './coinChange.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

function assertThrows(action: () => number, isExpected: (error: unknown) => boolean, message: string): void {
    try {
        action();
    } catch (error) {
        if (isExpected(error)) {
            return;
        }
        throw error;
    }
    throw new Error(message);
}

for (const method of ['memoization', 'tabulation'] as const) {
    assertEqual(Solution[method]([1, 2, 5], 11), 3, `${method} should find the minimum count`);
    assertEqual(Solution[method]([2], 3), -1, `${method} should report unreachable amounts`);
    assertEqual(Solution[method]([2], 0), 0, `${method} should handle zero amount`);
    assertEqual(Solution[method]([], 5), -1, `${method} should handle no denominations`);
    assertThrows(() => Solution[method]([0, 1], 3), (error) => error instanceof TypeError, 'should reject invalid coins');
    assertThrows(() => Solution[method]([1], -1), (error) => error instanceof RangeError, 'should reject negative amounts');
}

const coins = [1, 2, 5];
Solution.tabulation(coins, 11);
if (coins.join(',') !== '1,2,5') {
    throw new Error('coin values should not be mutated');
}
console.log('All coinChange tests passed.');
