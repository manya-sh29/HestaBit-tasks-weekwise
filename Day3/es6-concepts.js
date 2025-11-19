// ------------------------------
// 1️⃣ let, const, and var
// ------------------------------

// var → can be redeclared and changed
var a = 10;
a = 15; 
console.log("var:", a);

// let → can be changed but not redeclared in same block
let b = 20;
b = 25;
console.log("let:", b);

// const → cannot be changed
const c = 30;
console.log("const:", c);

// ------------------------------
// 2️⃣ Arrow Function
// ------------------------------
const sayHello = (user) => {
  return `Hello, ${user}!`;
};
console.log(sayHello("Manya"));

// ------------------------------
// 3️⃣ Array Methods - map, filter, reduce
// ------------------------------
const numbers = [1, 2, 3, 4, 5];

// map → make a new array by multiplying by 2
const double = numbers.map(n => n * 2);
console.log("Doubled Numbers:", double);

// filter → get only even numbers
const even = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", even);

// reduce → add all numbers together
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total Sum:", total);

// ------------------------------
// 4️⃣ Object Destructuring
// ------------------------------
const student = {
  id: 101,
  name: "Manya",
  course: "CSE"
};

// extracting values from object
const { id, name, course } = student;
console.log("Student Info:", id, name, course);

// ------------------------------
// 5️⃣ Template Literals
// ------------------------------
const message = `Student ${name} (ID: ${id}) is studying ${course}.`;
console.log(message);
