"""Tests for counting islands."""

import unittest
from number_of_islands import Solution


class TestNumberOfIslands(unittest.TestCase):
    """Verify connected components and input preservation."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_island_counts(self):
        """Check multiple islands, water-only, empty, and one-cell grids."""
        grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ]
        self.assertEqual(self.solution.num_islands(grid), 3)
        self.assertEqual(self.solution.num_islands([]), 0)
        self.assertEqual(self.solution.num_islands([["0", "0"], ["0", "0"]]), 0)
        self.assertEqual(self.solution.num_islands([["1"]]), 1)

    def test_does_not_mutate_grid(self):
        """Leave the caller's grid unchanged."""
        grid = [["1", "1"], ["0", "1"]]
        original = [row[:] for row in grid]
        self.solution.num_islands(grid)
        self.assertEqual(grid, original)


if __name__ == "__main__":
    unittest.main()
