const Solution = require('./validAnagram');

function runTests() {
    console.log('Running sorting tests...');
    console.log(Solution.sorting('anagram', 'nagaram') === true ? 'PASS' : 'FAIL');
    console.log(Solution.sorting('rat', 'car') === false ? 'PASS' : 'FAIL');

    console.log('Running oneHash tests...');
    console.log(Solution.oneHash('anagram', 'nagaram') === true ? 'PASS' : 'FAIL');
    console.log(Solution.oneHash('rat', 'car') === false ? 'PASS' : 'FAIL');

    console.log('Running twoHash tests...');
    console.log(Solution.twoHash('anagram', 'nagaram') === true ? 'PASS' : 'FAIL');
    console.log(Solution.twoHash('rat', 'car') === false ? 'PASS' : 'FAIL');

    console.log('Running oneArray tests...');
    console.log(Solution.oneArray('anagram', 'nagaram') === true ? 'PASS' : 'FAIL');
    console.log(Solution.oneArray('rat', 'car') === false ? 'PASS' : 'FAIL');
};

runTests();
