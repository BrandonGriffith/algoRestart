const assert = require('node:assert/strict');
const Solution = require('./reverseLinkedList.js');

function createList(values) {
    return values.reduceRight((next, value) => new Solution.ListNode(value, next), null);
}

function listValues(head) {
    const values = [];
    while (head !== null) {
        values.push(head.val);
        head = head.next;
    }
    return values;
}

for (const method of ['iterative', 'recursive']) {
    assert.deepEqual(listValues(Solution[method](createList([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]);
    assert.equal(Solution[method](null), null);
    assert.deepEqual(listValues(Solution[method](createList([1]))), [1]);
}

console.log('All reverseLinkedList tests passed.');
