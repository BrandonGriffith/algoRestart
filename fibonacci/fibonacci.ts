function validateN(n: number): void {
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('n must be a non-negative integer');
    }
}

class Solution {
    recursive(n: number): number {
        validateN(n);
        if (n <= 1) {
            return n;
        }
        return this.recursive(n - 1) + this.recursive(n - 2);
    }

    memoization(n: number): number {
        validateN(n);
        const cache = new Map<number, number>([[0, 0], [1, 1]]);

        const calculate = (index: number): number => {
            const cached = cache.get(index);
            if (cached !== undefined) {
                return cached;
            }
            const result = calculate(index - 1) + calculate(index - 2);
            cache.set(index, result);
            return result;
        };

        return calculate(n);
    }

    tabulation(n: number): number {
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

export default new Solution();
