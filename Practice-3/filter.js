//Practice-6:

const numbers = [12, 4, 23, 89, 35, 68, 79, 34, 67, 39, 20, 56, 59, 78, 9, 17];

const oddNumbers = numbers.filter((x) => x % 2 != 0);
console.log(oddNumbers);
console.log(...oddNumbers); //array theke oddNumbers ke spread kore dilam.
