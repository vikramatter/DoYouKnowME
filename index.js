var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Ciao! What's your name?\n");

console.log(`Benvenuto ${userName}!How Well Do You Know Vikram?`);

// array of high score
var highScores = [
  {
    name: "Vikram",
    score: 10,
  },

  {
    name: "Monu",
    score: 9,
  },

  {
    name: "Pintu",
    score: 8,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("\nSiuuuu, you are right!");
    score = score + 2;

  } else {
    console.log("\nSpiacente, you are wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------\n")
}

// array of objects
var questions = [
  {
    question: "\nWhere do I live?\n",
    answer: "Bareilly"
  },
  {
    question: "\nIn which year was I born?\n",
    answer: "1998"
  },
  {
    question: "\nWhich is my favourite sport?\n",
    answer: "Football"
  },
  {
    question: "\nWhich is my favourite foreign language?\n",
    answer: "Italian"
  },
  {
    question: "\nWho is my favourite football player?\n",
    answer: "Hazard"
  }
];

// loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Bravo! Your Score is: ", score);

console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}

console.log("\nThank you for taking the quiz!")