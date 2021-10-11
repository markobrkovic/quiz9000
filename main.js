const correcrAnswer = false;

const myQuestion = document.querySelector('.question');
myQuestion.textContent = 'Mars is a moon';


const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');

yesButton.onclick = function () {
    if(correcrAnswer === true) {
        alert("True");
    } else {
        alert("False");
    }
};

noButton.onclick = function () {
    if(correcrAnswer === false) {
        alert("True");
    } else {
        alert("False");
    }
};