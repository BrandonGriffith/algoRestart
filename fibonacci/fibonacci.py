class Solution:
    def _validate_n(self, n: int) -> None:
        if isinstance(n, bool) or not isinstance(n, int):
            raise TypeError("n must be an integer")
        if n < 0:
            raise ValueError("n must be non-negative")

    def recursive(self, n: int) -> int:
        self._validate_n(n)
        if n <= 1:
            return n
        return self.recursive(n - 1) + self.recursive(n - 2)

    def memoization(self, n: int) -> int:
        self._validate_n(n)
        cache = {0: 0, 1: 1}

        def calculate(index: int) -> int:
            if index not in cache:
                cache[index] = calculate(index - 1) + calculate(index - 2)
            return cache[index]

        return calculate(n)

    def tabulation(self, n: int) -> int:
        self._validate_n(n)
        if n <= 1:
            return n

        previous, current = 0, 1
        for _ in range(2, n + 1):
            previous, current = current, previous + current
        return current
