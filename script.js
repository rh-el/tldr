document.getElementById("summaryButton").addEventListener("click", function() {
    document.getElementById("summarySection").classList.remove("hidden");
    document.getElementById("summaryButton").classList.add("hidden");
});

document.getElementById("quizzButton").addEventListener("click", function() {
    document.getElementById("quizzSection").classList.remove("hidden");
    document.getElementById("quizzButton").classList.add("hidden");
});

document.getElementById("quizzForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Quizz submitted! ");
});
