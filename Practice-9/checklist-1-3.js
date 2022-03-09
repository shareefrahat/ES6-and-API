//-----------------Checklists-------------------\\

//Practice-1:

const company = {
  details: {
    name: "XYZ",
    location: "Chittagong",
    manpower: 34785,
    acc: { daily: 54645, monthly: 5987698, comment: "Very expensive" },
  },
  revenue: 48375,
  isAvailable: true,
  dept: ["Admin", "HR", "Engineering", "Complience", "Security", "Labour"],
  print: function () {
    return this.revenue;
  },
  task: function (value1, value2) {
    sum = value1 + this.revenue - value2;
    return sum;
  },
};

console.log(company.task(10000, 375));

//Practice-2:

const template = `Name: ${company.details.name}, Expense: ${
  company.details.acc.monthly
}, Department: ${company.dept[3]}, Revenue: ${company.print()}`;

console.log(template);

//Practice-3.1:

const numbers = () => 89;
console.log(numbers());

//Practice-3.2:

const divide = (num) => num / 7;
console.log(divide(14));

//Practice-3.3:

const input = (num1, num2) => (num1 + num2) / 2;
console.log(input(10, 6));

//Practice-3.4:

const multiple = (input1, input2) => {
  const num1 = input1 + 7;
  const num2 = input2 + 7;

  return num1 + num2;
};

console.log(multiple(5, 8));
