"""Tests for the duplicate-detection algorithms."""

import unittest
from contains_duplicate import Solution


class TestSolution(unittest.TestCase):
    """Verify duplicate detection for all three strategies."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_brute_force_with_duplicates(self):
        """Find a duplicate with the pairwise algorithm."""
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.brute_force(nums))

    def test_brute_force_without_duplicates(self):
        """Return false when the pairwise algorithm finds no duplicate."""
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.brute_force(nums))

    def test_brute_force_empty_list(self):
        """Handle an empty list with the pairwise algorithm."""
        nums = []
        self.assertFalse(self.solution.brute_force(nums))

    def test_brute_force_single_element(self):
        """Handle a single value with the pairwise algorithm."""
        nums = [1]
        self.assertFalse(self.solution.brute_force(nums))

    def test_sorting_with_duplicates(self):
        """Find a duplicate with the sorting algorithm."""
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.sorting(nums))

    def test_sorting_without_duplicates(self):
        """Return false when the sorting algorithm finds no duplicate."""
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.sorting(nums))

    def test_sorting_empty_list(self):
        """Handle an empty list with the sorting algorithm."""
        nums = []
        self.assertFalse(self.solution.sorting(nums))

    def test_sorting_single_element(self):
        """Handle a single value with the sorting algorithm."""
        nums = [1]
        self.assertFalse(self.solution.sorting(nums))

    def test_hashing_with_duplicates(self):
        """Find a duplicate with the set-based algorithm."""
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.hashing(nums))

    def test_hashing_without_duplicates(self):
        """Return false when the set-based algorithm finds no duplicate."""
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.hashing(nums))

    def test_hashing_empty_list(self):
        """Handle an empty list with the set-based algorithm."""
        nums = []
        self.assertFalse(self.solution.hashing(nums))

    def test_hashing_single_element(self):
        """Handle a single value with the set-based algorithm."""
        nums = [1]
        self.assertFalse(self.solution.hashing(nums))


if __name__ == "__main__":
    unittest.main()
