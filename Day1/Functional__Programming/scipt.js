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
