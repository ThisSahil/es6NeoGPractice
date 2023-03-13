//  Q1

// const formatArray = () =>
//   `The array has ${items.length} items, and the first item is "${
//     items[0]
//   }", and the last item is "${items[items.length - 1]}".`;

// const items = ["apple", "banana", "orange"];
// const message = formatArray(items);
// console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".

//  Q2

// const formatProduct = ({ name, price, inStock }) =>
//   `${name} costs INR ${price} and is ${
//     inStock === true ? "in stock" : "not in stock"
//   }`;

// const product = {
//   name: "Socks",
//   price: 249,
//   inStock: true,
// };

// const message = formatProduct(product);
// console.log(message);
// Socks costs INR 249 and is in stock.

//   ------------------------------------------------------------*****-------------------------------------------

//  Q3

// const findPerson = (persons, name) =>
//   persons.find((person) => person.name === name);

// console.log(
//   findPerson(
//     [
//       { name: "Amay", age: 25 },
//       { name: "Akhil", age: 25 },
//     ],
//     "Amay"
//   )
// );

//   ------------------------------------------------------------*****-------------------------------------------

//  Q4

// const pickFirstAndSecond = ([a, b, ...arr]) => ({ first: a, second: b });

// console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// // {first: 'orange', second: 'banana'}

// console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}

//   ------------------------------------------------------------*****-------------------------------------------

//  Q5

// function startsWithA(str) {
//   if (str.charAt(0) === "A") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const startsWithA = (name) => name.charAt(0) === "A";

// console.log(startsWithA("Akshita"));
// // true
// console.log(startsWithA("Jeena"));
// false

//   ------------------------------------------------------------*****-------------------------------------------

//  Q6

// const printFirstCharacter = ([a, ...arr]) => a;

// console.log(printFirstCharacter([1, 2, 3, 5, 8]));
// 1

//   ------------------------------------------------------------*****-------------------------------------------

//  Q7

// const printLastFive = ([a, b, ...arr]) => arr;

// console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]

//   ------------------------------------------------------------*****-------------------------------------------

//  Q8

// const printSecondCharacter = ([a, b, ...arr]) => b * 20;

// console.log(printSecondCharacter([1, 2, 3, 5, 8]));
// 40

//   ------------------------------------------------------------*****-------------------------------------------

//  Q9

// const sayHello = ([, b, ...arr]) => `Hello ${b}`;

// console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]));
// // Hello Sweta

// console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]));
// Hello Rakesh

//   ------------------------------------------------------------*****-------------------------------------------

//  Q10

// const sumOfEvenIndices = (arr) => {
//   let sum = 0;
//   arr.forEach((elem, idx) => {
//     sum += idx % 2 == 0 ? arr[idx] : 0;
//   });

//   return sum;
// };

// console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
// console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30

//   ------------------------------------------------------------*****-------------------------------------------

//  Q11

// const sumFirstTwoElements = ([a, b]) => a + b;

// console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
// console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26

//   ------------------------------------------------------------*****-------------------------------------------

//  Q12

// const printMultipleOfFive = (arr) => {
//   return arr.find((elem) => elem % 5 == 0);
// };

// console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
// console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5

//   ------------------------------------------------------------*****-------------------------------------------

//  Q13

// const getAddress = ({ postalCode, city }) => ({
//   postalCode: postalCode,
//   city: city,
// });

// const userData = {
//   name: "Jane Doy",
//   postalCode: "12134",
//   city: "Germany",
// };

// console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}

//   ------------------------------------------------------------*****-------------------------------------------

//  Q14

// const printData = ({ name, country }) => `${name} lives in ${country}`;

// const userData1 = {
//   name: "Gaurav",
//   postalCode: "12134",
//   country: "Japan",
// };
// console.log(printData(userData1)); // Gaurav lives in Japan

// const userData2 = {
//   name: "Pritam",
//   postalCode: "560223",
//   country: "India",
// };
// console.log(printData(userData2)); // Pritam lives in India

//   ------------------------------------------------------------*****-------------------------------------------

//  Q15

// const printProductDetails = ({ name, specification: { capacity, size } }) =>
//   `${name} which is of ${size}, has a capacity of ${capacity}`;

// const product = {
//   name: "Apple MacBook Air 2020",
//   specification: {
//     capacity: "256GB",
//     size: "13.3 Inch",
//   },
//   price: 82900,
// };
// console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.
