const countries = ["Finnland", "Estonia", "Sweden", "Norway", "Iceland"];

const newCountries = countries.map((country) => country.toUpperCase());

console.log(newCountries);

const countriesLength = countries.map((country) => country.length);

console.log(countriesLength);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => num * num);

console.log(squares);

//filter

const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);

console.log(countriesWithLand);

const countriesWithoutLand = countries.filter(
  (country) => !country.includes("land")
);

console.log(countriesWithoutLand);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const odd = numbers2.filter((num) => num % 2 !== 0);

const even = numbers2.filter((num) => num % 2 === 0);

console.log(`The even numbers are ${even} and odd numbers are ${odd}`);

//reduce

const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const concatnumber = numbers3.reduce((acc, cur) => acc + " " + cur, 6);

console.log(concatnumber);

const number4 = [1, 2, 3, 4, 5];

const value = number4.reduce((acc, cur) => acc * cur, 5);

console.log(value);

//find

const sixCharCountry = countries.find((country) => country.length === 6);

console.log(sixCharCountry);
//some

const evens = [0, 2, 4, 6, 8, 10];

const someAreEven = even.some((n) => n % 2 === 0);

console.log(`The array of even has some even numbers: ${someAreEven}`);
//every

const someAreOdd = even.every((n) => n % 2 !== 0);
console.log(`The array of even has every odd numbers: ${someAreOdd}`);

// Exercise

// Print the price of each product using forEach
// Calculate the sum of all the prices using forEach
// Print the product items as follows using forEach

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

let sumOfPrice = 0;

products.forEach((element) => {
  if (element.price === "" || element.price === " ") {
    console.log(
      `The price of each ${element.product} is ${element.price} unknown`
    );
  } else {
    console.log(
      `The price of each ${element.product} is ${element.price} euros`
    );
    sumOfPrice += element.price;
  }
});

console.log(`The sum of the prices of all element are ${sumOfPrice} euros`);
// Create an array of prices using map and store it in a variable prices

const prices = products.map((product) => product.price);

console.log(prices);

// Filter products with prices

const productsWithPrice = products.filter((product) => {
  return product.price !== "" && product.price !== " " ? true : false;

  //   if (product.price !== "" && product.price !== " ") {
  //     return true;
  //   } else {
  //     return false;
  //   }
});

console.log(productsWithPrice);

// Use method chaining to get the sum of the prices(map, filter, reduce)

const sumOfThePrice = products
  .filter((product) => {
    return product.price !== " " && product.price !== "" ? true : false;
  })
  .map((product) => product.price)
  .reduce((total, product) => total + product);

console.log(sumOfThePrice);

// Calculate the sum of all the prices using reduce only
console.log(
  `The sum of all the prices are ${products.reduce((total, p) => {
    return typeof p.price === "number" ? total + p.price : total;
  }, 0)}`
);

// Find the first product which doesn't have a price value
console.log(products.find((n) => n.price == " " || n.price == ""));

// Find the index of the first product which does not have price value
console.log(
  `The product at index ${products.findIndex(
    (n) => n.price == "" || n.price == ""
  )} dosent have price`
);

// Check if some products do not have a price value

if (products.some((p) => p.price === "" || p.price === " ")) {
  console.log(`Some of the products dosent have prices`);
} else {
  console.log(`Every products has prices`);
}

// Check if all the products have price value
if (products.every((p) => p.price !== "" && p.price !== " ")) {
  console.log(`Every product has prices`);
} else {
  console.log(`Not every products has prices`);
}
