"""Tests for binary-tree maximum depth."""

import unittest
from maximum_depth_binary_tree import Solution, TreeNode


class TestMaximumDepthBinaryTree(unittest.TestCase):
    """Verify empty, balanced, and skewed trees."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_tree_depths(self):
        """Check depth for representative tree shapes."""
        self.assertEqual(self.solution.max_depth(None), 0)
        balanced = TreeNode(1, TreeNode(2, TreeNode(4)), TreeNode(3))
        self.assertEqual(self.solution.max_depth(balanced), 3)
        skewed = TreeNode(1, TreeNode(2, TreeNode(3)))
        self.assertEqual(self.solution.max_depth(skewed), 3)


if __name__ == "__main__":
    unittest.main()
