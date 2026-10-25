"""Iterative and recursive binary search solutions."""


class Solution:
    """Search for a target in an ascending array."""

    def iterative(self, nums: list[int], target: int) -> int:
        """Return a matching index with an iterative search, or -1."""
        left, right = 0, len(nums) - 1
        while left <= right:
            middle = (left + right) // 2
            if nums[middle] == target:
                return middle
            if nums[middle] < target:
                left = middle + 1
            else:
                right = middle - 1
        return -1

    def recursive(self, nums: list[int], target: int) -> int:
        """Return a matching index with a recursive search, or -1."""

        def search(left: int, right: int) -> int:
            """Search the inclusive index range."""
            if left > right:
                return -1
            middle = (left + right) // 2
            if nums[middle] == target:
                return middle
            if nums[middle] < target:
                return search(middle + 1, right)
            return search(left, middle - 1)

        return search(0, len(nums) - 1)
