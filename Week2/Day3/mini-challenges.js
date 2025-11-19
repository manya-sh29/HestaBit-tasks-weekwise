// ------------------------------
// 1. let, const, and var
// ------------------------------
var x = 5;       // function-scoped
let y = 10;      // block-scoped
const z = 15;    // constant (cannot be reassigned)

console.log("x =", x, ", y =", y, ", z =", z);

// ------------------------------
// 2. Arrow Function
// ------------------------------
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Manya"));

// ------------------------------
// 3. Array Methods - map(), filter(), reduce()
// ------------------------------
const numbers = [1, 2, 3, 4, 5];

// map → multiply each number by 2
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// filter → keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// reduce → find total sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// ------------------------------
// 4. Object Destructuring
// ------------------------------
const student = {
  id: 101,
  name: "Manya",
  course: "CSE"
};

// Extract values directly
const { id, name, course } = student;
console.log(`ID: ${id}, Name: ${name}, Course: ${course}`);

// ------------------------------
// 5. Template Literals
// ------------------------------
const info = `Student ${name} (ID: ${id}) is enrolled in ${course}.`;
console.log(info);

// ------------------------------
// 6. Bonus Challenge - Average Calculation
// ------------------------------
const marks = [85, 90, 78];
const average = marks.reduce((sum, m) => sum + m, 0) / marks.length;
console.log("Average Marks:", average);
