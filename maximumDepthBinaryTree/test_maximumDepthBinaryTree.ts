import Solution, { TreeNode } from './maximumDepthBinaryTree.ts';

if (Solution.maxDepth(null) !== 0) {
    throw new Error('empty tree should have depth zero');
}
const balanced = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
if (Solution.maxDepth(balanced) !== 3) {
    throw new Error('balanced tree should have depth three');
}
const skewed = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
if (Solution.maxDepth(skewed) !== 3) {
    throw new Error('skewed tree should have depth three');
}
console.log('All maximumDepthBinaryTree tests passed.');
