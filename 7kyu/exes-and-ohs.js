// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my solution
function XO(str) {
  const res = str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, val) => {
        if (val === "o") {
          acc.o++;
        } else if (val === "x") {
          acc.x++;
        }
        return acc;
      },
      { x: 0, o: 0 }
    );
  return res.x === res.o;
}
