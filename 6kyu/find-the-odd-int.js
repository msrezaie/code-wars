// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// my solution
// very high time complexity:
function findOdd(A) {
  let result = A.filter((e, i) => A.indexOf(e) === i).reduce((obj, e) => {
    obj[e] = A.filter((element) => element === e).length;
    return obj;
  }, {});
  return parseInt(
    Object.keys(result).filter(
      (key) =>
        result[key] === Object.values(result).filter((e) => e % 2 === 1)[0]
    )
  );
}

// // medium time complexity:
function findOdd(A) {
  let result = {};
  for (let i of A) {
    if (result[i]) {
      result[i]++;
    } else {
      result[i] = 1;
    }
  }
  for (let x in result) {
    if (result[x] % 2 === 1) {
      return parseInt(x);
    }
  }
}

// better time complexity:
function findOdd(A) {
  return A.reduce((acc, ind) => acc ^ ind);
}
