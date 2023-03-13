//   -------------------------------------------------********-------------------------------------------

//  Q1

// const people = [
//   { name: "Raj", age: 28 },
//   { name: "Swapnil", age: 42 },
//   { name: "Anushka", age: 35 },
// ];

// const getNames = ({ name }) => name;

// const names = people.map(getNames);

// console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const numbers = [1, 2, 3, 4];

// const multBy5 = (num) => num * 5;

// const multiplyByFive = numbers.map(multBy5);

// console.log(multiplyByFive); // Output: [5, 10, 15, 20]

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const employeeData = [
//   { name: "ram", dept: "marketer" },
//   { name: "Radha", dept: "SDE" },
//   { name: "shyam", dept: "finance professional" },
// ];

// const messageMaker = ({ name, dept }) =>
//   `Hi ${name} we are glad to have you as a ${dept}`;

// const greetEmployeeMessages = employeeData.map(messageMaker);

// console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
//   { title: "Pride and Prejudice", author: "Jane Austen" },
// ];

// const getTitles = ({ title }) => title;

// const getBookTitles = (books) => books.map(getTitles);

// const titles = getBookTitles(books);
// console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const studentName = [
//   "Ram",
//   "Anjali",
//   "Arpit",
//   "Bhanu Kumar",
//   "Jaya",
//   "Ankit",
//   "shayam",
// ];

// const filterNames = (name) => name[0] === "A";

// const studentNames = studentName.filter(filterNames);

// console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const productData = [
//   { prodName: "Dairy Milk", price: 10 },
//   { prodName: "Dairy Milk Silk", price: 70 },
//   { prodName: "Five Star", price: 20 },
//   { prodName: "Mars", price: 50 },
// ];

// const filterByPrice = ({ price }) => price > 40;

// const getProducts = (productData, val) => {
//   const filtered = productData.filter(filterByPrice);
//   return filtered;
// };

// console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const numbers = [1, 2, 3, 21, 14, 7];

// const findBy7 = (num) => num % 7 === 0;

// const isDivisibleBy7 = numbers.find(findBy7);

// console.log(isDivisibleBy7);
// Output: 21

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const names = [
//   "Mohan",
//   "Anjali",
//   "Geetanjali",
//   "Ankit",
//   "Bhanu Kumar",
//   "Ramakrishnan",
//   "shayam",
// ];

// const findLength = (word) => word.length > 8;

// const isNamesGreaterThan8 = (names) => names.find(findLength);

// console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const students = [
//   { name: "John", grade: "B" },
//   { name: "Mary", grade: "A" },
//   { name: "Sam", grade: "C" },
//   { name: "Sarah", grade: "A" },
// ];

// const findGrade = ({ grade }) => grade === "A";

// const findStudentWithGradeA = (students) => students.find(findGrade);

// const studentWithGradeA = findStudentWithGradeA(students);
// console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const students = [
//   { name: "John", grade: "B", scholarship: false },
//   { name: "Mary", grade: "B", scholarship: true },
//   { name: "Sam", grade: "A", scholarship: false },
//   { name: "Sarah", grade: "A", scholarship: true },
// ];

// const findStudentGivenCond = ({ grade, scholarship }) =>
//   grade === "A" || scholarship === true;

// const findStudent = (students) => students.find(findStudentGivenCond);

// const student = findStudent(students);
// console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }

//   -------------------------------------------------********-------------------------------------------

//  Q11

// const students = [
//   { name: "John", grade: "B", scholarship: false },
//   { name: "Mary", grade: "A", scholarship: true },
//   { name: "Sam", grade: "A", scholarship: false },
//   { name: "Sarah", grade: "B", scholarship: true },
// ];

// const findStudentOnGivenCond = ({ grade, scholarship }) =>
//   grade === "B" && scholarship === true;

// const findStudent = (students) => students.find(findStudentOnGivenCond);

// const student = findStudent(students);
// console.log(student);
// Output: { name: "Sarah", grade: "B", scholarship: true }

//   -------------------------------------------------********-------------------------------------------

//  Q12

// const bollywoodMovies = [
//   { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
//   {
//     title: "Amar Akbar Anthony",
//     director: "Manmohan Desai",
//     year: 1977,
//     rating: 7.6,
//   },
//   { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
//   { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
//   {
//     title: "Qayamat Se Qayamat Tak",
//     director: "Mansoor Khan",
//     year: 1988,
//     rating: 7.6,
//   },
//   { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
//   { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
// ];

// const filterMoviesOnGivenCond = ({ title, year, rating }) =>
//   year < 1990 && rating > 8.0;

// const onlyTitle = ({ title }) => title;

// const getBestOldBollywoodMovies = (bollywoodMovies) => {
//   const filteredMovies = bollywoodMovies.filter(filterMoviesOnGivenCond);

//   return filteredMovies.map(onlyTitle);
// };

// const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
// console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']
