"""Solutions for finding two values that sum to a target."""


class Solution:
    """Provide pair-search algorithms."""

    def brute_force(self, nums: list[int], target: int) -> list[int]:
        """Check every distinct pair of indices."""
        for first_index, first_value in enumerate(nums):
            for second_index, second_value in enumerate(
                nums[first_index + 1:], first_index + 1
            ):
                if first_value + second_value == target:
                    return [first_index, second_index]
        return []

    def hash_map(self, nums: list[int], target: int) -> list[int]:
        """Find a complement using values seen in one pass."""
        prev_map: dict[int, int] = {}
        for i, n in enumerate(nums):
            diff: int = target - n
            if diff in prev_map:
                return [prev_map[diff], i]
            prev_map[n] = i
        return []
