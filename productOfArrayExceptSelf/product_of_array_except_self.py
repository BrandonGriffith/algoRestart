"""Solution for products of all array values except each value itself."""


class Solution:  # pylint: disable=too-few-public-methods
    """Build products without using division."""

    def prefix_suffix(self, nums: list[int]) -> list[int]:
        """Combine prefix and suffix products in linear time."""
        products = [1] * len(nums)
        prefix = 1
        for index, number in enumerate(nums):
            products[index] = prefix
            prefix *= number

        suffix = 1
        for index in range(len(nums) - 1, -1, -1):
            products[index] *= suffix
            suffix *= nums[index]
        return products
