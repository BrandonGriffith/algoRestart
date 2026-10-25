"""Iterative and recursive linked-list reversal solutions."""

from __future__ import annotations


class ListNode:  # pylint: disable=too-few-public-methods
    """A singly linked list node."""

    def __init__(self, val: int, next_node: ListNode | None = None):
        """Create a node with a value and optional successor."""
        self.val = val
        self.next = next_node


class Solution:  # pylint: disable=too-few-public-methods
    """Reverse a singly linked list."""

    def iterative(self, head: ListNode | None) -> ListNode | None:
        """Reverse links in a single pass."""
        previous = None
        current = head
        while current is not None:
            next_node = current.next
            current.next = previous
            previous = current
            current = next_node
        return previous

    def recursive(self, head: ListNode | None) -> ListNode | None:
        """Reverse links recursively."""
        if head is None or head.next is None:
            return head
        reversed_head = self.recursive(head.next)
        head.next.next = head
        head.next = None
        return reversed_head
