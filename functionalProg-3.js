//   -------------------------------------------------********-------------------------------------------

//  Q1

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const findCar = ({ make, year }) => make === "Toyota" && year > 2010;

// const findToyotaCar = (cars) => cars.find(findCar);

// const toyotaCar = findToyotaCar(cars);
// console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const filterCars = ({ year }) => year > 2012;

// const getCarDetails = (cars) => cars.filter(filterCars);

// const getCars = getCarDetails(cars);
// console.log(getCars);
// Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const products = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
//   { name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];

// const findProduct = ({ category }) => category === "electronics";

// const findElectronicsProduct = (products) => products.find(findProduct);

// const electronicsProduct = findElectronicsProduct(products);
// console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const products = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
//   { name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];

// const filterProducts = ({ category }) => category === "electronics";

// const getAllElectronicProducts = (products) => products.filter(filterProducts);

// const electronicProducts = getAllElectronicProducts(products);
// console.log(electronicProducts);
// Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const students = [
//   { name: "Alice", age: 16, grade: 90 },
//   { name: "Bob", age: 17, grade: 80 },
//   { name: "Charlie", age: 15, grade: 95 },
//   { name: "David", age: 16, grade: 85 },
// ];

// const filterStudentsByGrade = (students, passValue) =>
//   students.filter(({ grade }) => grade > passValue);

// const highGradeStudents = filterStudentsByGrade(students, 85);
// console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     pageCount: 193,
//   },
//   { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
// ];

// const findBookWithMoreThan500Pages = (books) =>
//   books.find(({ pageCount }) => pageCount > 500);

// const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
// console.log(bookWithMoreThan500Pages);
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const customers = [
//   { name: "John", age: 25, gender: "Male" },
//   { name: "Jane", age: 30, gender: "Female" },
//   { name: "Bob", age: 40, gender: "Male" },
//   { name: "Alice", age: 35, gender: "Female" },
// ];

// const getMaleCustomers = (customers) =>
//   customers.filter(({ gender }) => gender === "Male");

// const maleCustomers = getMaleCustomers(customers);
// console.log(maleCustomers);
// Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const games = [
//   {
//     title: "The Witcher 3: Wild Hunt",
//     developer: "CD Projekt Red",
//     genre: "RPG",
//   },
//   { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
//   { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
//   {
//     title: "The Legend of Zelda: Breath of the Wild",
//     developer: "Nintendo",
//     genre: "Adventure",
//   },
// ];

// const filterByGenre = (games, genre) =>
//   games.find(({ genre }) => genre === genre);

// const filteredGames = filterByGenre(games, "RPG");
// console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const getCarModel = (cars) => {
//   return cars.filter(({ year }) => year > 2012).map(({ model }) => model);
// };

// const carModels = getCarModel(cars);
// console.log(carModels);
// Output: ["Camry", "Mustang"]

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     pageCount: 193,
//   },
//   { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
// ];

// const getTitlesWithMoreThan700Pages = (books) => {
//   return books
//     .filter(({ pageCount }) => pageCount > 700)
//     .map(({ title }) => title);
// };

// const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books);
// console.log(booksWithMoreThan700Pages);
// Output: ["The Lord of the Rings"]

//   -------------------------------------------------********-------------------------------------------

//  Q11

// const numbers = [12, 23, 4, 2, 11, 21];

// const sumOfEvenNumbers = (numbers) =>
//   numbers.reduce((accum, curVal) => {
//     return (accum += curVal % 2 === 0 ? curVal : 0);
//   });

// console.log(sumOfEvenNumbers(numbers));
// Output: 18

//   -------------------------------------------------********-------------------------------------------

//  Q12

// const students = [
//   { name: "John", score: 80 },
//   { name: "Jane", score: 90 },
//   { name: "Bob", score: 75 },
//   { name: "Alice", score: 85 },
// ];

// const getAverageScore = (students) =>
//   students.reduce((accum, curVal, idx, arr) => {
//     let total = accum + curVal.score;

//     if (idx === arr.length - 1) {
//       return total / arr.length;
//     }

//     return total;
//   }, 0);

// console.log(getAverageScore(students));
// Output: 82.5

//   -------------------------------------------------********-------------------------------------------

//  Q13

// const products = [
//   { name: "Shirt", price: 20, quantity: 2 },
//   { name: "Pants", price: 30, quantity: 1 },
//   { name: "Shoes", price: 50, quantity: 1 },
//   { name: "Hat", price: 10, quantity: 3 },
// ];

// const getTotalCost = (products) =>
//   products.reduce((accum, { price, quantity }) => {
//     return (accum += price * quantity);
//   }, 0);

// console.log(getTotalCost(products));
// Output: 150

//   -------------------------------------------------********-------------------------------------------

//  Q14

// const strings = ["Hello", " ", "world", "!"];

// const concatenateStrings = (strings) =>
//   strings.reduce((accum, curVal) => {
//     return accum + curVal;
//   });

// console.log(concatenateStrings(strings));
// Output: "Hello world!"

//   -------------------------------------------------********-------------------------------------------

//  Q15

// const numbers = [10, 5, 8, 3, 6];

// const getMinimumNumber = (numbers) =>
//   numbers.reduce((accum, curVal) => {
//     return (accum = Math.min(accum, curVal));
//   });

// console.log(getMinimumNumber(numbers));
// Output: 3
