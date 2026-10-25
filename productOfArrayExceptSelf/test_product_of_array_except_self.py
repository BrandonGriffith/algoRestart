"""Tests for the prefix/suffix product solution."""

import unittest
from product_of_array_except_self import Solution


class TestProductOfArrayExceptSelf(unittest.TestCase):
    """Verify products, zero handling, and input preservation."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_products(self):
        """Check standard, zero, and empty-array cases."""
        self.assertEqual(self.solution.prefix_suffix([1, 2, 3, 4]), [24, 12, 8, 6])
        self.assertEqual(self.solution.prefix_suffix([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])
        self.assertEqual(self.solution.prefix_suffix([]), [])

    def test_does_not_mutate_input(self):
        """Leave the caller's array unchanged."""
        nums = [1, 2, 3, 4]
        self.solution.prefix_suffix(nums)
        self.assertEqual(nums, [1, 2, 3, 4])


if __name__ == "__main__":
    unittest.main()
