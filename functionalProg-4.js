//   -------------------------------------------------********-------------------------------------------

//  Q1

// const strings = ["apple", "banana", "cherry", "date", "blueberry"];

// const totalLength = (strings) =>
//   strings.reduce((accum, curVal) => {
//     return (accum += curVal.length);
//   }, 0);

// console.log(totalLength(strings));
// Output: 30

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const numbers = [1, 2, 3, 4, 5];

// const sumSquares = (numbers) =>
//   numbers.reduce((accum, curVal) => {
//     return (accum += curVal * curVal);
//   });

// console.log(sumSquares(numbers));
// Output: 55

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const items = [
//   { name: "Item 1", price: 10 },
//   { name: "Item 2", price: 20 },
//   { name: "Item 3", price: 30 },
// ];

// const totalValue = (items) =>
//   items.reduce((accum, { price }) => {
//     return (accum += price);
//   }, 0);

// console.log(totalValue(items));
// Output: 60

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const concatStrings = (stringArr) =>
//   stringArr.reduce((accum, curVal) => {
//     return (accum += curVal);
//   });

// console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const numbers = [1, 2, 3, 4, 5];

// const product = (numbers) =>
//   numbers.reduce((accum, curVal) => {
//     return (accum *= curVal);
//   });

// console.log(product(numbers));
// Output: 120

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

// const longestString = (strings) =>
//   strings.reduce((accum, curVal) => {
//     return (accum = curVal.length > accum.length ? curVal : accum);
//   });

// console.log(longestString(strings));
// Output: 'Haule Haule'

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const people = [
//   { name: "Jeena", age: 25 },
//   { name: "Priya", age: 30 },
//   { name: "Naina", age: 45 },
// ];

// const oldestPersonName = (people) =>
//   people.reduce((accum, curVal, idx, people) => {
//     if (curVal.age > accum.age) {
//       accum = curVal;
//     }

//     if (idx == people.length - 1) return accum.name;

//     return accum;
//   });

// console.log(oldestPersonName(people));
// Output: 'Naina'

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 40 },
// ];

// const getAverageAge = (people) =>
//   people.reduce((accum, { age }, idx, people) => {
//     accum += age;

//     if (idx == people.length - 1) {
//       const avg = accum / people.length;
//       return { averageAge: avg };
//     }
//     return accum;
//   }, 0);

// console.log(getAverageAge(people));
// Output: { averageAge: 32.5 }

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const products = [
//   { name: "Bread", price: 10, quantity: 2 },
//   { name: "Clips", price: 20, quantity: 5 },
//   { name: "Knife", price: 30, quantity: 1 },
//   { name: "Slipper", price: 40, quantity: 3 },
// ];

// const findMostExpensiveProduct = (products) =>
//   products.reduce((accum, curVal) => {
//     accum =
//       accum.price * accum.quantity < curVal.price * curVal.quantity
//         ? curVal
//         : accum;
//     return accum;
//   });

// console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const fruits = [
//   "apple",
//   "banana",
//   "banana",
//   "cherry",
//   "apple",
//   "apple",
//   "banana",
// ];

// const countStrings = (fruits) =>
//   fruits.reduce((accum, curVal) => {
//     // accum[curVal] = (accum[curVal] || 0) + 1;
//     accum[curVal] = accum[curVal] ? ++accum[curVal] : 1; // use pre-increment not post increment it will not work
//     return accum;
//   }, {});

// console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
