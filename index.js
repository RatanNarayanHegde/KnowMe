var readLineSync = require("readline-sync");

var score = 0;
function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer === answer){
    console.log("Yes, you are right!");
    score++;
  }
  else{
    console.log("Wrong answer!");
  }
  console.log("Current Score: "+score);
  console.log("------------------------")
}

questions = [
  {
    question: "Where do I live? ",
    answer: "Hospet"
  },
  {
    question: "What my your favourite sport? ",
    answer: "football"
  }
]

for(var i = 0;i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Final Score: ", score);
