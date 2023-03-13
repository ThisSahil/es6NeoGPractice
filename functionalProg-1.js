//   -------------------------------------------------********-------------------------------------------

//  Q1

// const incBy3 = (num) => num + 3;

// const incrementNumbers = (numbers) => numbers.map(incBy3);

// const numbers = [1, 2, 3, 4, 5];
// console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const convertCapital = (word) => word.toUpperCase();

// const capitalizeArray = (myArray) => myArray.map(convertCapital);

// const myArray = ["apple", "banana", "cherry"];
// console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const giveAge = ({ age }) => age;

// const getAges = (people) => people.map(giveAge);

// const people = [
//   { name: "Ankit", age: 25 },
//   { name: "Vinit", age: 24 },
//   { name: "Shashi", age: 29 },
// ];
// const ages = getAges(people);
// console.log(ages); // Output: [25, 24, 29]

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const convertLower = ({ name }) => name.toLowerCase();

// const getProductNamesInLowerCase = (products) => products.map(convertLower);

// const products = [
//   { name: "Lip Balm", stock: 100 },
//   { name: "PERFUME", stock: 400 },
//   { name: "Socks", stock: 200 },
// ];
// console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const getName = ({ name }) => name;

// const getCityNames = (cities) => cities.map(getName);

// const cities = [
//   { name: "New York", population: 8538000 },
//   { name: "Los Angeles", population: 3976000 },
//   { name: "Bangalore", population: 13608000 },
// ];

// console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const filterFruitLength = (word) => word.length > 5;

// const filterLongStrings = (fruits) => fruits.filter(filterFruitLength);

// const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
// console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const filterNums = (num) => num % 3 == 0 && num % 5 == 0;

// const isDivisibleBy3and5 = (numbers) => numbers.filter(filterNums);

// const numbers = [1, 2, 30, 4, 15];
// console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const filterObjs = ({ age }) => age > 30;

// const filterByAge = (people) => people.filter(filterObjs);

// const people = [
//   { name: "Rahul", age: 25 },
//   { name: "Raj", age: 35 },
//   { name: "Vijay", age: 45 },
// ];

// console.log(filterByAge(people));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const filterScore = ({ score }) => score > 80;

// const filterByScore = (students) => students.filter(filterScore);

// const students = [
//   { name: "Aditya", score: 85 },
//   { name: "Bob", score: 75 },
//   { name: "Charlie", score: 90 },
// ];

// console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const filterCityAndAge = ({ city, age }) => city == "Indore" && age > 70;

// const filterByCityAndAge = (people) => people.filter(filterCityAndAge);

// const people = [
//   { name: "Ridhima", age: 75, city: "Indore" },
//   { name: "Akshay", age: 60, city: "Delhi" },
//   { name: "Udit", age: 80, city: "Indore" },
//   { name: "Venki", age: 80, city: "Bangalore" },
// ];
// const filteredPeople = filterByCityAndAge(people);
// console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//   -------------------------------------------------********-------------------------------------------

//  Q11

// const filterGenre = ({ genre }) => genre == "Science Fiction";

// const filterByGenre = (books) => books.filter(filterGenre);

// const books = [
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     genre: "Science Fiction",
//   },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//   { title: "1984", author: "George Orwell", genre: "Science Fiction" },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
// ];

// const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//   -------------------------------------------------********-------------------------------------------

//  Q12

// const filterSalaryAge = ({ salary, age }) => salary > 22000 && age > 25;

// const filterBySalary = (employees) => employees.filter(filterSalaryAge);

// const employees = [
//   { name: "Abhay", age: 25, salary: 20000 },
//   { name: "Joice", age: 30, salary: 35000 },
//   { name: "Reena", age: 35, salary: 15000 },
//   { name: "Jeena", age: 40, salary: 50000 },
// ];

// const filteredEmployees = filterBySalary(employees, 22000, 25);
// console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
