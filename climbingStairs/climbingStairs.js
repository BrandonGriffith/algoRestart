function validateN(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('n must be a non-negative integer');
    }
}

class Solution {
    recursive(n) {
        validateN(n);
        if (n <= 1) {
            return 1;
        }
        return this.recursive(n - 1) + this.recursive(n - 2);
    }

    memoization(n) {
        validateN(n);
        const cache = new Map([[0, 1], [1, 1]]);

        const calculate = (steps) => {
            if (!cache.has(steps)) {
                cache.set(steps, calculate(steps - 1) + calculate(steps - 2));
            }
            return cache.get(steps);
        };

        return calculate(n);
    }

    tabulation(n) {
        validateN(n);
        if (n <= 1) {
            return 1;
        }

        let previous = 1;
        let current = 1;
        for (let steps = 2; steps <= n; steps++) {
            [previous, current] = [current, previous + current];
        }
        return current;
    }
}

module.exports = new Solution();
