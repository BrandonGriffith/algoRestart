import unittest
from validAnagram import ValidAnagram

class TestValidAnagram(unittest.TestCase):
    def setUp(self):
        self.valid_anagram = ValidAnagram()

    def test_sorting_valid_anagram(self):
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.sorting(s, t))

    def test_sorting_invalid_anagram(self):
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.sorting(s, t))

    def test_oneHash_valid_anagram(self):
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.oneHash(s, t))

    def test_oneHash_invalid_anagram(self):
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.oneHash(s, t))

    def test_twoHash_valid_anagram(self):
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.twoHash(s, t))

    def test_twoHash_invalid_anagram(self):
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.twoHash(s, t))

    def test_oneArray_valid_anagram(self):
        s, t = "anagram", "nagaram"
        self.assertTrue(self.valid_anagram.oneArray(s, t))

    def test_oneArray_invalid_anagram(self):
        s, t = "rat", "car"
        self.assertFalse(self.valid_anagram.oneArray(s, t))

if __name__ == "__main__":
    unittest.main()
