"""Iterative depth-first search solution for counting islands."""


class Solution:  # pylint: disable=too-few-public-methods
    """Count four-directionally connected land groups without changing the grid."""

    def num_islands(self, grid: list[list[str]]) -> int:
        """Count land groups using a stack and a separate visited set."""
        visited: set[tuple[int, int]] = set()
        islands = 0

        for row, cells in enumerate(grid):
            for column, cell in enumerate(cells):
                if cell != "1" or (row, column) in visited:
                    continue

                islands += 1
                visited.add((row, column))
                stack = [(row, column)]
                while stack:
                    current_row, current_column = stack.pop()
                    for next_row, next_column in (
                        (current_row - 1, current_column),
                        (current_row + 1, current_column),
                        (current_row, current_column - 1),
                        (current_row, current_column + 1),
                    ):
                        if (
                            0 <= next_row < len(grid)
                            and 0 <= next_column < len(grid[next_row])
                            and grid[next_row][next_column] == "1"
                            and (next_row, next_column) not in visited
                        ):
                            visited.add((next_row, next_column))
                            stack.append((next_row, next_column))
        return islands
