let sum = (...args) => {
  let result = 0;
  for (let num of args) {
    result += num;
  }
  return result;
};

// console.log(sum(1, 2, 3, 4, 5));

(function (n) {
  console.log(n * n);
})(4);

let powerOf = (function (n) {
  return n * n;
})(20);

console.log(powerOf);

function know(name = "Peter") {
  console.log(`${name} welcom here`);
}

console.log(know());

console.log(know("Beter"));

// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Stern", "Julis"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(54, 3));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

function circleArea(p) {
  return (p * p * Math.PI * 100 - ((p * p * Math.PI * 100) % 1)) / 100;
}

console.log(circleArea(2));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit(a) {
  return a * (9 / 5) + 32;
}

console.log(`${convertCelciusToFahrenheit(45)}deg C`);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function getBMI(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "UnderWeight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal Weight";
  } else if (bmi > 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return `"Obese" with bmi of ${bmi}`;
  }
}

console.log(getBMI(69, 1.73));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  month = month.toLowerCase();
  let autumn = ["augest", "september", "october"];
  let winter = ["november", "december", "january"];
  let spring = ["febuary", "march", "april"];
  let summner = ["june", "july", "may"];

  if (autumn.includes(month)) {
    return `Season is autumn`;
  } else if (winter.includes(month)) {
    return `Season is winter`;
  } else if (spring.includes(month)) {
    return `Season is spring`;
  } else if (summner.includes(month)) {
    return `Season is summer`;
  } else {
    return `Not a valid month`;
  }
}

console.log(checkSeason("January"));
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a = 0, b = 0, c = 0) {
  if (a === 0 && b === 0 && c === 0) {
    return 0;
  } else {
    return [
      ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a,
      ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a,
    ];
  }
}
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (let ele of arr) {
    console.log(ele);
  }
}

console.log(
  printArray([
    "aryt",
    23,
    423.3,
    { id: "undead", age: 23, email: "userID@gmail.com" },
  ])
);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  const now = new Date();
  console.log(
    `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes()}`
  );
}

showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

console.log(swapValues(4, 1).forEach((item) => console.log(item)));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let newArr = [];
  for (let ele of arr) {
    newArr.push(ele.charAt(0).toUpperCase() + ele.slice(1));
  }

  return newArr;
}

console.log(capitalizeArray(["sam", "onion", "tomate"]));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(a) {
  let len = a.toString().length;
  let numArr = [];
  for (let i = 0; i < len; i++) {
    numArr[i] = a % 10;
    console.log(`The number at index ${i} is  ${numArr[i]}`);

    a = (a / 10) | 0;
    console.log(`After divingin by 10 a is ${a}`);
  }

  numArr.reverse();
  let even = 0,
    odd = 0;

  for (let num of numArr) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return [even, odd];
}

const [even, odd] = evensAndOdds(1334);

console.log(
  `The number of even number is ${even} and number of odd number is ${odd}`
);

function evensAndOdds2(a) {
  let even = 0,
    odd = 0;
  for (let i = 0; i < a; i++) {
    if (i % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return [even, odd];
}

const [even2, odd2] = evensAndOdds2(100);

console.log(`The number of even are ${even2}\n The number of odd are ${odd2}`);

//Write a function which takes any number of arguments and return the sum of the arguments

function sum2() {
  let result = 0;
  for (let num of arguments) {
    result += num;
  }

  return result;
}

console.log(sum2(1, 2, 3, 4));
//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator(len = 7) {
  let randomchar = "1234567890ABCDEFGHIJKLMNOPabcdefghijklmnop";
  let randomId = "";
  for (let i = 1; i <= 7; i++) {
    randomId += randomchar.charAt(
      Math.floor(Math.random() * randomchar.length)
    );
  }
  return randomId;
}

console.log(userIdGenerator());

// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
  let len = prompt("Enter the length of the Id ");
  let noOfId = prompt("Enter the no of Id needed to be generated");
  let str = "0123456789ABCDEFGHIFKLMNOPabcdefghijklmnop";
  let id = "";

  for (let i = 0; i < noOfId; i++) {
    for (let j = 0; j < len; j++) {
      id += str.charAt(Math.round(Math.random() * str.length));
      if (j === len - 1) {
        id += "\n";
      }
    }
  }

  return id;
}

// alert(userIdGeneratedByUser());

// Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(type, noOfColor) {
  let generatedColor = "";
  let hexastr = "1234567890abcdef";
  let ColorGroup = [];
  if (type.toLowerCase() === "hexa") {
    for (let j = 0; j < noOfColor; j++) {
      generatedColor += "#";
      for (let i = 0; i < 6; i++) {
        generatedColor += hexastr.charAt(
          Math.floor(Math.random() * hexastr.length)
        );
      }
      ColorGroup[j] = generatedColor;
      generatedColor = "";
    }

    return ColorGroup;
  } else if (type.toLowerCase() === "rgb") {
    for (let i = 0; i < noOfColor; i++) {
      generatedColor = "rgb(";
      console.log(generatedColor);

      for (let j = 0; j < 3; j++) {
        generatedColor = generatedColor.concat(Math.floor(Math.random() * 255));
        console.log(generatedColor);
        if (j === 2) {
          console.log(`The j is ${j}`);

          generatedColor += ")";
        } else {
          generatedColor += ",";
        }
      }
      ColorGroup[i] = generatedColor;
      generatedColor = "";
    }
    return ColorGroup;
  }
}

console.log(generateColors("rgb", 3));

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    if (randomIndex === i) {
      continue;
    }

    arr[i] = arr[i] + arr[randomIndex];
    arr[randomIndex] = arr[i].slice(0, arr[i].length - arr[randomIndex].length);
    arr[i] = arr[i].slice(arr[randomIndex].length);
  }

  return arr;
}

console.log(shuffleArray(["apple", "banana", "orange", "pear", "tomato"]));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Sry the array dosent contain all numbers";
      break;
    } else {
      avg += arr[i];
    }
  }

  return avg / arr.length;
}

console.log(average([12, 24, 4, 50]));
