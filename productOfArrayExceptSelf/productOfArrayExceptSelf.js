class Solution {
    prefixSuffix(nums) {
        const products = new Array(nums.length).fill(1);
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            products[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            products[i] *= suffix;
            suffix *= nums[i];
        }
        return products.map((product) => (Object.is(product, -0) ? 0 : product));
    }
}

module.exports = new Solution();
