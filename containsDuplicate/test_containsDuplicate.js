const Solution = require('./containsDuplicate');

function runTests() {
    console.log('Running bruteForce tests...');
    console.log(Solution.bruteForce([1, 2, 3, 1]) === true ? 'PASS' : 'FAIL');
    console.log(Solution.bruteForce([1, 2, 3, 4]) === false ? 'PASS' : 'FAIL');

    console.log('Running sorting tests...');
    console.log(Solution.sorting([1, 2, 3, 1]) === true ? 'PASS' : 'FAIL');
    console.log(Solution.sorting([1, 2, 3, 4]) === false ? 'PASS' : 'FAIL');

    console.log('Running hashing tests...');
    console.log(Solution.hashing([1, 2, 3, 1]) === true ? 'PASS' : 'FAIL');
    console.log(Solution.hashing([1, 2, 3, 4]) === false ? 'PASS' : 'FAIL');
};

runTests();