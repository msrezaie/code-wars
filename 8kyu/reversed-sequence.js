// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// my solution
function reverseSeq(n) {
  return Array.from({ length: n }, (_, index) => index + 1).reverse();
}

// best practice
function reverseSeq(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => n - index);
}
