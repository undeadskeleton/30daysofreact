// Find the person who has many skills in the users object.

// Count logged in users,count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let skills = 0;
let higherSkillsUser = "";
let highestPointUser = "";
let point = 0;
let mernCount = 0;

for (let data in users) {
  let userskills = users[data].skills.length;
  console.log(data, users[data]);
  // console.log(`The skill of ${data} are ${users[data].skills.join(" | ")}`);
  if (userskills > skills) {
    skills = userskills;
    higherSkillsUser = data;
  }
  let userPoint;

  userPoint = users[data].points;

  if (userPoint > point) {
    point = userPoint;
    highestPointUser = data;
  }

  let mernStack = ["MongoDB", "Express", "React", "Node"];
  let userStack = users[data].skills;
  let stackCount = 0;
  let hasMern, mernUser;

  for (let stack of userStack) {
    if (mernStack.includes(stack)) {
      stackCount++;
      console.log();
    }

    if (stackCount === 4) {
      users[data].hasMern = true;
      break;
    }
  }
  console.log(users[data]);
}

console.log(
  `${higherSkillsUser} has the highest skill with a total of ${skills} skills`
);

// Find people who are MERN stack developer from the users object

for (let user in users) {
  if (users[user].hasOwnProperty("hasMern")) {
    console.log(`${user} has learned the MERN stack`);
  }
}

console.log(`${highestPointUser} has the highest points of ${point}`);

// Set your name in the users object without modifying the original users object

users.Uday = {
  email: "uday@23gmail.com",
  skills: ["HTML", "CSS", "SCSS", "Javascript"],
  age: 28,
  isLoggedIn: false,
  points: 10,
};

console.log(users);

// Get all keys or properties of users object

for (let key in users) {
  // console.log(`${key} :\n ${Object.keys(users[key]).join(": ")} ${Object.values(users[key])}`);
  console.log(`${key}:\n`);

  for (let details in users[key]) {
    let userDetails = users[key][details];
    // console.log(`${userDetails}`);
    console.log(`\t${details} : ${userDetails}`);
  }
}

// Exercise 3

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Alex",
  lastName: "Hodd",
  income: "400000",
  expenses_properties: {
    totalIncome: "400000",
    accountInfo: "dummy2335dummy",
    totalExpense: "100000",
    addIncome: "5000",
    addExpense: "14000",
    accountBalance: "5000",
  },
};

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// let userSignUp = prompt("Enter a user name to SignUp");
let doesExist = false;

function signUp(arr) {
  for (let user of arr) {
    console.log(`The userName is now ${user.username}`);

    if (user.username === userSignUp) {
      alert("User already exist");
      doesExist = true;
    } else {
      console.log(`User dosent exist`);

      doesExist = false;
    }
  }

  if (!doesExist) {
    arr.push({
      id: prompt("Enter a new user ID:"),
      name: userSignUp,
      email: prompt("Enter your mail"),
      password: prompt("Enter a password"),
      createdAt: new Date(),
      isLoggedIn: true,
    });

    console.log(arr[arr.length - 1]);
    console.log(arr);
  }
}

// signUp(users2);

// b. Create a function called signIn which allows user to sign in to the application

function signIn(arr) {
  let userExist = false;
  let pass = "";
  let userName = prompt("Enter your user name:");
  for (let user of arr) {
    console.log(user);
    console.log(`${user.username} is trying ${userName}`);
    if (user.username === userName) {
      userExist = true;
      pass = user.password;
      break;
    } else {
      userExist = false;
    }
  }
  if (userExist) {
    let userPassword = prompt(`Enter your password:`);
    if (userPassword === pass) {
      alert("Logged in sucessfully");
    } else {
      alert("Bad credientials");
    }
  } else {
    alert("User dosent exist sign in first");
  }

  console.log(`Does ${userName} exist: ${userExist}`);
}

signIn(users2);
