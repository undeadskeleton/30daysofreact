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
