"""Tests for the pair-sum algorithms."""

import unittest
from two_sum import Solution


class TestTwoSum(unittest.TestCase):
    """Verify pair indices and no-solution behavior."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_brute_force(self):
        """Find a matching pair with the pairwise algorithm."""
        nums = [2, 7, 11, 15]
        target = 9
        self.assertEqual(self.solution.brute_force(nums, target), [0, 1])

    def test_brute_force_no_solution(self):
        """Return an empty list when no pair matches."""
        nums = [1, 2, 3]
        target = 6
        self.assertEqual(self.solution.brute_force(nums, target), [])

    def test_hash_map(self):
        """Find a matching pair with the hash-map algorithm."""
        nums = [2, 7, 11, 15]
        target = 9
        self.assertEqual(self.solution.hash_map(nums, target), [0, 1])

    def test_hash_map_no_solution(self):
        """Return an empty list when no pair matches."""
        nums = [1, 2, 3]
        target = 6
        self.assertEqual(self.solution.hash_map(nums, target), [])

if __name__ == "__main__":
    unittest.main()
