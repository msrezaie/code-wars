// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// my solution
function duplicateEncode(word) {
  let count = word
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  return word
    .toLowerCase()
    .split("")
    .map((c) => {
      if (count[c] > 1) {
        return ")";
      } else {
        return "(";
      }
    })
    .join("");
}

// my optimized solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((c) => (word.toLowerCase().split(c).length - 1 > 1 ? ")" : "("))
    .join("");
}
