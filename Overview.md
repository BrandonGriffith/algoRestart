# Project Overview

## What this project is

This repository is a small, educational collection of interview-style algorithm problems. Each problem is kept in its own folder and has JavaScript, Python, and TypeScript solutions with tests. The implementations often show multiple ways to solve the same problem so their trade-offs are easy to compare.

The project is intended for practicing data structures, common algorithm patterns, and problem-solving—not as a packaged application. There is currently no package manifest, shared test runner, or external dependency setup.

## Repository layout

- `containsDuplicate/` — detects repeated values in an array.
- `fibonacci/` — computes Fibonacci numbers using recursion and dynamic programming.
- `twoSum/` — finds two array positions whose values add to a target.
- `validAnagram/` — compares strings to determine whether they contain the same characters.
- `algo.txt` — compact index of implemented problems and their main techniques.
- `plan.md` — roadmap of possible future algorithm exercises.

Each problem folder contains a solution file and a test file for each language, for example `twoSum/twoSum.js` and `twoSum/test_twoSum.js`.

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

Run these commands from the repository root in PowerShell. Each test script is self-contained and exits unsuccessfully if an assertion fails.

### JavaScript

```powershell
node .\containsDuplicate\test_containsDuplicate.js
node .\fibonacci\test_fibonacci.js
node .\twoSum\test_twoSum.js
node .\validAnagram\test_validAnagram.js
```

### Python

```powershell
python .\containsDuplicate\test_containsDuplicate.py
python .\fibonacci\test_fibonacci.py
python .\twoSum\test_twoSum.py
python .\validAnagram\test_validAnagram.py
```

### TypeScript tests

The TypeScript test files can be run directly with a Node.js version that supports built-in TypeScript type stripping:

```powershell
node --experimental-strip-types .\containsDuplicate\test_containsDuplicate.ts
node --experimental-strip-types .\fibonacci\test_fibonacci.ts
node --experimental-strip-types .\twoSum\test_twoSum.ts
node --experimental-strip-types .\validAnagram\test_validAnagram.ts
```

### TypeScript type-check

With the TypeScript compiler installed, type-check all implementations and tests without emitting output:

```powershell
tsc.cmd --noEmit --target ES2020 --module commonjs --allowImportingTsExtensions `
  .\containsDuplicate\containsDuplicate.ts .\containsDuplicate\test_containsDuplicate.ts `
  .\fibonacci\fibonacci.ts .\fibonacci\test_fibonacci.ts `
  .\twoSum\twoSum.ts .\twoSum\test_twoSum.ts `
  .\validAnagram\validAnagram.ts .\validAnagram\test_validAnagram.ts
```
