# pylint: disable=duplicate-code
"""Solutions for the climbing stairs problem."""


class Solution:
    """Count ways to reach a stair using one- or two-step moves."""

    @staticmethod
    def _validate_n(n: int) -> None:
        """Reject inputs that are not non-negative integers."""
        if isinstance(n, bool) or not isinstance(n, int):
            raise TypeError("n must be an integer")
        if n < 0:
            raise ValueError("n must be non-negative")

    def recursive(self, n: int) -> int:
        """Count ways with the direct recurrence."""
        self._validate_n(n)
        if n <= 1:
            return 1
        return self.recursive(n - 1) + self.recursive(n - 2)

    def memoization(self, n: int) -> int:
        """Count ways with top-down memoization."""
        self._validate_n(n)
        cache = {0: 1, 1: 1}

        def calculate(steps: int) -> int:
            """Calculate and cache ways for a stair count."""
            if steps not in cache:
                cache[steps] = calculate(steps - 1) + calculate(steps - 2)
            return cache[steps]

        return calculate(n)

    def tabulation(self, n: int) -> int:
        """Count ways with constant-space iteration."""
        self._validate_n(n)
        if n <= 1:
            return 1

        previous, current = 1, 1
        for _ in range(2, n + 1):
            previous, current = current, previous + current
        return current
