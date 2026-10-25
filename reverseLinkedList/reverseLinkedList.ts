export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    iterative(head: ListNode | null): ListNode | null {
        let previous: ListNode | null = null;
        let current = head;
        while (current !== null) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }

    recursive(head: ListNode | null): ListNode | null {
        if (head === null || head.next === null) {
            return head;
        }
        const reversed = this.recursive(head.next);
        head.next.next = head;
        head.next = null;
        return reversed;
    }
}

export default new Solution();
