// const questionList = [
//   "Is this a quiz?",
//   "Is the name of the quiz 'Quiz 9001'?",
//   "Is the backgound blue?",
//   "Is the font pink?",
//   "Are there round corners?",
//   "Do you still enjoy this quiz?",
// ];

// let questionIndex = 0;
// const correctAnswer = [true, false, true, false, true, false];

// //Question counter
// function updateProgress() {
//   const progressElement = document.querySelector(".progress");
//   progressElement.textContent = `Question ${questionIndex + 1}/${
//     questionList.length
//   }`;
//   // same as: "Question " + (questionIndex + 1) + "/" + questionList.length;
// }

// // Question
// const question = document.querySelector(".question");
// question.textContent = questionList[0];
// updateProgress();

// function nextQuestion() {
//   questionIndex += 1;
//   if (questionIndex >= correctAnswer.length) {
//     disableButtons(true);
//   } else {
//     disableButtons(false);
//     const nextButton = document.createElement("p");
//     nextButton.textContent = "Next Question";
//     nextButton.className = "nextButton";
//     Print.appendChild(nextButton);
//     nextButton.onclick = function () {
//       question.textContent = questionList[questionIndex];
//       // questionIndex += 1;
//       Print.removeChild(document.querySelector(".correct"));
//     };
//     updateProgress();
//   }
// }

// // Yes-Button
// const yesButton = document.querySelector(".yes");
// yesButton.onclick = function () {
//   if (correctAnswer[questionIndex] === true) {
//     showAnswerIsCorrect();
//   } else {
//     showAnswerIsIncorrect;
//   }
// };

// // No-Button
// const noButton = document.querySelector(".no");
// noButton.onclick = function () {
//   if (correctAnswer[questionIndex] === false) {
//     showAnswerIsCorrect();
//   } else {
//     showAnswerIsIncorrect();
//   }
// };

// function showAnswerIsCorrect() {
//   // Variable resultElement anlegen, die ein p erstellt

//   const resultElement = document.createElement("p");
//   // p hat den Inhalt
//   resultElement.textContent = "That’s right! 🙃";
//   // p hat die Klasse
//   resultElement.className = "correct";
//   // resultElement dem body hinzufügen (append am Ende. prepend am Anfang.)
//   // document.body.append(resultElement);
//   Print.appendChild(resultElement);
//   disableButtons(true);
//   nextQuestion();
// }

// function showAnswerIsIncorrect() {
//   disableButtons(true);
//   const resultElement = document.createElement("p");
//   resultElement.textContent = "That’s wrong 🙁";
//   resultElement.className = "incorrect";
//   Print.appendChild(resultElement);
//   disableButtons(true);
//   nextQuestion();
// }

// function disableButtons(currentState) {
//   yesButton.disabled = currentState;
//   noButton.disabled = currentState;
// }

const questionsAndAnswers = [
  { question: "LAMBO?", answer: true },
  { question: "Are you an ape?", answer: true },
  { question: "Is 1 Mill new floor?", answer: true },
  { question: "Exit strategy?", answer: false },
];

let questionIndex = 0;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionsAndAnswers[questionIndex].question;

const questionNumber = document.querySelector(".questionNumber");
questionNumber.textContent = `#${questionIndex + 1}/${
  questionsAndAnswers.length
}`;

const oldDiv = document.querySelector("div");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

yesButton.onclick = function () {
  //   removeParagraph();
  if (questionsAndAnswers[questionIndex].answer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};

noButton.onclick = function () {
  //   removeParagraph();
  if (questionsAndAnswers[questionIndex].answer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};

function showAnswerIsCorrect() {
  const newParagraph = createMyElement("p", {
    className: "correct",
    textContent: "Correct",
    id: "message",
  });
  oldDiv.appendChild(newParagraph);
  disableButtons(true);
  setTimeout(setNewQuestion, 1000);
}

function showAnswerIsWrong() {
  const newParagraph = createMyElement("p", {
    className: "wrong",
    textContent: "Incorrect",
    id: "message",
  });
  oldDiv.appendChild(newParagraph);
  disableButtons(true);
  setTimeout(setNewQuestion, 1000);
}

function disableButtons(currentState) {
  yesButton.disabled = currentState;
  noButton.disabled = currentState;
}

function setNewQuestion() {
  disableButtons(false);
  oldDiv.removeChild(document.querySelector("#message"));
  questionIndex += 1;
  if (questionIndex >= questionsAndAnswers.length) {
    myQuestion.textContent = "Congratulations, you finished the quiz!";
    disableButtons(true);
    document.querySelector(".yes").classList.add("dissapear");
    document.querySelector(".no").classList.add("dissapear");
    document.querySelector(".questionNumber").classList.add("dissapear");
  } else {
    myQuestion.textContent = questionsAndAnswers[questionIndex].question;
    questionNumber.textContent = `#${questionIndex + 1}/${
      questionsAndAnswers.length
    }`;
  }
}

function createMyElement(tagName, properties) {
  const newElement = document.createElement(tagName);
  newElement.className = properties.className;
  newElement.textContent = properties.textContent;
  newElement.id = properties.id;
  return newElement;
}

// WIthout disabled buttons
// function removeParagraph() {
//   let el = document.querySelectorAll("#message");
//   console.log(el.length);
//   if (el.length > 0) {
//     document.getElementById("message").remove();
//   }
// }
