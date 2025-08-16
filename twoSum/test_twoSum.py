import unittest
from twoSum import Solution

class TestTwoSum(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_bruteForce(self):
        nums = [2, 7, 11, 15]
        target = 9
        self.assertEqual(self.solution.bruteForce(nums, target), [0, 1])

    def test_bruteForce_no_solution(self):
        nums = [1, 2, 3]
        target = 6
        self.assertEqual(self.solution.bruteForce(nums, target), [])

    def test_hashMap(self):
        nums = [2, 7, 11, 15]
        target = 9
        self.assertEqual(self.solution.hashMap(nums, target), [0, 1])

    def test_hashMap_no_solution(self):
        nums = [1, 2, 3]
        target = 6
        self.assertEqual(self.solution.hashMap(nums, target), [])

if __name__ == "__main__":
    unittest.main()