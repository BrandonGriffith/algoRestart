class Solution {
    merge(intervals) {
        const sorted = intervals
            .map(([start, end]) => [start, end])
            .sort((left, right) => left[0] - right[0]);
        const merged = [];

        for (const interval of sorted) {
            const previous = merged[merged.length - 1];
            if (!previous || interval[0] > previous[1]) {
                merged.push(interval);
            } else {
                previous[1] = Math.max(previous[1], interval[1]);
            }
        }
        return merged;
    }
}

module.exports = new Solution();
