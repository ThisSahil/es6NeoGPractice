//   ------------------------------------------------------------*****-------------------------------------------

//  Q1

// const getMaxElement = (array) => {
//   let max = 0;
//   array.forEach((element) => {
//     if (element > max) max = element;
//   });

//   return max;
// };

// let array = [4, 78, 8, 3, 6, 0, 12, 34];
// console.log(getMaxElement(array)); // 78

//   ------------------------------------------------------------*****-------------------------------------------

//  Q2

// const calculateAverage = (array) => {
//   let sum = 0;

//   array.forEach((element) => {
//     sum += element;
//   });

//   return sum / array.length;
// };

// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

//   ------------------------------------------------------------*****-------------------------------------------

//  Q3

// const convertEvenToOdd = (numArr) => {
//   numArr.forEach((element, idx, numArr) => {
//     if (element % 2 == 0) numArr[idx] = numArr[idx] + 1;
//   });

//   return numArr;
// };

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

//   ------------------------------------------------------------*****-------------------------------------------

//  Q4

// const filterWords = (words) => {
//   const ans = [];

//   words.forEach((element) => {
//     if (element.length > 5) ans.push(element);
//   });

//   return ans;
// };

// var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
// console.log(filterWords(words)); // ["repeat", "community"]

//   ------------------------------------------------------------*****-------------------------------------------

//  Q5

// const capitalizeWords = (words) => {
//   const ans = [];

//   words.forEach((element) => {
//     ans.push(element.toUpperCase());
//   });

//   return ans;
// };

// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

//   ------------------------------------------------------------*****-------------------------------------------

//  Q6

// const getValues = (data, prop) => {
//   const ans = [];

//   data.forEach((element) => {
//     ans.push(element[prop]);
//   });
//   return ans;
// };

// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     "name"
//   )
// ); // ["John", "Mary", "Peter"]

//   ------------------------------------------------------------*****-------------------------------------------

//  Q7

// const podAndTeamAllocation = (userData) => {
//   userData["teamId"] = 667543;
//   return userData;
// };

// const userData = { firstName: "John", lastName: "Dee" };
// console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

//   ------------------------------------------------------------*****-------------------------------------------

//  Q8

// const checkForTeam = (user) => {
//   const temp = { team: "A" };
//   const ans = { ...temp, ...user };
//   return ans;
// };

// console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// // {firstName: 'Penn', lastName: 'Ma', team: A}

// console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// // {firstName: 'John', lastName: 'Dee', team: B}

// console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: A}

//   ------------------------------------------------------------*****-------------------------------------------

//  Q9

// const book = {
//   title: "JavaScript: The Definitive Guide",
//   authors: [
//     { name: "David Flanagan", age: 49 },
//     { name: "Yukihiro Matsumoto", age: 57 },
//   ],
//   publisher: { name: "O'Reilly Media", location: "CA" },
// };

// const {
//   title,
//   authors: [{ name: author1 }, { name: author2 }],
//   publisher: { name: publisherName },
// } = book;

// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media

//   ------------------------------------------------------------*****-------------------------------------------

//  Q10

const sumOfAges = (arrray) => {
  let sum = 0;
  array.forEach(({ age }) => {
    sum += age;
  });

  return sum;
};

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121
