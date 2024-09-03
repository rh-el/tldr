
document.getElementById("summary-button").addEventListener("click", (clickData) => {
    // getAIResponse();
    // getSelectedText()
    const selectedText = clickData.selectionText
    

    document.getElementById("summary-section").classList.remove("hidden");
    document.getElementById("summary-button").classList.add("hidden");
});

document.getElementById("quiz-button").addEventListener("click", () => {
    document.getElementById("quiz-section").classList.remove("hidden");
    document.getElementById("quiz-button").classList.add("hidden");
    createQuiz(responseTest);
});

document.getElementById("quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Quiz submitted! ");
});



let responseTest = {
    "questions": [
      {
        "question0": "Quelle est la fonction principale de la règle @keyframes en CSS?",
        "choices0": [
          "Définir les étapes d'une animation CSS",
          "Ajouter des styles conditionnels",
          "Définir des règles de mise en page pour différents écrans"
        ],
        "answer0": "Définir les étapes d'une animation CSS"
      },
      {
        "question1": "Quelle interface JavaScript permet de manipuler la règle @keyframes?",
        "choices1": [
          "CSSAnimationRule",
          "CSSKeyframesRule",
          "CSSStyleRule"
        ],
        "answer1": "CSSKeyframesRule"
      },
      {
        "question2": "Comment spécifie-t-on une animation à l'aide des règles @keyframes?",
        "choices2": [
          "En utilisant la propriété animation-name avec le nom défini pour @keyframes",
          "En utilisant la propriété transition-name avec le nom défini pour @keyframes",
          "En utilisant la propriété keyframes-name avec le nom défini pour @keyframes"
        ],
        "answer2": "En utilisant la propriété animation-name avec le nom défini pour @keyframes"
      }
    ]
  }


function createQuiz (response) {
    const quizForm = document.getElementById("quiz-form");
    for (let i = 0; i < response.questions.length; i++) {
        let quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");
        let quizQuestion = document.createElement("p");
        quizQuestion.classList.add("quiz-question");
        quizQuestion.innerHTML = response.questions[i][`question${[i]}`];
        quizItem.appendChild(quizQuestion);
    
        for (let j = 0; j < response.questions[i][`choices${[i]}`].length; j++){
            let quizRow = document.createElement("div");
            quizRow.classList.add("quiz-row");
            let quizButton = document.createElement("input");
            quizButton.setAttribute("type", "radio");
            quizButton.setAttribute("name", `choices${i}`);
            quizButton.setAttribute("id", `option${j}`);
            quizRow.appendChild(quizButton);
            let quizChoice = document.createElement("label");
            quizChoice.setAttribute("for", `option${j}`);
            quizChoice.innerHTML = response.questions[i][`choices${[i]}`][j];
            quizRow.appendChild(quizChoice);
            quizItem.appendChild(quizRow);
        }
        quizForm.appendChild(quizItem);
    }
}
document.addEventListener("selectionchange", () => {
    // getSelectedText();
})
