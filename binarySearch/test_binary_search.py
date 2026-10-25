"""Tests for iterative and recursive binary search."""

import unittest
from binary_search import Solution


class TestBinarySearch(unittest.TestCase):
    """Verify target lookup and boundary cases."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_search_methods(self):
        """Check hits, misses, empty input, and duplicates."""
        for method in (self.solution.iterative, self.solution.recursive):
            with self.subTest(method=method.__name__):
                self.assertEqual(method([-1, 0, 3, 5, 9, 12], 9), 4)
                self.assertEqual(method([-1, 0, 3, 5, 9, 12], 2), -1)
                self.assertEqual(method([], 2), -1)
                self.assertEqual(method([4], 4), 0)
                self.assertIn(method([1, 2, 2, 3], 2), (1, 2))


if __name__ == "__main__":
    unittest.main()
