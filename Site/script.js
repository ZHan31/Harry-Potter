const questions = [
    {
        question: "What is your favorite color?",
        answers: [
            { option: "Red", character: "Harry Potter" },
            { option: "Blue", character: "Hermione Granger" },
            { option: "Green", character: "Neville Longbottom" },
            { option: "Yellow", character: "Luna Lovegood" }
        ]
    },
    {
        question: "What is your favorite subject at Hogwarts?",
        answers: [
            { option: "Defense Against the Dark Arts", character: "Ron Weasley" },
            { option: "Potions", character: "Severus Snape" },
            { option: "Charms", character: "Ginny Weasley" },
            { option: "Care of Magical Creatures", character: "Rubeus Hagrid" }
        ]
    },
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");
const characterResult = document.getElementById("character");

let currentQuestion = 0;
let userAnswers = [];

function displayQuestion() {
    const question = questions[currentQuestion];
    const answers = question.answers.map(answer => `
    <label>
      <input type="radio" name="answer" value="${answer.character}" required>
      ${answer.option}
    </label>
  `).join("");

    quizContainer.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="answer">${answers}</div>
  `;
}

function submitQuiz(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    const characterCounts = userAnswers.reduce((count, character) => {
        count[character] = (count[character] || 0) + 1;
        return count;
    }, {});

    const maxCharacterCount = Math.max(...Object.values(characterCounts));
    const result = Object.keys(characterCounts).find(character => characterCounts[character] === maxCharacterCount);

    characterResult.textContent = result;
    resultContainer.classList.remove("hidden");
    quizContainer.classList.add("hidden");
}

submitButton.addEventListener("click", submitQuiz);

displayQuestion();