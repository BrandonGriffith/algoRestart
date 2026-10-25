"""Solutions for the maximum subarray sum problem."""


class Solution:
    """Find the largest sum among all non-empty contiguous subarrays."""

    @staticmethod
    def _validate_input(nums: list[int]) -> None:
        """Reject an empty array."""
        if not nums:
            raise ValueError("nums must be a non-empty list")

    def brute_force(self, nums: list[int]) -> int:
        """Check the sum of every contiguous subarray."""
        self._validate_input(nums)
        best_sum = float("-inf")
        for start in range(len(nums)):
            current_sum = 0
            for end in range(start, len(nums)):
                current_sum += nums[end]
                best_sum = max(best_sum, current_sum)
        return best_sum

    def kadane(self, nums: list[int]) -> int:
        """Track the best subarray ending at each position."""
        self._validate_input(nums)
        current_sum = best_sum = nums[0]
        for number in nums[1:]:
            current_sum = max(number, current_sum + number)
            best_sum = max(best_sum, current_sum)
        return best_sum
