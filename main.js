const questionList = [
  "Is GME gonna moon?",
  "Is 2+2 = 4?",
  "Are you an ape?",
  "Is 2+2 = 3?",
];
let questionIndex = 0;
const correctAnswer = [true, true, true, false];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];

const questionNumber = document.querySelector(".questionNumber");
questionNumber.textContent = `#${questionIndex + 1}/${questionList.length}`;

const oldDiv = document.querySelector("div");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

yesButton.onclick = function () {
  //   removeParagraph();
  if (correctAnswer[questionIndex] === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};

noButton.onclick = function () {
  //   removeParagraph();
  if (correctAnswer[questionIndex] === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
};

function showAnswerIsCorrect() {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("correct");
  newParagraph.setAttribute("id", "message");
  newParagraph.textContent = "Correct";
  oldDiv.appendChild(newParagraph);
  disableButtons(true);
  setTimeout(() => setNewQuestion("Is GME gonna moon?"), 3000);
}

function showAnswerIsWrong() {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("wrong");
  newParagraph.setAttribute("id", "message");
  newParagraph.textContent = "Wrong";
  oldDiv.appendChild(newParagraph);
  disableButtons(true);
  setTimeout(() => setNewQuestion("Is GME gonna moon?"), 3000);
}

function disableButtons(currentState) {
  yesButton.disabled = currentState;
  noButton.disabled = currentState;
}

function setNewQuestion() {
  disableButtons(false);
  oldDiv.removeChild(document.querySelector("#message"));
  questionIndex += 1;
  if (questionIndex >= questionList.length) {
    myQuestion.textContent = "Congratulations, you finished the test!";
    disableButtons(true);
  } else {
    myQuestion.textContent = questionList[questionIndex];
    questionNumber.textContent = `#${questionIndex + 1}/${questionList.length}`;
  }
  //   nextButton.onclick()
}

// WIthout disabled buttons
// function removeParagraph() {
//   let el = document.querySelectorAll("#message");
//   console.log(el.length);
//   if (el.length > 0) {
//     document.getElementById("message").remove();
//   }
// }
