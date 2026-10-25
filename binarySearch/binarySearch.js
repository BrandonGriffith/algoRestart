class Solution {
    iterative(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (nums[middle] === target) {
                return middle;
            }
            if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return -1;
    }

    recursive(nums, target) {
        const search = (left, right) => {
            if (left > right) {
                return -1;
            }
            const middle = Math.floor((left + right) / 2);
            if (nums[middle] === target) {
                return middle;
            }
            return nums[middle] < target
                ? search(middle + 1, right)
                : search(left, middle - 1);
        };

        return search(0, nums.length - 1);
    }
}

module.exports = new Solution();
