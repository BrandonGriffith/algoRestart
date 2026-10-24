const assert = require('node:assert/strict');
const Solution = require('./validAnagram');

for (const method of ['sorting', 'oneHash', 'twoHash', 'oneArray']) {
    assert.equal(Solution[method]('anagram', 'nagaram'), true, `${method} should recognize anagrams`);
    assert.equal(Solution[method]('rat', 'car'), false, `${method} should reject non-anagrams`);
}

assert.equal(Solution.twoHash('ab', 'ba'), true, 'twoHash should ignore character insertion order');

console.log('All validAnagram tests passed.');
