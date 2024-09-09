window.addEventListener("storage", updateDashboard)

function updateDashboard() {
    let quizHistory = document.querySelector(".quiz-history");
    const quizUrls = Object.keys(localStorage);
    quizUrls.forEach((element) => {
        let quizData = JSON.parse(localStorage.getItem(element));
        console.log(quizData.note);
        console.log(quizData.summary);let historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        let itemSummary = document.createElement('p');
        itemSummary.classList.add('item-summary');
        itemSummary.innerHTML = `Summary: ${quizData.summary}`;
        let itemUrl = document.createElement('p');
        itemUrl.classList.add('item-url');
        itemUrl.innerHTML = `<a>URL: ${element}</a>`;
        let itemScore = document.createElement('p');
        itemScore.classList.add('item-score');
        itemScore.innerHTML = `Score: ${quizData.note}`;
        historyItem.appendChild(itemSummary);
        historyItem.appendChild(itemUrl);
        historyItem.appendChild(itemScore);
        quizHistory.appendChild(historyItem);
    })
}

updateDashboard();