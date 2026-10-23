# Algorithm Project Plan

This project practices interview-style algorithms with one folder per problem, JavaScript, Python, and TypeScript solutions, and tests for each language. The ideas below broaden the techniques covered while keeping that structure.

## Phase 1: Recursion and dynamic programming

1. **Fibonacci** — Compare a simple recursive baseline, top-down memoization, and bottom-up tabulation. Cover base cases and a larger input that demonstrates why memoization matters.
2. **Climbing Stairs** — Apply a similar recurrence to a practical counting problem; compare recursive/memoized and iterative solutions.
3. **Coin Change** — Practice a less direct dynamic-programming state, including unreachable amounts.

## Phase 2: Array and string patterns

4. **Best Time to Buy and Sell Stock** — Track a running minimum and best result in one pass.
5. **Valid Palindrome** — Use two pointers; define behavior for punctuation, spaces, and casing.
6. **Product of Array Except Self** — Use prefix and suffix products without division.
7. **Maximum Subarray** — Practice Kadane's algorithm, including all-negative inputs.

## Phase 3: Search, sorting, and structures

8. **Binary Search** — Implement iterative and recursive variants; test empty input and boundary cases.
9. **Merge Intervals** — Sort then combine overlapping ranges; test touching and nested intervals.
10. **Reverse Linked List** — Introduce a small node shape and practice iterative and recursive pointer manipulation.
11. **Maximum Depth of Binary Tree** — Use recursive DFS; test empty, balanced, and skewed trees.
12. **Number of Islands** — Traverse a grid with DFS or BFS and handle visited cells correctly.

## Conventions for future additions

- Keep one folder per problem with JavaScript, Python, and TypeScript implementations and language-specific tests.
- Where it teaches a useful trade-off, include both a straightforward baseline and an optimized or canonical approach.
- Test ordinary examples, empty or minimal inputs, boundaries, and cases that distinguish approaches.
- Avoid mutating inputs unless the chosen approach requires it; document and test that behavior.
- Add each implemented problem and its key technique to `algo.txt`.
- Keep Fibonacci as the first recommended addition: it demonstrates the progression from repeated recursive work to memoization and tabulation.
