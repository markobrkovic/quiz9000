const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Mars is a moon";

const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
  removePreviousResult();
};

noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsWrong();
  }
  removePreviousResult();
};

function showAnswerIsCorrect() {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("correct");
  newParagraph.setAttribute("id", "message");
  newParagraph.textContent = "Correct";
  document.body.appendChild(newParagraph);
  disableButtons();
}

function showAnswerIsWrong() {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("wrong");
  newParagraph.setAttribute("id", "message");
  newParagraph.textContent = "Wrong";
  document.body.appendChild(newParagraph);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
