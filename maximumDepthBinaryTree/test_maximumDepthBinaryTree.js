const assert = require('node:assert/strict');
const Solution = require('./maximumDepthBinaryTree.js');
const { TreeNode } = Solution;

assert.equal(Solution.maxDepth(null), 0);
assert.equal(
    Solution.maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))),
    3,
);
assert.equal(Solution.maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(3)))), 3);
console.log('All maximumDepthBinaryTree tests passed.');
