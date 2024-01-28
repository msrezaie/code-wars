// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// my solution
function incrementString(strng) {
  let last = strng.split(/(\d+)/).filter(Boolean);
  return isNaN(last[last.length - 1])
    ? last.join("") + 1
    : last.slice(0, last.length - 1).join("") +
        String(Number(last[last.length - 1]) + 1).padStart(
          last[last.length - 1].length,
          "0"
        );
}
