class Solution {
    numIslands(grid) {
        const visited = new Set();
        let islands = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[row].length; column++) {
                const key = `${row},${column}`;
                if (grid[row][column] !== '1' || visited.has(key)) {
                    continue;
                }

                islands++;
                visited.add(key);
                const stack = [[row, column]];
                while (stack.length > 0) {
                    const [currentRow, currentColumn] = stack.pop();
                    for (const [nextRow, nextColumn] of [
                        [currentRow - 1, currentColumn],
                        [currentRow + 1, currentColumn],
                        [currentRow, currentColumn - 1],
                        [currentRow, currentColumn + 1],
                    ]) {
                        if (
                            nextRow >= 0
                            && nextRow < grid.length
                            && nextColumn >= 0
                            && nextColumn < grid[nextRow].length
                            && grid[nextRow][nextColumn] === '1'
                        ) {
                            const nextKey = `${nextRow},${nextColumn}`;
                            if (!visited.has(nextKey)) {
                                visited.add(nextKey);
                                stack.push([nextRow, nextColumn]);
                            }
                        }
                    }
                }
            }
        }
        return islands;
    }
}

module.exports = new Solution();
