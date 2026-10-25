"""Tests for the climbing stairs solutions."""

import unittest
from climbing_stairs import Solution


class TestClimbingStairs(unittest.TestCase):
    """Verify stair counts and input validation."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_algorithms(self):
        """Check base cases and a representative result."""
        for method in (
            self.solution.recursive,
            self.solution.memoization,
            self.solution.tabulation,
        ):
            with self.subTest(method=method.__name__):
                self.assertEqual(method(0), 1)
                self.assertEqual(method(1), 1)
                self.assertEqual(method(5), 8)

    def test_larger_inputs(self):
        """Check the optimized approaches on a larger stair count."""
        self.assertEqual(self.solution.memoization(40), 165580141)
        self.assertEqual(self.solution.tabulation(40), 165580141)

    def test_invalid_inputs(self):
        """Reject negative, non-integer, and boolean stair counts."""
        for method in (
            self.solution.recursive,
            self.solution.memoization,
            self.solution.tabulation,
        ):
            with self.subTest(method=method.__name__):
                with self.assertRaises(ValueError):
                    method(-1)
                with self.assertRaises(TypeError):
                    method(1.5)
                with self.assertRaises(TypeError):
                    method(True)


if __name__ == "__main__":
    unittest.main()
