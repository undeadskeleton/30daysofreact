class Person {
  constructor(
    firstName = "Undead",
    lastName = "skeleton",
    country = "Nether",
    city = "nowhere",
    age = "0",
    skills = [],
    score = 0
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.skills = skills;
    this.score = score;
  }

  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkills(skill) {
    this.skills.push(skill);
  }

  getPersonalInfo() {
    let fullName = this.firstName + " " + this.lastName;

    let skills = this.skills.length
      ? this.skills.length === 1
        ? this.skills[0]
        : this.skills.slice(0, -1).join(", ") + ` and ${this.skills.at(-1)}`
      : "";

    let formattedSkills = skills ? `He knows ${skills}` : " ";

    let info = `${fullName} is ${this.age}.HE lives ${this.city},${this.country}. ${formattedSkills}`;
    return info;
  }

  static favouriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

console.log(Person.favouriteSkill());
console.log(Person.showDateTime());

const person = new Person("Aston", "Ketchup", "Indonasia", "Filip", "35");
const person2 = new Person("Lidiya", "Tekle", "Turkey", "Turk", "21");
const person3 = new Person("Abraham", "Yetayeh", "United State", "12");
const person4 = new Person();

person.setScore = 1;
person.setSkills = "HTML";
person.setSkills = "CSS";
person.setSkills = "JavaScript";

console.log(person);
console.log(person.getFullName());
console.log(person.getPersonalInfo());

console.log(person2);
console.log(person2.getFullName());

console.log(person3);
console.log(person4);

//inheritance
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am a child of the person class");
  }

  getPersonalInfo() {
    let fullName = this.getFullName();

    let skills = this.skills.length
      ? this.skills.length === 1
        ? this.skills[0]
        : this.skills.slice(0, -1).join(", ") + `and ${this.skills.at(-1)} `
      : "";

    let formattedSkills = skills ? `He know ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} ${pronoun} is ${this.age}.${pronoun} lives in ${this.city},${this.country}.${pronoun} knows ${formattedSkills}`;
    return info;
  }
}
const s1 = new Student("Anisha", "Ghurauk", "Finland", "Bolun", 32, "Female");
s1.setScore = 2;
s1.setSkills = "HTML";
s1.setSkills = "CSS";
s1.setSkills = "Javascript";

console.log(s1);
s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonalInfo());

const s2 = new Student("Gukil", "Parth", "Logkia", "Canda", 12, "Male");
s2.setScore = 4;
s2.setSkills = "Planning";
s2.setSkills = "Oranization";
s2.setSkills = "Managing";
console.log(s2);
s2.saySomething();
console.log(s2.getFullName());
console.log(s2.getPersonalInfo());

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  set setColor(color) {
    this.color = color;
  }

  getAnimalInfo() {
    let type = this.legs < 4 ? true : false;
    let typeOfAnimal = type
      ? `walk on two and is bipedal`
      : ` walks on four and is quadpedal`;
    let info = `${this.name} is a ${this.color} animal and ${typeOfAnimal} and ${this.age} old`;

    return info;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs);
    this.type = type;
  }
  getColor() {
    console.log(`The cat is ${this.color}`);
  }

  getAnimalInfo() {
    let animalType = this.type === "cat" ? `cat` : "dog";
    let type = this.legs < 4 ? true : false;
    let typeOfAnimal = type
      ? `walk on two and is bipedal`
      : ` walks on four and is quadpedal`;
    let info = `${this.name} is a ${this.color} ${animalType} and ${typeOfAnimal} and ${this.age} old`;

    return info;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs);
    this.type = type;
  }

  getColor() {
    console.log(`The cat is ${this.color}`);
  }
}

const cat1 = new Cat("Tommy", 3, "black", 4, "cat");

console.log(cat1.getAnimalInfo());
cat1.getColor();
