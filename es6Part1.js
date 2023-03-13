// Your ES6 code here

// Q1

// const isEligibleToVote = (age) => age >= 18;

// console.log(isEligibleToVote(20)); // Eligible to vote
// console.log(isEligibleToVote(18)); // Eligible to vote
// console.log(isEligibleToVote(17)); // Not eligible to vote

// --------------------------------------------------------------------------------------------

// Q2

// const isGreater = (a, b) => {
//   return a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
// };

// console.log(isGreater(2, 5)); // 5 is greater than 2
// console.log(isGreater(10, 5)); // 10 is greater than 5

// --------------------------------------------------------------------------------------------

// // Q3

// const checkNum = (num) => (num > 0 ? "Positive Number" : "Negative Number");

// console.log(checkNum(9)); // Positive Number
// console.log(checkNum(-8)); // Negative Number
// console.log(checkNum(22)); // Positive Number

// --------------------------------------------------------------------------------------------

// Q4.

// const isEvenOdd = (num) => (num % 2 == 0 ? "Even Number" : "Odd Number");

// console.log(isEvenOdd(5)); // Odd Number
// console.log(isEvenOdd(8)); // Even Number
// console.log(isEvenOdd(10)); // Even Number

// --------------------------------------------------------------------------------------------

// Q5

// const checkForAlphabetA = (str) => {
//   str = str.toLowerCase();
//   return str.includes("a") === true ? "Includes a" : "Does not include a";
// };

// console.log(checkForAlphabetA("TAnay")); // Includes a
// console.log(checkForAlphabetA("Jeep")); // Does not include a
// console.log(checkForAlphabetA("Jane")); // Includes a

// --------------------------------------------------------------------------------------------

//  Q6

// const checkLength = (str) =>
//   str.length > 5 ? "more than 5 characters" : "less than 5 characters";

// console.log(checkLength("Programming")); // more than 5 characters
// console.log(checkLength("Jeep")); // less than 5 characters

// --------------------------------------------------------------------------------------------

// Q7

// const isBetweenOneAndTen = (num) => num >= 1 && num <= 10;

// console.log(isBetweenOneAndTen(5)); // true
// console.log(isBetweenOneAndTen(11)); // false

// --------------------------------------------------------------------------------------------

// Q8

// const isHelloPresent = (str) => {
//   str = str.toLowerCase();
//   return str.includes("hello");
// };

// console.log(isHelloPresent("Hello World")); // true
// console.log(isHelloPresent("World")); // false

// --------------------------------------------------------------------------------------------

//  Q9

// const isMultipleOfThree = (num) => num % 3 === 0;

// console.log(isMultipleOfThree(5)); // false
// console.log(isMultipleOfThree(9)); // true

// --------------------------------------------------------------------------------------------

// Q10

// const multiplyByTen = (num) => num * 10;

// console.log(multiplyByTen(20)); // 200
// console.log(multiplyByTen(40)); // 400

// --------------------------------------------------------------------------------------------

//  Q11

// const product = {
//   title: "iPhone",
//   price: 5999,
//   description: "The iPhone is a smartphone developed by Apple",
// };

// const { title, price, description } = product;

// console.log(title); // iPhone
// console.log(price); // 5999
// console.log(description); // The iPhone is a smartphone developed by Apple

// --------------------------------------------------------------------------------------------

// Q12

// const book = {
//   title: "Harry Porter",
//   author: "JK Rowling",
//   pages: 15,
// };

// const getBookDetails = ({ pages }) => pages > 100;

// console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
// console.log(getBookDetails(book)); // logs 'false' if the pages are 100 or below

// --------------------------------------------------------------------------------------------

// Q13

// const person = {
//   name: "Amit",
//   age: 25,
//   occupation: "Software Engineer",
// };

// const changeOccupation = (person, newOccupation) =>
//   (person.occupation = newOccupation);

// console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
// changeOccupation(person, "Product Manager");
// console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

// --------------------------------------------------------------------------------------------

// Q14

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

// --------------------------------------------------------------------------------------------

// Q15

// function defaultParamsFunc(a, b, c) {
//   if (c === undefined) {
//     c = 4;
//   }
//   return a * b * c;
// }

// defaultParamsFunc = (a, b, c = 4) => a * b * c;

// console.log(defaultParamsFunc(3, 1)); // 12
// console.log(defaultParamsFunc(3, 10)); // 120
