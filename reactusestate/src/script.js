function isFibonachi(num) {
  if (
    Number.isInteger(Math.sqrt(5 * num * num + 4)) ||
    Number.isInteger(Math.sqrt(5 * num * num - 4))
  ) {
    return true;
  }
  return false;
}

function fibonaci() {
  let randomNum = Math.floor(Math.random() * 25);
  console.log("Running fibonaci");
  do {
    if (isFibonachi(randomNum)) {
      console.log("Fibonacci number found: " + randomNum);
      return randomNum;
    }
    randomNum++;
  } while (randomNum < 100);
}

console.log(fibonaci());
