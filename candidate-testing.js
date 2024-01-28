const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40",
  "Trajectory", 
  "3", 
];
let candidateAnswers = [""
];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i < questions.length; i++){
  console.log(`Question ${i+1}: `, questions[i]);
  candidateAnswers[i]= input.question("Answer: ");
}
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let totalQuestions = 5;
let grade = 0;

for (let i = 0; i < questions.length; i++){
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
  grade += 1;
  console.log(`Question ${i +1}: Correct! You answered ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}.`);
} else {
  grade += 0;
  console.log(`Question ${i +1}: Incorrect. You answered ${candidateAnswers[i]} but the correct answer is ${correctAnswers[i]}.`);
}
}

if (grade === 0){
  console.log("Total Score: 0%");
} else if (grade === 1){
  console.log("Total Score: 20%");
} else if (grade === 2){
  console.log("Total Score: 40%");
} else if (grade === 3){
  console.log("Total Score: 60%");
} else if (grade === 4){
  console.log("Total Score: 80%. Congratulations! You passed!");
} else if (grade === 5){
  console.log("Total Score: 100%! Way to go!");
}

grade = ((grade/totalQuestions) *100);  //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};