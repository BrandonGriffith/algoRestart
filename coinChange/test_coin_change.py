"""Tests for the minimum coin change solutions."""

import unittest
from coin_change import Solution


class TestCoinChange(unittest.TestCase):
    """Verify minimum counts, unreachable amounts, and input validation."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_algorithms(self):
        """Check ordinary, empty, and unreachable amounts."""
        for method in (self.solution.memoization, self.solution.tabulation):
            with self.subTest(method=method.__name__):
                self.assertEqual(method([1, 2, 5], 11), 3)
                self.assertEqual(method([2], 3), -1)
                self.assertEqual(method([2], 0), 0)
                self.assertEqual(method([], 5), -1)

    def test_invalid_inputs(self):
        """Reject invalid coin values and amounts."""
        for method in (self.solution.memoization, self.solution.tabulation):
            with self.subTest(method=method.__name__):
                with self.assertRaises(TypeError):
                    method([0, 1], 3)
                with self.assertRaises(TypeError):
                    method([1], True)
                with self.assertRaises(ValueError):
                    method([1], -1)

    def test_does_not_mutate_coins(self):
        """Leave the caller's coin list unchanged."""
        coins = [1, 2, 5]
        self.solution.tabulation(coins, 11)
        self.assertEqual(coins, [1, 2, 5])


if __name__ == "__main__":
    unittest.main()
