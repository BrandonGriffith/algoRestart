class Solution {
    bruteForce(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    sorting(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }
        return false;
    }

    hashing(nums) {
        const hash = new Set();
        for (const n of nums) {
            if (hash.has(n)) {
                return true;
            }
            hash.add(n);
        }
        return false;
    }
};

module.exports = new Solution();