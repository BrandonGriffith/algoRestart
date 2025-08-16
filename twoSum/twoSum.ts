class SolutionTS {
    bruteForce(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }

    hashMap(nums: number[], target: number): number[] {
        const hash: Record<number, number> = {};
        for (let i = 0; i < nums.length; i++) {
            const diff: number = target - nums[i];
            if (diff in hash) {
                return [hash[diff], i];
            }
            hash[nums[i]] = i;
        }
        return [];
    }
}
export default new SolutionTS();