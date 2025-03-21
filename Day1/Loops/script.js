const number = [1, 2, 3, 4, 5];

number.forEach((num, i) => {
  console.log(num, i);
});

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];

countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase(), arr);
});

a = "fuck";
b = 69;

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);

const person2 = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  "phone number": "+3584545454545",
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.country);
console.log(person2.skills.join(" ").toString());
console.log(person2.getFullName());
console.log(person2["phone number"]);
