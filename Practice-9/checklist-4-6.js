//Practice-4:

const arr = [34, 8, 59, 23, 45, 78, 12, 82, 20, 68, 26, 39, 50, 3, 79];

const myFunc = (num) => num * 7;

const newArray = arr.map(myFunc);
// console.log(newArray);

//Practice-5:
//Description about map() vs forEach() and filter() vs find() : M-6, M-32

//Practice-6:

const student = {
  id: 46785,
  name: "Rohim Uddin",
  dept: "Programming",
  cgpa: 4.5,
};

//object destructuring
const { name, cgpa } = student;
console.log(name, cgpa);

//array destructuring
const [pen, balance, book, others] = arr;
console.log(balance);
