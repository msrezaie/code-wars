// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// my solution
function solution(string) {
  return string
    .split("")
    .map((char) => (char.toUpperCase() === char ? ` ${char}` : char))
    .join("");
}

// better solution
function solution(string) {
  return string.replace(/[A-Z]/g, (match) => ` ${match}`);
}
