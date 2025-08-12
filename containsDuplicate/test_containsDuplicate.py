import unittest
from containsDuplicate import Solution

class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_bruteForce_with_duplicates(self):
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.bruteForce(nums))

    def test_bruteForce_without_duplicates(self):
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.bruteForce(nums))

    def test_bruteForce_empty_list(self):
        nums = []
        self.assertFalse(self.solution.bruteForce(nums))

    def test_bruteForce_single_element(self):
        nums = [1]
        self.assertFalse(self.solution.bruteForce(nums))

    def test_sorting_with_duplicates(self):
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.sorting(nums))

    def test_sorting_without_duplicates(self):
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.sorting(nums))

    def test_sorting_empty_list(self):
        nums = []
        self.assertFalse(self.solution.sorting(nums))

    def test_sorting_single_element(self):
        nums = [1]
        self.assertFalse(self.solution.sorting(nums))

    def test_hashing_with_duplicates(self):
        nums = [1, 2, 3, 4, 5, 1]
        self.assertTrue(self.solution.hashing(nums))

    def test_hashing_without_duplicates(self):
        nums = [1, 2, 3, 4, 5]
        self.assertFalse(self.solution.hashing(nums))

    def test_hashing_empty_list(self):
        nums = []
        self.assertFalse(self.solution.hashing(nums))

    def test_hashing_single_element(self):
        nums = [1]
        self.assertFalse(self.solution.hashing(nums))

if __name__ == "__main__":
    unittest.main()
