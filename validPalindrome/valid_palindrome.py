# pylint: disable=duplicate-code
"""Solution for the ASCII valid palindrome problem."""


class Solution:  # pylint: disable=too-few-public-methods
    """Check whether a string is a palindrome after ASCII filtering."""

    def two_pointers(self, s: str) -> bool:
        """Ignore non-alphanumeric ASCII characters and letter case."""
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and not self._is_ascii_alphanumeric(s[left]):
                left += 1
            while left < right and not self._is_ascii_alphanumeric(s[right]):
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True

    @staticmethod
    def _is_ascii_alphanumeric(character: str) -> bool:
        """Return whether a character is an ASCII letter or digit."""
        return character.isascii() and character.isalnum()
