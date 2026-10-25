import Solution from './bestTimeToBuySellStock.ts';

function assertEqual(actual: number, expected: number, message: string): void {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, received ${actual}`);
    }
}

for (const method of ['bruteForce', 'onePass'] as const) {
    assertEqual(Solution[method]([7, 1, 5, 3, 6, 4]), 5, `${method} should find the best profit`);
    assertEqual(Solution[method]([7, 6, 4, 3, 1]), 0, `${method} should allow no transaction`);
    assertEqual(Solution[method]([]), 0, `${method} should handle empty input`);
    assertEqual(Solution[method]([5]), 0, `${method} should handle one price`);
}

const prices = [7, 1, 5, 3, 6, 4];
Solution.onePass(prices);
if (prices.join(',') !== '7,1,5,3,6,4') {
    throw new Error('prices should not be mutated');
}
console.log('All bestTimeToBuySellStock tests passed.');
