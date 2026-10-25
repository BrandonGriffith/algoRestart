"""Solutions for the minimum coin change problem."""


class Solution:
    """Find the fewest coins needed to make an amount."""

    @staticmethod
    def _validate_input(coins: list[int], amount: int) -> None:
        """Reject invalid coin values and amounts."""
        if not isinstance(coins, list) or any(
            isinstance(coin, bool) or not isinstance(coin, int) or coin <= 0
            for coin in coins
        ):
            raise TypeError("coins must be a list of positive integers")
        if isinstance(amount, bool) or not isinstance(amount, int):
            raise TypeError("amount must be an integer")
        if amount < 0:
            raise ValueError("amount must be non-negative")

    def memoization(self, coins: list[int], amount: int) -> int:
        """Find the minimum with top-down memoization."""
        self._validate_input(coins, amount)
        cache = {0: 0}

        def calculate(remaining: int) -> float | int:
            """Return the minimum coins for a remaining amount."""
            if remaining < 0:
                return float("inf")
            if remaining not in cache:
                cache[remaining] = min(
                    (calculate(remaining - coin) + 1 for coin in coins),
                    default=float("inf"),
                )
            return cache[remaining]

        result = calculate(amount)
        return result if result != float("inf") else -1

    def tabulation(self, coins: list[int], amount: int) -> int:
        """Find the minimum with bottom-up dynamic programming."""
        self._validate_input(coins, amount)
        minimum = [float("inf")] * (amount + 1)
        minimum[0] = 0

        for current in range(1, amount + 1):
            for coin in coins:
                if coin <= current:
                    minimum[current] = min(minimum[current], minimum[current - coin] + 1)

        return minimum[amount] if minimum[amount] != float("inf") else -1
