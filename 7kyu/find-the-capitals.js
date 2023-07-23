// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// my solution
var capitals = function (word) {
  return word
    .split("")
    .map((value, index) => (value === value.toUpperCase() ? index : ""))
    .filter((x) => Number.isInteger(x));
};

// best practice
function capitals(word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
}
