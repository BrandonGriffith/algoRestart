class Solution {
    bruteForce(nums: number[]): boolean {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    sorting(nums: number[]): boolean {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    hashing(nums: number[]): boolean {
        const hash = new Set<number>();
        for (const n of nums) {
            if (hash.has(n)) {
                return true;
            }
            hash.add(n);
        }
        return false;
    }
};

export default new Solution();
