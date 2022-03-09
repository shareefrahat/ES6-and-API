//Practice-3.1

const dividedByFive = (input) => input / 5;
const output = dividedByFive(5);
console.log(output);

//Practice-3.2

const multiplication = (num1, num2) => (num1 + 2) * (num2 + 2);
const getInput = multiplication(3, 4);
console.log(getInput);

//Practice-3.3

const qubeNumber = (x, y, z) => x * y * z;
const qubeOutput = qubeNumber(2, 3, 4);
console.log(qubeOutput);

//Practice-3.4

const addMultiply = (a, b) => {
  a += 2;
  b += 2;
  return a * b;
};
const addMultiplyResult = addMultiply(2, 3);
console.log(addMultiplyResult);
