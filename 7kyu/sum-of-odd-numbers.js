// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// my solution
function rowSumOddNumbers(n) {
  let odds = [];
  for (let i = n * n - (n - 1); odds.length < n; i += 2) {
    odds.push(i);
  }
  return odds.reduce((acc, val) => (acc += val));
}

// best practice
function rowSumOddNumbers(n) {
  return n ** 3;
}
