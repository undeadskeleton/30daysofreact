// Declare an empty array;
let emArr = [];

console.log(`Empty array: ${emArr}`);

// Declare an array with more than 5 number of elements
emArr = ["atom", 2, 35, [2.5, 2354]];

console.log(`Different type of value in array ${emArr.join("=> ,")}`);

// Find the length of your array
console.log(`Length of emArr : ${emArr.length}`);

// Get the first item, the middle item and the last item of the array
console.log(
  `The first item is ${emArr[0]} \n The middle item is ${
    emArr[Math.floor(emArr.length / 2)]
  } \n The last item is ${emArr[emArr.length - 1]}`
);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixDataTypes = ["atom", 2, 35, [2.5, 2354], { a: 3, b: 0, c: -12 }];
console.log(mixDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(`The name of it companies is ${itCompanies.join("\n")}`);

// Print the array using console.log()
// Print the number of companies in the array
console.log(`The number of companies is : ${itCompanies.length}`);

// Print the first company, middle and last company
console.log(
  `The first item is: ${itCompanies[0]} \n The middle item is: ${
    itCompanies[Math.floor(itCompanies.length / 2)]
  } \n The last item is: ${itCompanies[itCompanies.length - 1]}`
);
// Print out each company
console.log(`The IT companies are :\n ${itCompanies.join("\n")}`);

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.map((str) => str.toUpperCase()).join("\n"));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies.join(", ")} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Flipkar")) {
  console.log("Flipkart is big now");
} else {
  console.log("Flipkart dosent exist");
}
// Filter out companies which have more than one 'o' without the filter method
function comFilter(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    let c = 0,
      pos = 0;
    let element = arr[i];
    for (const char of element) {
      if (char.toLowerCase() === "o") {
        c++;
      }
    }

    if (c > 1) {
      console.log(`${element} has more "o"`);
      arr.splice(arr.indexOf(element), 1);
    }
  }

  console.log(arr);
}
// comFilter(itCompanies);

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(`The first three ${itCompanies.slice(0, 3).join(", ")}`);

// Slice out the last 3 companies from the array
console.log(`The last three ${itCompanies.slice(-3).join(", ")}`);

// Slice out the middle IT company or companies from the array
console.log(
  `The companies in middle ${itCompanies
    .slice(
      Math.floor(itCompanies.length / 2),
      Math.ceil(itCompanies.length / 2)
    )
    .join(", ")}`
);

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
let half = Math.round(itCompanies.length / 2);
console.log(half);

console.log(itCompanies.slice(half, half + 1));

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
console.log(itCompanies.splice());

// Exercise: Level 2
// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
console.log(webStack);
console.log(countries);

// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const textArr = text.split(" ");
console.log(textArr);

// In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes("Euthopia")) {
  console.log("EUTHOPIA");
} else {
  countries.push("Euthopia");
  console.log(countries);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webStack.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webStack.push("Sass");
  console.log(webStack);
}

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

// 1.Slice the first ten countries from the countries array

// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
