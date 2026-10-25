"""Solutions for checking whether strings are anagrams."""


class ValidAnagram:
    """Provide sorting and character-counting strategies."""

    def sorting(self, s: str, t: str) -> bool:
        """Compare the sorted characters of both strings."""
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)

    def one_hash(self, s: str, t: str) -> bool:
        """Count the first string's characters and consume those counts."""
        if len(s) != len(t):
            return False
        counts = {}
        for character in s:
            if character in counts:
                counts[character] += 1
            else:
                counts[character] = 1
        for character in t:
            if character in counts and counts[character] > 0:
                counts[character] -= 1
            else:
                return False
        return True

    def two_hash(self, s: str, t: str) -> bool:
        """Compare character-frequency dictionaries."""
        if len(s) != len(t):
            return False
        hash_s, hash_t = {}, {}
        for character in s:
            hash_s[character] = 1 + hash_s.get(character, 0)
        for character in t:
            hash_t[character] = 1 + hash_t.get(character, 0)
        return hash_s == hash_t

    def one_array(self, s: str, t: str) -> bool:
        """Count lowercase English letters with a fixed-size array."""
        if len(s) != len(t):
            return False
        count = [0] * 26
        for first_character, second_character in zip(s, t):
            count[ord(first_character) - ord('a')] += 1
            count[ord(second_character) - ord('a')] -= 1
        for val in count:
            if val != 0:
                return False
        return True
