function validateN(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('n must be a non-negative integer');
    }
}

class Solution {
    recursive(n) {
        validateN(n);
        if (n <= 1) {
            return n;
        }
        return this.recursive(n - 1) + this.recursive(n - 2);
    }

    memoization(n) {
        validateN(n);
        const cache = new Map([[0, 0], [1, 1]]);

        const calculate = (index) => {
            if (cache.has(index)) {
                return cache.get(index);
            }
            const result = calculate(index - 1) + calculate(index - 2);
            cache.set(index, result);
            return result;
        };

        return calculate(n);
    }

    tabulation(n) {
        validateN(n);
        if (n <= 1) {
            return n;
        }

        let previous = 0;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            [previous, current] = [current, previous + current];
        }
        return current;
    }
}

module.exports = new Solution();
