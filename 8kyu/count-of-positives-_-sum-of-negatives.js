// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// my solution
function countPositivesSumNegatives(input) {
  if (!input || input.length < 1) {
    return [];
  } else {
    const res = input.reduce(
      (acc, val) => {
        if (val > 0) {
          acc.positive += 1;
        } else if (val < 0) {
          acc.negative += val;
        }
        return acc;
      },
      { positive: 0, negative: 0 }
    );
    return [res.positive, res.negative];
  }
}

// concise solution
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((val) => val > 0).length,
        input.filter((val) => val < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
