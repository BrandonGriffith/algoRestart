class Solution {
    bruteForce(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }

    hashMap(nums, target) {
        const hash = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in hash) {
                return [hash[diff], i];
            }
            hash[nums[i]] = i;
        }
        return [];
    }
};

module.exports = new Solution();