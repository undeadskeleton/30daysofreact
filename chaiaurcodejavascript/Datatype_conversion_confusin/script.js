let score = undefined;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//Number conversion with Number()
//"333" => 333
// "333cc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = () => {
  return true;
};

let bolleanIsLoggedIn = Boolean(isLoggedIn);
console.log(bolleanIsLoggedIn);

//Boolen conversion with Boolean()
//"333" => true
// "333cc" => true
//0 => false
// "" => false
// null => false
// undefined => false
// NaN => false
//[]=> true
//{}=> true
//()=>{}=> true
