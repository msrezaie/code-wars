// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// my solution:
function towerBuilder(nFloors) {
  return Array.from({ length: nFloors }, (_, index) =>
    "*"
      .repeat(2 * (index + 1) - 1)
      .padStart(nFloors + index)
      .padEnd(2 * nFloors - 1)
  );
}
