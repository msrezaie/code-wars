// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// my solution
function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((sum, val) => sum + val, 0) / array.length;
};