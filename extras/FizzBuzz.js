for (let i = 1; i <= 15; i++) {
  let fizzbuzz = i % 3 === 0 && i % 5 === 0;
  let fizz = i % 3 === 0 && i % 5 !== 0;
  let buzz = i % 3 !== 0 && i % 5 === 0;
  if (fizzbuzz) {
    console.log("FizzBuzz");
  } else if (fizz) {
    console.log("Fizz");
  } else if (buzz) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
