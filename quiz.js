var readlineSync = require("readline-sync");
var chalk = require("chalk");

var qColor = chalk.yellow;
var cAns = chalk.green;
var wAns = chalk.red;
var sColor = chalk.blue;
var sBackColor = chalk.bgYellowBright;
var uname = chalk.cyanBright;
var hMessageCol = chalk.greenBright;

var ansObj = {
  "Which character has a twin ?": ["Rachel", "Phoebe", 2],
  "How many sisters does Joey have ?": ["6 Sisters", "7 Sisters", 2],
  "How many times has Ross been married ?": ["3 times", "4 times", 1],
  "What's the name of the dancer Joey lived with ?": ["Janine", "Janice", 1],
};

var score = 0;
var hscore = 4;
function check(val, uans) {
  console.log(uans);
  if (val == uans) {
    console.log(cAns("Correct Ans!"));
    score += 1;
    console.log(sBackColor("Score : ", sColor(score), "\n"));
  } else {
    console.log(wAns("Wrong Ans!"));
    console.log(sBackColor("Score : ", sColor(score), "\n"));
  }
}

function myQuiz() {
  var userName = readlineSync.question("What's your name ?\n=>");
  console.log(
    "Hello!,",
    uname.italic(userName.toUpperCase()),
    "Lets start the quiz\n Press 'Q' to quit the game"
  );
  console.log("Note: only input numerical value\n");
  // console.log(ansObj["Which character has a twin?"][2])
  for (let [key, value] of Object.entries(ansObj)) {
    console.log(qColor(key));
    console.log(qColor("1.", ansObj[key][0], "2.", ansObj[key][1]));
    let uans = readlineSync.question("=>");
    uans = uans.toUpperCase();
    if (uans == "Q") {
      break;
    }
    check(uans, ansObj[key][2]);
  }
  console.log("Your final Score is : ", score);
  if (hscore == score) {
    console.log(hMessageCol("You are true Frinds Fan"));
  }
  console.log("Thanks for giving the quiz");
  var replay = readlineSync.question(
    "Press 'R' to replay and 'Q' to quit \n=>"
  );
  if (replay.toUpperCase() == "R") {
    score = 0;
    myQuiz();
  }
}
myQuiz();
