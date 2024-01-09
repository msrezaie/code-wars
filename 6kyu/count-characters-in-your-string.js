// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// my solution
function count(string) {
  return string.split("").reduce((acc, val) => {
    acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});
}
