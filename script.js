document.getElementById("summary-button").addEventListener("click", function() {
    document.getElementById("summary-section").classList.remove("hidden");
    document.getElementById("summary-button").classList.add("hidden");
});

document.getElementById("quizz-button").addEventListener("click", function() {
    document.getElementById("quizz-section").classList.remove("hidden");
    document.getElementById("quizz-button").classList.add("hidden");
});

document.getElementById("quizz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Quizz submitted! ");
});
