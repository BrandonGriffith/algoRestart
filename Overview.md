# Project Overview

## What this project is

This repository is an educational collection of 15 interview-style algorithm problems. Each problem has JavaScript, Python, and TypeScript solutions with tests; many include multiple approaches for comparison.

This is a practice repository, not a packaged application. It has no shared test runner or external dependencies.

## Repository layout

- `containsDuplicate/` — detects repeated values in an array.
- `fibonacci/` — computes Fibonacci numbers using recursion and dynamic programming.
- `climbingStairs/` — counts ways to reach a stair using one- or two-step moves.
- `coinChange/` — finds the fewest coins needed to make an amount.
- `bestTimeToBuySellStock/` — finds the best profit from one buy and one later sale.
- `validPalindrome/` — checks palindrome strings with two pointers.
- `productOfArrayExceptSelf/` — computes per-position products without division.
- `maximumSubarray/` — finds the largest sum of a contiguous subarray.
- `binarySearch/` — locates a target in an ascending array.
- `mergeIntervals/` — combines overlapping or touching ranges.
- `reverseLinkedList/` — reverses a singly linked list.
- `maximumDepthBinaryTree/` — computes binary-tree depth with DFS.
- `numberOfIslands/` — counts connected land groups in a grid.
- `twoSum/` — finds two array positions whose values add to a target.
- `validAnagram/` — compares strings to determine whether they contain the same characters.
- `plan.md` — roadmap and completion status for algorithm exercises.

Each problem folder contains a solution and test for each language. Python filenames and identifiers use `snake_case`; method names below use shared labels (for example, Python's `one_pass` is called `onePass` in JavaScript and TypeScript).

## Problems and approaches

### Contains Duplicate

Checks whether an array contains any value more than once:

- `bruteForce` compares pairs of values, taking O(n²) time and O(1) extra space.
- `sorting` sorts the input and checks neighboring values, taking O(n log n) time. Sorting changes the input array.
- `hashing` tracks values in a set, taking O(n) expected time and O(n) extra space.

### Fibonacci

Computes the value at index `n` in the sequence beginning `0, 1, 1, 2, ...`:

- `recursive` directly follows the recurrence. It is simple to understand but takes exponential time for larger inputs.
- `memoization` caches recursive results, using O(n) time and O(n) extra space.
- `tabulation` builds results iteratively, using O(n) time and O(1) extra space.

All three implementations require a non-negative integer. Python rejects booleans as well as non-integers; JavaScript and TypeScript use `Number.isInteger`.
JavaScript and TypeScript use the `Number` type, so their Fibonacci results are not guaranteed to remain exact after index 78.

### Climbing Stairs

Counts the ways to reach stair `n` by taking one or two steps at a time. `n` must be a non-negative integer; zero stairs has one way (take no steps).

- `recursive` follows the recurrence directly, taking O(2ⁿ) time and O(n) call-stack space.
- `memoization` caches recursive results, taking O(n) time and O(n) space.
- `tabulation` builds the counts iteratively, taking O(n) time and O(1) space.

### Coin Change

Returns the minimum number of coins needed to make a non-negative amount, or `-1` when it cannot be made. Coin denominations must be positive integers; the input list is not modified.

- `memoization` caches the minimum for each remaining amount.
- `tabulation` builds minimum counts from amount zero upward.

Both approaches take O(amount × number of denominations) time and O(amount) space. The memoized version also uses recursion stack space proportional to the amount in the worst case.

### Best Time to Buy and Sell Stock

Finds the largest profit from one buy followed by one sale; it returns zero when no profitable transaction exists.

- `bruteForce` checks all buy/sell pairs in O(n²) time and O(1) space.
- `onePass` tracks a running minimum price in O(n) time and O(1) space.

### Valid Palindrome

`twoPointers` ignores non-alphanumeric ASCII characters and letter case. Non-ASCII characters are ignored. It takes O(n) time and O(1) extra space.

### Product of Array Except Self

`prefixSuffix` builds prefix products, then multiplies by suffix products. It takes O(n) time and O(n) output space, uses no division, handles zeros, and does not mutate the input.

### Maximum Subarray

Both methods require a non-empty array and return the greatest sum of any contiguous subarray, including when all values are negative.

- `bruteForce` checks every subarray in O(n²) time and O(1) space.
- `kadane` tracks the best subarray ending at each position in O(n) time and O(1) space.

### Binary Search

Both methods search an ascending array and return a matching index or `-1`. If values repeat, either matching index may be returned.

- `iterative` takes O(log n) time and O(1) extra space.
- `recursive` takes O(log n) time and O(log n) call-stack space.

### Merge Intervals

`merge` sorts a copy of the interval list and combines overlapping or touching inclusive intervals. It takes O(n log n) time and O(n) space and does not mutate the input.

### Reverse Linked List

The local `ListNode` type stores a value and a next pointer. Both `iterative` and `recursive` reverse the links in place; the iterative method uses O(n) time and O(1) space, while the recursive method uses O(n) time and O(n) call-stack space.

### Maximum Depth of Binary Tree

The local `TreeNode` type stores a value and optional left and right children. `maxDepth` uses recursive depth-first search in O(n) time and O(h) call-stack space, where `h` is the tree height.

### Number of Islands

`numIslands` counts four-directionally connected cells whose value is `'1'`, using iterative depth-first search and a separate visited set. It takes O(rows × columns) time and space and does not mutate the grid.

### Two Sum

Returns the indices of two distinct values that add to a target, or an empty array if no pair is found:

- `bruteForce` checks all pairs in O(n²) time and O(1) extra space.
- `hashMap` stores earlier values and looks up each complement in O(n) expected time and O(n) extra space.

### Valid Anagram

Checks whether two strings contain the same characters with the same counts:

- `sorting` sorts the characters and compares the results, using O(n log n) time.
- `oneHash` counts characters from the first string, then consumes those counts while reading the second.
- `twoHash` builds a count table for each string and compares the counts.
- `oneArray` uses a fixed 26-element counter and therefore assumes lowercase English letters `a` through `z`.

The counting approaches take O(n) time. Hash-based approaches use space proportional to the number of distinct characters; `oneArray` uses O(1) additional space under its lowercase-letter assumption.
The string examples do not normalize Unicode; the tests use ordinary lowercase English words.

## Running the tests

Run from the repository root in PowerShell. Each loop runs every test file and stops on failure.

### JavaScript

```powershell
Get-ChildItem -Recurse -File -Filter 'test_*.js' | ForEach-Object {
    node $_.FullName
    if ($LASTEXITCODE -ne 0) { throw "Failed: $($_.FullName)" }
}
```

### Python

```powershell
Get-ChildItem -Recurse -File -Filter 'test_*.py' | ForEach-Object {
    python $_.FullName
    if ($LASTEXITCODE -ne 0) { throw "Failed: $($_.FullName)" }
}
```

### Python lint

Run Pylint's default checks against all Python source and test files from the repository root:

```powershell
$pythonFiles = Get-ChildItem -Recurse -File -Filter '*.py' | ForEach-Object { $_.FullName }
python -m pylint $pythonFiles
```

### TypeScript tests

The TypeScript test files can be run directly with a Node.js version that supports built-in TypeScript type stripping:

```powershell
Get-ChildItem -Recurse -File -Filter 'test_*.ts' | ForEach-Object {
    node --experimental-strip-types $_.FullName
    if ($LASTEXITCODE -ne 0) { throw "Failed: $($_.FullName)" }
}
```

### TypeScript type-check

Type-check all TypeScript implementations and tests without emitting output:

```powershell
$typescriptFiles = Get-ChildItem -Recurse -File -Filter '*.ts' | ForEach-Object { $_.FullName }
tsc.cmd --noEmit --target ES2020 --module commonjs --allowImportingTsExtensions $typescriptFiles
```
