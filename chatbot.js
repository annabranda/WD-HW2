let questions = [
    {
        question: "Are you a night owl or an early bird?",
        options: {
            a: "Night owl",
            b: "Early bird"
        },
        correctAnswer: "a",
        correctResponse: "Super! Me too",
        incorrectResponse: "I love that for you"
    },
     {
        question: "Would you rather be blind or deaf?",
        options: {
            a: "Blind",
            b: "Deaf"
        },
        correctAnswer: "a",
        correctResponse: "",
        incorrectResponse: "Yeah same"
     },

     {
        question: "Dogs or cats?",
        options: {
            a: "Dogs",
            b: "Cats"
        },
        correctAnswer: "a",
        correctResponse: "Me too! I love them so much",
        incorrectResponse: ""
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

// 2. The displayQuestion function creates and appends an element for the current question in the chat container.
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

function scrollChatContainerToBottom() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. The event listener for the form prevents default submit, processes user response, checks if correct, and displays appropriate feedback.
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You :</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot :</strong> `;
    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1 ) % questions.length;
    userInput.value = "";
    displayQuestion();

    scrollChatContainerToBottom();
});