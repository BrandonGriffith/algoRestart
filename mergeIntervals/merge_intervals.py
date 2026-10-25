"""Solution for merging overlapping or touching intervals."""


class Solution:  # pylint: disable=too-few-public-methods
    """Sort intervals and combine ranges that overlap or touch."""

    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        """Return merged intervals without modifying the input."""
        sorted_intervals = sorted((start, end) for start, end in intervals)
        merged: list[list[int]] = []

        for start, end in sorted_intervals:
            if not merged or start > merged[-1][1]:
                merged.append([start, end])
            else:
                merged[-1][1] = max(merged[-1][1], end)
        return merged
