"""Tests for linked-list reversal."""

import unittest
from reverse_linked_list import ListNode, Solution


def create_list(values):
    """Build a linked list from values."""
    head = None
    for value in reversed(values):
        head = ListNode(value, head)
    return head


def list_values(head):
    """Read values from a linked list."""
    values = []
    while head is not None:
        values.append(head.val)
        head = head.next
    return values


class TestReverseLinkedList(unittest.TestCase):
    """Verify iterative and recursive list reversal."""

    def setUp(self):
        """Create a solution instance for each test."""
        self.solution = Solution()

    def test_algorithms(self):
        """Check ordinary, empty, and single-node lists."""
        for method in (self.solution.iterative, self.solution.recursive):
            with self.subTest(method=method.__name__):
                self.assertEqual(list_values(method(create_list([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1])
                self.assertIsNone(method(None))
                self.assertEqual(list_values(method(create_list([1]))), [1])


if __name__ == "__main__":
    unittest.main()
