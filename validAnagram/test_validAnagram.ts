import Solution from './validAnagram.ts';

function assertEqual(actual: boolean, expected: boolean, message: string): void {
    if (actual !== expected) {
        throw new Error(message);
    }
}

function runTests() {
    for (const method of ['sorting', 'oneHash', 'twoHash', 'oneArray'] as const) {
        assertEqual(Solution[method]('anagram', 'nagaram'), true, `${method} should recognize anagrams`);
        assertEqual(Solution[method]('rat', 'car'), false, `${method} should reject non-anagrams`);
    }

    assertEqual(Solution.twoHash('ab', 'ba'), true, 'twoHash should ignore character insertion order');
    console.log('All validAnagram tests passed.');
}

runTests();
