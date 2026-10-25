function validateInput(coins: number[], amount: number): void {
    if (!Array.isArray(coins) || coins.some((coin) => !Number.isInteger(coin) || coin <= 0)) {
        throw new TypeError('coins must contain positive integers');
    }
    if (!Number.isInteger(amount) || amount < 0) {
        throw new RangeError('amount must be a non-negative integer');
    }
}

class Solution {
    memoization(coins: number[], amount: number): number {
        validateInput(coins, amount);
        const cache = new Map<number, number>([[0, 0]]);

        const calculate = (remaining: number): number => {
            if (remaining < 0) {
                return Infinity;
            }
            const cached = cache.get(remaining);
            if (cached !== undefined) {
                return cached;
            }
            let minimum = Infinity;
            for (const coin of coins) {
                minimum = Math.min(minimum, calculate(remaining - coin) + 1);
            }
            cache.set(remaining, minimum);
            return minimum;
        };

        const result = calculate(amount);
        return Number.isFinite(result) ? result : -1;
    }

    tabulation(coins: number[], amount: number): number {
        validateInput(coins, amount);
        const minimum = new Array<number>(amount + 1).fill(Infinity);
        minimum[0] = 0;

        for (let current = 1; current <= amount; current++) {
            for (const coin of coins) {
                if (coin <= current) {
                    minimum[current] = Math.min(minimum[current], minimum[current - coin] + 1);
                }
            }
        }

        return Number.isFinite(minimum[amount]) ? minimum[amount] : -1;
    }
}

export default new Solution();
