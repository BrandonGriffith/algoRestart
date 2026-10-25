const assert = require('node:assert/strict');
const Solution = require('./validPalindrome.js');

assert.equal(Solution.twoPointers('A man, a plan, a canal: Panama'), true);
assert.equal(Solution.twoPointers('race a car'), false);
assert.equal(Solution.twoPointers(' '), true);
assert.equal(Solution.twoPointers('.,!'), true);
assert.equal(Solution.twoPointers('É'), true, 'non-ASCII characters should be ignored');
console.log('All validPalindrome tests passed.');
