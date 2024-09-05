
const responseTest = {
    "questions": [
      {
        "question0": "Dans quel cas l'appel à la méthode reduce() sur un tableau vide génère-t-il une erreur?",
        "choices0": ["Lorsqu'aucune valeur initiale n'est fournie", "Lorsqu'il y a des éléments vides dans le tableau", "Lorsqu'une fonction fléchée est utilisée"],
        "answer0": "Lorsqu'aucune valeur initiale n'est fournie"
      },
      {
        "question1": "Quel est l'ordre des arguments utilisés par la fonction callback de reduce()?",
        "choices1": ["accumulateur, valeurCourante, index, tableau", "valeurCourante, accumulateur, index, tableau", "index, accumulateur, valeurCourante, tableau"],
        "answer1": "accumulateur, valeurCourante, index, tableau"
      },
      {
        "question2": "Quelle est la valeur initiale de l'accumulateur si elle n'est pas explicitement définie?",
        "choices2": ["Le premier élément du tableau", "Le deuxième élément du tableau", "undefined"],
        "answer2": "Le premier élément du tableau"
      }
    ],
    "summary": "La méthode reduce() en JavaScript permet de réduire une liste de valeurs à une seule valeur à l'aide d'une fonction qui traite chaque élément du tableau. Cette fonction callback prend quatre arguments : la valeur accumulée, la valeur courante, l'index de l'élément et le tableau. Si une valeur initiale n'est pas fournie, le premier élément du tableau sera utilisé comme accumulateur, et la boucle commencera à l'indice 1. La méthode ignore les éléments vides du tableau et peut générer une erreur lorsqu'elle est appelée sur un tableau vide sans valeur initiale. La méthode reduce() est largement supportée dans les navigateurs depuis 2015."
}


function createQuiz(response) {

    document.getElementById('summary-section').classList.add('hidden')

    const quizForm = document.getElementById("quiz-form");
    for (let i = 0; i < response.questions.length; i++) {
        let quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");
        let quizQuestion = document.createElement("p");
        quizQuestion.classList.add("quiz-question");
        quizQuestion.innerHTML = response.questions[i][`question${i}`];
        quizItem.appendChild(quizQuestion);
    
        for (let j = 0; j < response.questions[i][`choices${i}`].length; j++){
            let quizRow = document.createElement("div");
            quizRow.classList.add("quiz-row");
            let radioButtonSelector = document.createElement("input");
            radioButtonSelector.setAttribute("type", "radio");
            radioButtonSelector.setAttribute("name", `choices${i}`);
            radioButtonSelector.setAttribute("id", `option${j}`);
            quizRow.appendChild(radioButtonSelector);
            let quizChoice = document.createElement("label");
            quizChoice.setAttribute("for", `option${j}`);
            quizChoice.innerHTML = response.questions[i][`choices${i}`][j];
            quizRow.appendChild(quizChoice);
            quizItem.appendChild(quizRow);
        }
        quizForm.appendChild(quizItem);
    }
}


function createSummary(response) {
    
    const summarySection = document.getElementById('summary-section')
    summarySection.classList.remove('hidden')
    document.getElementById("summary-button").classList.add("hidden");
    
    const summaryContentContainer = document.createElement('div')
    summaryContentContainer.classList.add('summary-content')

    const takeQuizButon = document.createElement('button')
    takeQuizButon.classList.add('quiz-button')

    summarySection.appendChild(summaryContentContainer)
    summarySection.appendChild(takeQuizButon)
    summaryContentContainer.innerText = response.summary
    takeQuizButon.innerText = 'Take Quiz'

    takeQuizButon.addEventListener("click", () => {
          document.getElementById("quiz-section").classList.remove("hidden");
          document.querySelector(".quiz-button").classList.add("hidden");
          createQuiz(responseTest);
      });
}


