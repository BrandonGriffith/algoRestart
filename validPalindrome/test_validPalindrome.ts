import Solution from './validPalindrome.ts';

function assertEqual(actual: boolean, expected: boolean, message: string): void {
    if (actual !== expected) {
        throw new Error(message);
    }
}

assertEqual(Solution.twoPointers('A man, a plan, a canal: Panama'), true, 'should ignore punctuation and casing');
assertEqual(Solution.twoPointers('race a car'), false, 'should reject a non-palindrome');
assertEqual(Solution.twoPointers(' '), true, 'should accept input with no ASCII alphanumerics');
assertEqual(Solution.twoPointers('.,!'), true, 'should ignore punctuation');
assertEqual(Solution.twoPointers('É'), true, 'should ignore non-ASCII characters');
console.log('All validPalindrome tests passed.');
