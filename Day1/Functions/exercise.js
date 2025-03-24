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
