window.addEventListener("storage", updateDashboard)

function updateDashboard() {
    let quizHistory = document.querySelector(".quiz-history");
    const quizUrls = Object.keys(localStorage);
    quizUrls.forEach((element) => {
        let quizData = JSON.parse(localStorage.getItem(element));
        let historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        
        let itemSummary = document.createElement('p');
        itemSummary.classList.add('item-summary');
        itemSummary.innerText = `Summary: ${quizData.summary}`;
        
        let itemUrl = document.createElement('p');
        itemUrl.classList.add('item-url');
        itemUrl.innerHTML = `<a class='link-url' href='${quizData.url}' target='_blank'>${element}</a>`;
        
        let itemScore = document.createElement('p');
        itemScore.classList.add('item-score');
        itemScore.innerText = `${quizData.score}`;
        
        
        historyItem.appendChild(itemUrl);
        historyItem.appendChild(itemSummary);
        historyItem.appendChild(itemScore);

        quizHistory.appendChild(historyItem);
    })
}

updateDashboard();