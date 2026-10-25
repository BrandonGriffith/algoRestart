class Solution {
    numIslands(grid: string[][]): number {
        const visited = new Set<string>();
        let islands = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[row].length; column++) {
                const key = `${row},${column}`;
                if (grid[row][column] !== '1' || visited.has(key)) {
                    continue;
                }

                islands++;
                visited.add(key);
                const stack: [number, number][] = [[row, column]];
                while (stack.length > 0) {
                    const [currentRow, currentColumn] = stack.pop()!;
                    const neighbors: [number, number][] = [
                        [currentRow - 1, currentColumn],
                        [currentRow + 1, currentColumn],
                        [currentRow, currentColumn - 1],
                        [currentRow, currentColumn + 1],
                    ];
                    for (const [nextRow, nextColumn] of neighbors) {
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

export default new Solution();
