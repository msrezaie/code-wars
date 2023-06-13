// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// my solution: O(n)
function correct(string) {
  return string
    .split("")
    .map((element) =>
      element == "0"
        ? (element = "O")
        : element == "5"
        ? (element = "S")
        : element == "1"
        ? (element = "I")
        : element
    )
    .join("");
}

// best practice: O(1)
correct = (char) =>
  char.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
