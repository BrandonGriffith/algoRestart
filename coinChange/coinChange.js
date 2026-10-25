function validateInput(coins, amount) {
    if (!Array.isArray(coins) || coins.some((coin) => !Number.isInteger(coin) || coin <= 0)) {
        throw new TypeError('coins must contain positive integers');
    }
    if (!Number.isInteger(amount) || amount < 0) {
        throw new RangeError('amount must be a non-negative integer');
    }
}

class Solution {
    memoization(coins, amount) {
        validateInput(coins, amount);
        const cache = new Map([[0, 0]]);

        const calculate = (remaining) => {
            if (remaining < 0) {
                return Infinity;
            }
            if (!cache.has(remaining)) {
                let minimum = Infinity;
                for (const coin of coins) {
                    minimum = Math.min(minimum, calculate(remaining - coin) + 1);
                }
                cache.set(remaining, minimum);
            }
            return cache.get(remaining);
        };

        const result = calculate(amount);
        return Number.isFinite(result) ? result : -1;
    }

    tabulation(coins, amount) {
        validateInput(coins, amount);
        const minimum = new Array(amount + 1).fill(Infinity);
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

module.exports = new Solution();
