let numOne = prompt("Enter a number");
let numTwo = prompt("Enter another number");
if (numOne > numTwo) {
  document.write(`${numOne} is larger than ${numTwo}.`);
} else if (numTwo > numOne) {
  document.write(`${numTwo} is larger than ${numOne}.`);
} else {
  document.write(`These two numbers are the same!`);
}
