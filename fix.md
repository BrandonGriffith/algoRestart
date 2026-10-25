# Fix Log

## Resolved issues

- **Anagram checks:** Fixed JavaScript/TypeScript count-table comparison and added regression coverage.
- **Test reliability:** Replaced print-only checks with assertions so failures return non-zero exit codes.
- **Python lint:** Renamed Python modules and identifiers to `snake_case`; fixed Pylint docstring, loop, shadowing, whitespace, and newline findings.
- **Product Except Self:** Normalized JavaScript/TypeScript negative zero to `0`.
- **Python test discovery:** Tests are organized by problem folder, so run each test file rather than root-level unittest discovery.
- **Windows tooling:** Use `tsc.cmd` in PowerShell; use `git -c core.whitespace=cr-at-eol diff --check` for CRLF-aware whitespace checks.

## Current verification

- All 15 JavaScript, Python, and TypeScript test scripts pass.
- All 48 Python unittest cases pass.
- TypeScript no-emit type-check passes.
- Default Pylint reports 10.00/10 across Python files.
- CRLF-aware `git diff --check` passes.

## Roadmap

All 12 roadmap exercises are complete in JavaScript, Python, and TypeScript. See [Overview.md](./Overview.md) for implementation notes and [plan.md](./plan.md) for the checklist.
