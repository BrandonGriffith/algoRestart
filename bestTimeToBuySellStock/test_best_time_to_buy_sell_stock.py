"""Tests for the one-transaction stock profit solutions."""

import unittest
from best_time_to_buy_sell_stock import Solution


class TestBestTimeToBuySellStock(unittest.TestCase):
    """Verify profits for rising and falling price sequences."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_algorithms(self):
        """Check profit, no-profit, and minimal-input cases."""
        for method in (self.solution.brute_force, self.solution.one_pass):
            with self.subTest(method=method.__name__):
                self.assertEqual(method([7, 1, 5, 3, 6, 4]), 5)
                self.assertEqual(method([7, 6, 4, 3, 1]), 0)
                self.assertEqual(method([]), 0)
                self.assertEqual(method([5]), 0)

    def test_does_not_mutate_prices(self):
        """Leave the caller's prices unchanged."""
        prices = [7, 1, 5, 3, 6, 4]
        self.solution.one_pass(prices)
        self.assertEqual(prices, [7, 1, 5, 3, 6, 4])


if __name__ == "__main__":
    unittest.main()
