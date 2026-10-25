function validateInput(nums: number[]): void {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new RangeError('nums must be a non-empty array');
    }
}

class Solution {
    bruteForce(nums: number[]): number {
        validateInput(nums);
        let bestSum = -Infinity;
        for (let start = 0; start < nums.length; start++) {
            let currentSum = 0;
            for (let end = start; end < nums.length; end++) {
                currentSum += nums[end];
                bestSum = Math.max(bestSum, currentSum);
            }
        }
        return bestSum;
    }

    kadane(nums: number[]): number {
        validateInput(nums);
        let currentSum = nums[0];
        let bestSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            bestSum = Math.max(bestSum, currentSum);
        }
        return bestSum;
    }
}

export default new Solution();
