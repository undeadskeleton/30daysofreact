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

console.log(users);

for (let user in users) {
  if (users[user].hasOwnProperty("hasMern")) {
    console.log(`${user} has learned the MERN stack`);
  }
}

console.log(`${highestPointUser} has the highest points of ${point}`);
