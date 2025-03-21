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

person2.nationality = "Ethiopian";
console.log(person2.nationality);
person2.country = "Asia";
console.log(person2.country);
person2.skills.push("Meteor");
person2.skills.push("Sass");
person2.title = "Coder";

person2.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .slice(0, this.skills.length - 1)
    .join(", ");

  let lastSkill = this.skills.slice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\n He lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

person2.getPersonInfo2 = function () {
  let skillsWithoutLastSkills = this.skills
    .slice(0, this.skills.length - 1)
    .join(", ");

  let lastSkill = this.skills.slice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkills} and ${lastSkill}`;
  let fullName = `${this.getFullName()}`;
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.city},${this.country}.\n His skill are ${skills}`;
  return statement;
};

console.log(`The getPersonInfo2 is \n ${person2.getPersonInfo2()}`);

// console.log(person2.getPersonInfo());

const person3 = {
  firstName: "Asmandgold",
  age: 245,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "Hooder",
  address: {
    street: "Heitamienkatu 15",
    probox: 2002,
    city: "Helsinki",
  },

  getPersonalInfo: function () {
    return `I am ${this.firstName} and i live in ${this.country}.\n I am ${this.age}`;
  },
};

const copyPerson = Object.assign({}, person3);
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys);
const addres = Object.keys(copyPerson.address);
console.log(addres);

const entries = Object.entries(copyPerson);
console.log(entries);

console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("title"));
