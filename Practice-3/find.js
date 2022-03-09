//Practice-7:

const phones = [
  { name: "iPhone", price: 1020999, color: "silver" },
  { name: "Samsung", price: 45000, color: "black" },
  { name: "OnePlus", price: 58000, color: "royal blue" },
  { name: "Simphony", price: 5000, color: "white" },
  { name: "Xiaomi", price: 25999, color: "orange" },
];

const cheapestPhone = phones.find((phone) => phone.price == 5000);
console.log(cheapestPhone);
