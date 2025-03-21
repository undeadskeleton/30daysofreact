// let num = 23;

// if (num % 2 === 0) {
//   console.log(`The ${num} is even`);
// } else {
//   console.log(`The ${num} is odd`);
// }

// num % 2 === 0
//   ? console.log(`The ${num} is even`)
//   : console.log(`The ${num} is odd`);

//   Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age");

// age > 17
//   ? alert("You are old enough to drive")
//   : alert14(`Pls wait for another ${18 - age} years`);

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = prompt("Enter your age");
// let yourAge = 38;

// myAge > yourAge
//   ? console.log(`${myAge} is older than ${yourAge}`)
//   : console.log(`${yourAge} is older than ${myAge}`);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// using if else
// ternary operator.
// let a = 4
// let b = 3
//   4 is greater than 3

// let a = 23;
// let b = 3;

// a > b
//   ? console.log(`${a} is greater than ${b}`)
//   : console.log(`${b} is greater than ${a}`);

// // let num = prompt("Enter a number");

// a % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let marks = prompt("Enter your marks");

// if (marks < 100 && marks > 80) {
//   console.log("A");
// } else if (marks < 89 && marks > 79) {
//   console.log("B");
// } else if (marks < 69 && marks > 60) {
//   console.log("C");
// } else if (marks < 59 && marks > 50) {
//   console.log("D");
// } else if (marks < 49 && marks > 15) {
//   console.log("F");
// } else {
//   console.log("You failed");
// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let season = prompt("Enter the month");
// console.log(season);
// console.log(season.toLocaleLowerCase());

// if (
//   season.toLocaleLowerCase() === "september" ||
//   season.toLocaleLowerCase() === "october" ||
//   season.toLocaleLowerCase() === "november"
// ) {
//   console.log("The season is Autumn");
// } else if (
//   season.toLocaleLowerCase() === "december" ||
//   season.toLocaleLowerCase() === "january" ||
//   season.toLocaleLowerCase() === "february"
// ) {
//   console.log("The season is Winter");
// } else if (
//   season.toLocaleLowerCase() === "march" ||
//   season.toLocaleLowerCase() === "april" ||
//   season.toLocaleLowerCase() === "may"
// ) {
//   console.log("The season is Spring");
// } else if (
//   season.toLocaleLowerCase() === "june" ||
//   season.toLocaleLowerCase() === "july" ||
//   season.toLocaleLowerCase() === "august"
// ) {
//   console.log("The season is summer");
// } else {
//   console.log("Not a month");
// }
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

// let weekday = prompt("Enter the weekday");
// weekday = weekday.toLowerCase();
// console.log(weekday);

// switch (weekday) {
//   case "saturday":
//     console.log(
//       `${weekday.charAt(0).toLocaleLowerCase() + weekday.slice(1)} is weekend`
//     );
//     break;
//   case "sunday":
//     console.log(
//       `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} is weekend`
//     );
//     break;
//   default:
//     console.log(
//       `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} is workday`
//     );
// }

let month = prompt("Enter a month of the year");

month = month.toLowerCase();

if (month === "feburary") {
  console.log(`${month.charAt(0) + month.slice(1)} has 28 days`);
} else if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "september" ||
  month === "november" ||
  month === "december"
) {
  console.log(`${month.charAt(0) + month.slice(1)} has 31 days`);
} else {
  console.log(`${month.charAt(0) + month.slice(1)} has 30 days`);
}
