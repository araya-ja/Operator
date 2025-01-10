// Function to check the user's answer
function checkAnswer(selectedOption, correctAnswer) {
    const parent = selectedOption.parentNode;
    const allOptions = parent.querySelectorAll("li");

    // Remove any previous classes
    allOptions.forEach(option => {
        option.classList.remove("correct", "wrong");
    });

    // Add correct or wrong class based on the answer
    if (selectedOption.textContent.startsWith(correctAnswer)) {
        selectedOption.classList.add("correct");
    } else {
        selectedOption.classList.add("wrong");
    }
}

// Function to show the correct answer
function showAnswer(button) {
    const answer = button.nextElementSibling;
    answer.style.display = "block";
}
