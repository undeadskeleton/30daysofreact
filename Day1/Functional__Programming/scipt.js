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
