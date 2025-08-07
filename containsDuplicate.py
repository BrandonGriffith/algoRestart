class Solution:
    def bruteForce(self, nums):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False
    
    def sorting(self, nums):
        nums.sort()
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True
        return False
    
    def hashing(self, nums):
        hash = set()
        for n in nums:
            if n in hash:
                return True
            hash.add(n)
        return False
    