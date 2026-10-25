import Solution, { ListNode } from './reverseLinkedList.ts';

function createList(values: number[]): ListNode | null {
    return values.reduceRight<ListNode | null>((next, value) => new ListNode(value, next), null);
}

function listValues(head: ListNode | null): number[] {
    const values: number[] = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    return values;
}

for (const method of ['iterative', 'recursive'] as const) {
    if (listValues(Solution[method](createList([1, 2, 3, 4, 5]))).join(',') !== '5,4,3,2,1') {
        throw new Error(`${method} should reverse a list`);
    }
    if (Solution[method](null) !== null) {
        throw new Error(`${method} should handle an empty list`);
    }
    if (listValues(Solution[method](createList([1]))).join(',') !== '1') {
        throw new Error(`${method} should handle a single-node list`);
    }
}

console.log('All reverseLinkedList tests passed.');
