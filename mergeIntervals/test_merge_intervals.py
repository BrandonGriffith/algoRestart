"""Tests for interval merging."""

import unittest
from merge_intervals import Solution


class TestMergeIntervals(unittest.TestCase):
    """Verify overlap, adjacency, nesting, and input preservation."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_merge_cases(self):
        """Merge standard, touching, nested, and empty inputs."""
        self.assertEqual(
            self.solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]]),
            [[1, 6], [8, 10], [15, 18]],
        )
        self.assertEqual(self.solution.merge([[1, 4], [4, 5]]), [[1, 5]])
        self.assertEqual(self.solution.merge([[1, 10], [2, 3]]), [[1, 10]])
        self.assertEqual(self.solution.merge([]), [])

    def test_does_not_mutate_input(self):
        """Leave the caller's interval order and values unchanged."""
        intervals = [[5, 7], [1, 3]]
        self.solution.merge(intervals)
        self.assertEqual(intervals, [[5, 7], [1, 3]])


if __name__ == "__main__":
    unittest.main()
