const answers = ["The","future","of","tech","is","you!"];

function checkWord(index) {
    const inputEl = document.getElementById("word" + index);
    const value = inputEl.value.trim().toLowerCase();
    const correctWord = answers[index-1].toLowerCase();
    const feedback = document.getElementById("feedback");

    if (value === correctWord) {
        inputEl.style.color = "#4CAF50"; 
    } else if (value.length > 0) {
        inputEl.style.color = "#e53935";
    } else {
        inputEl.style.color = "#333";
    }
    let allCorrect = true;
    for (let i = 1; i <= answers.length; i++) {
        const val = document.getElementById("word" + i).value.trim().toLowerCase();
        if (val !== answers[i-1].toLowerCase()) {
            allCorrect = false;
            break;
        }
    }
    if (allCorrect) {
        feedback.textContent = "🎉 Correct! The hidden sentence is: 'The future of tech is you!'";
        feedback.style.color = "#4CAF50";
    } else {
        feedback.textContent = "Keep going! Correct words are green.";
        feedback.style.color = "#333";
    }
}