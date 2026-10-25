class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    iterative(head) {
        let previous = null;
        let current = head;
        while (current !== null) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
    }

    recursive(head) {
        if (head === null || head.next === null) {
            return head;
        }
        const reversed = this.recursive(head.next);
        head.next.next = head;
        head.next = null;
        return reversed;
    }
}

module.exports = Object.assign(new Solution(), { ListNode });
