# Problems Found and Fixes

This file records the confirmed code, test, and verification problems encountered while working on this algorithm-practice project, along with how each was addressed.

## Code and test problems

### JavaScript `validAnagram.twoHash` could reject anagrams

The method compared character-count objects by serializing them. Equivalent objects can have their keys inserted in different orders, so the same character counts could produce different serialized strings. For example, `"ab"` and `"ba"` could be treated as different.

**Fix:** Compare the count tables by their keys and values instead of comparing serialized objects. Added a regression test for `"ab"` and `"ba"` in the JavaScript and TypeScript test files.

### Some JavaScript and TypeScript tests did not fail when a check failed

Several `containsDuplicate`, `twoSum`, and `validAnagram` test scripts printed pass/fail messages without using assertions. A failed check could therefore leave the process exit code successful, making automated verification unreliable.

**Fix:** Replaced those checks with assertions so a mismatch fails the test process. Fibonacci tests already used assertions.

### Fibonacci Python files had Pylint warnings

The editor reported missing module, class, and function docstrings (`C0114`, `C0115`, and `C0116`) and two lines over the 100-character limit (`C0301`).

**Fix:** Added concise docstrings to the Fibonacci implementation and its test module, class, and methods. Wrapped the long test method tuples across multiple lines. A targeted Pylint run reported a 10/10 score for both files.

## Verification and tooling problems

### Root-level Python test discovery found no tests

Running `python -m unittest discover` from the repository root reported zero tests. The project keeps tests in separate problem folders rather than a shared test package.

**Fix:** Ran the relevant suite with an explicit start directory, for example `python -m unittest discover -s fibonacci -v`. For full-project checks, the documented commands run each problem's test file directly.

### Python test invocation collided with the problem-folder name

An early unittest module invocation did not select the intended Fibonacci test because the folder and module use similar names.

**Fix:** Ran the test file directly from the repository root, such as `python .\fibonacci\test_fibonacci.py`, or used unittest discovery with `-s fibonacci`.

### PowerShell blocked the TypeScript compiler script

PowerShell's execution policy blocked the `tsc.ps1` shim.

**Fix:** Invoked the Windows command shim (`tsc.cmd`) instead. The project-wide TypeScript no-emit check then passed.

### Git whitespace checking misreported Windows line endings

With `core.autocrlf=true`, the default `git diff --check` treated carriage returns in CRLF line endings as trailing whitespace.

**Fix:** Repeated the check with `git -c core.whitespace=cr-at-eol diff --check`, which accounts for CRLF and confirmed there was no content-whitespace problem.

## Verification performed

- Ran the JavaScript, Python, and TypeScript tests for all four implemented problems: `containsDuplicate`, `fibonacci`, `twoSum`, and `validAnagram`.
- Ran a project-wide TypeScript no-emit type-check.
- After adding the Fibonacci Python docstrings and line wraps, ran all five Fibonacci Python tests and the targeted Pylint checks; both passed.
