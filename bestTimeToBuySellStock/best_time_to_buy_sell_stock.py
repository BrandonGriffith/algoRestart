"""Solutions for the one-transaction stock profit problem."""


class Solution:
    """Find the greatest profit from one buy and one later sale."""

    def brute_force(self, prices: list[int]) -> int:
        """Check all valid buy and sell pairs."""
        best_profit = 0
        for buy_day, buy_price in enumerate(prices):
            for sell_price in prices[buy_day + 1:]:
                best_profit = max(best_profit, sell_price - buy_price)
        return best_profit

    def one_pass(self, prices: list[int]) -> int:
        """Track the lowest price and best profit in one pass."""
        minimum_price = float("inf")
        best_profit = 0
        for price in prices:
            minimum_price = min(minimum_price, price)
            best_profit = max(best_profit, price - minimum_price)
        return best_profit
