"""Tests for the Fibonacci implementations."""

import unittest
from fibonacci import Solution


class TestFibonacci(unittest.TestCase):
    """Verify Fibonacci outputs and input validation."""

    def setUp(self):
        """Create the solution instance used by each test."""
        self.solution = Solution()

    def test_recursive(self):
        """Check representative results from the recursive implementation."""
        self.assertEqual(self.solution.recursive(0), 0)
        self.assertEqual(self.solution.recursive(1), 1)
        self.assertEqual(self.solution.recursive(10), 55)

    def test_memoization(self):
        """Check representative results from the memoized implementation."""
        self.assertEqual(self.solution.memoization(0), 0)
        self.assertEqual(self.solution.memoization(1), 1)
        self.assertEqual(self.solution.memoization(10), 55)
        self.assertEqual(self.solution.memoization(40), 102334155)

    def test_tabulation(self):
        """Check representative results from the iterative implementation."""
        self.assertEqual(self.solution.tabulation(0), 0)
        self.assertEqual(self.solution.tabulation(1), 1)
        self.assertEqual(self.solution.tabulation(10), 55)
        self.assertEqual(self.solution.tabulation(40), 102334155)

    def test_negative_input(self):
        """Check that each implementation rejects negative indices."""
        methods = (
            self.solution.recursive,
            self.solution.memoization,
            self.solution.tabulation,
        )
        for method in methods:
            with self.subTest(method=method.__name__):
                with self.assertRaises(ValueError):
                    method(-1)

    def test_non_integer_input(self):
        """Check that each implementation rejects non-integer indices."""
        methods = (
            self.solution.recursive,
            self.solution.memoization,
            self.solution.tabulation,
        )
        for method in methods:
            with self.subTest(method=method.__name__):
                with self.assertRaises(TypeError):
                    method(1.5)


if __name__ == "__main__":
    unittest.main()
