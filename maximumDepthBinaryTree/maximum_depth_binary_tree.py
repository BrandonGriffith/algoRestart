"""Recursive depth-first solution for binary-tree maximum depth."""

from __future__ import annotations


class TreeNode:  # pylint: disable=too-few-public-methods
    """A binary tree node."""

    def __init__(
        self,
        val: int,
        left: TreeNode | None = None,
        right: TreeNode | None = None,
    ):
        """Create a node with optional left and right children."""
        self.val = val
        self.left = left
        self.right = right


class Solution:  # pylint: disable=too-few-public-methods
    """Compute the maximum number of nodes from root to leaf."""

    def max_depth(self, root: TreeNode | None) -> int:
        """Return the depth using recursive depth-first search."""
        if root is None:
            return 0
        return 1 + max(self.max_depth(root.left), self.max_depth(root.right))
