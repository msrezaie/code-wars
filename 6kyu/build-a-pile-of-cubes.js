// Your task is to construct a building which will be a pile of n cubes.
// The cube at the bottom will have a volume of n^3,
// the cube above will have a volume of (n-1)^3,
// and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building.
// Can you find the number n of cubes you will have to build?

// The function findNb(m) should take an integer m as a parameter
// and return the integer n such that:
// 1^3 + 2^3 + 3^3 + ... + n^3 = m, if such an n exists,
// or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// best practice:
function findNb(m) {
  let counter = 1;
  let total = 0;
  while (total < m) {
    total += Math.pow(counter, 3);
    if (total === m) {
      return counter;
    }
    counter++;
  }
  return -1;
}
