"""Tests for the anagram-checking strategies."""

import unittest
from valid_anagram import ValidAnagram


class TestValidAnagram(unittest.TestCase):
    """Verify anagram and non-anagram examples for each strategy."""

    def setUp(self):
        """Create an anagram checker for each test."""
        self.valid_anagram = ValidAnagram()

    def test_sorting_valid_anagram(self):
        """Accept anagrams using sorted character comparison."""
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.sorting(s, t))

    def test_sorting_invalid_anagram(self):
        """Reject non-anagrams using sorted character comparison."""
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.sorting(s, t))

    def test_one_hash_valid_anagram(self):
        """Accept anagrams using one character-count dictionary."""
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.one_hash(s, t))

    def test_one_hash_invalid_anagram(self):
        """Reject non-anagrams using one character-count dictionary."""
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.one_hash(s, t))

    def test_two_hash_valid_anagram(self):
        """Accept anagrams using two character-count dictionaries."""
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.two_hash(s, t))

    def test_two_hash_invalid_anagram(self):
        """Reject non-anagrams using two character-count dictionaries."""
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.two_hash(s, t))

    def test_one_array_valid_anagram(self):
        """Accept lowercase anagrams using a fixed-size counter."""
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.one_array(s, t))

    def test_one_array_invalid_anagram(self):
        """Reject lowercase non-anagrams using a fixed-size counter."""
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.one_array(s, t))

if __name__ == "__main__":
    unittest.main()
