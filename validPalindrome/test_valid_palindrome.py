"""Tests for the ASCII valid palindrome solution."""

import unittest
from valid_palindrome import Solution


class TestValidPalindrome(unittest.TestCase):
    """Verify filtering, case handling, and palindrome results."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_examples_and_boundaries(self):
        """Check canonical examples and inputs with no ASCII alphanumerics."""
        self.assertTrue(self.solution.two_pointers("A man, a plan, a canal: Panama"))
        self.assertFalse(self.solution.two_pointers("race a car"))
        self.assertTrue(self.solution.two_pointers(" "))
        self.assertTrue(self.solution.two_pointers(".,!"))
        self.assertTrue(self.solution.two_pointers("É"))


if __name__ == "__main__":
    unittest.main()
