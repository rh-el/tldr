document.getElementById("summary-button").addEventListener("click", function() {
    document.getElementById("summary-section").classList.remove("hidden");
    document.getElementById("summary-button").classList.add("hidden");
});

document.getElementById("quiz-button").addEventListener("click", function() {
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("quiz-button").classList.add("hidden");
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Quiz submitted! ");
});
