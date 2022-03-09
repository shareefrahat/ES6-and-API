//Practice-11 & 12:

const company = {
  ceo: "John Doe",
  admin: {
    name: "Rohim",
    salary: 123588,
    dept: {
      hr: { total: 65, task: "human resource management" },
      other: { total: 47, task: "part time work" },
    },
  },
  engineering: {
    dept: "Textile",
    employee: 478,
    task: "enginnering development",
  },
  numbers: [46, 6, 098, 3, 67, 23, 80, 84, 53],
};

const hrm = company.admin.dept.hr;
console.log(hrm);

//optional chaining

const security = company?.admin?.dept?.security;
console.log(security);
