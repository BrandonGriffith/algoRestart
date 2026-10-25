"""Solutions for detecting repeated values in a list."""


class Solution:
    """Provide duplicate-detection algorithms."""

    def brute_force(self, nums: list[int]) -> bool:
        """Compare every pair without changing the input."""
        for index, value in enumerate(nums):
            for later_value in nums[index + 1:]:
                if value == later_value:
                    return True
        return False

    def sorting(self, nums: list[int]) -> bool:
        """Sort the input and compare neighboring values."""
        nums.sort()
        for index, value in enumerate(nums[:-1]):
            if value == nums[index + 1]:
                return True
        return False

    def hashing(self, nums: list[int]) -> bool:
        """Track seen values without changing the input."""
        seen = set()
        for value in nums:
            if value in seen:
                return True
            seen.add(value)
        return False
