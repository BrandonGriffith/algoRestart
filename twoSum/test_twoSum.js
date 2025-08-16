const Solution = require('./twoSum.js');

console.log('Test bruteForce finds indices:', JSON.stringify(Solution.bruteForce([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]));
console.log('Test bruteForce returns empty for no solution:', JSON.stringify(Solution.bruteForce([1, 2, 3], 6)) === JSON.stringify([]));
console.log('Test hashMap finds indices:', JSON.stringify(Solution.hashMap([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]));
console.log('Test hashMap returns empty for no solution:', JSON.stringify(Solution.hashMap([1, 2, 3], 6)) === JSON.stringify([]));