// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// my solution:
function encrypt(text, n) {
  if (!text) return text;
  let result = !text ? [] : [...text];
  for (let i = 0; i < n; i++) {
    let odds = [];
    let evens = [];
    result.forEach((e, i) => {
      if (i % 2 === 0) {
        evens.push(e);
      } else {
        odds.push(e);
      }
    });
    result = [...odds, ...evens];
  }
  return result.join("");
}

function decrypt(encryptedText, n) {
  if (!encryptedText) return encryptedText;
  let result = !encryptedText ? [] : [...encryptedText];

  let halfLength = Math.floor(encryptedText.length / 2);

  for (let i = 0; i < n; i++) {
    let odds = result.slice(0, halfLength);
    let evens = result.slice(halfLength);
    result = [];

    for (let j = 0; j < halfLength + 1; j++) {
      result.push(evens.shift());
      result.push(odds.shift());
    }
  }
  return result.join("");
}
