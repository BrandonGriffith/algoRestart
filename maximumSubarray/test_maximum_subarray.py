"""Tests for the maximum subarray solutions."""

import unittest
from maximum_subarray import Solution


class TestMaximumSubarray(unittest.TestCase):
    """Verify mixed, all-negative, and invalid inputs."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_algorithms(self):
        """Check the best contiguous sum in representative arrays."""
        for method in (self.solution.brute_force, self.solution.kadane):
            with self.subTest(method=method.__name__):
                self.assertEqual(method([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
                self.assertEqual(method([-3, -2, -5]), -2)
                self.assertEqual(method([5]), 5)
                with self.assertRaises(ValueError):
                    method([])


if __name__ == "__main__":
    unittest.main()
