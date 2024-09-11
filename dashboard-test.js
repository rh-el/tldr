window.addEventListener("storage", updateDashboard);

function updateDashboard() {
    let quizHistory = document.querySelector(".quiz-history");
    quizHistory.innerHTML = ""; 

    const quizUrls = Object.keys(localStorage);
    quizUrls.forEach((element) => {
        let quizData = JSON.parse(localStorage.getItem(element));
        let historyItem = document.createElement('div');
        historyItem.classList.add('history-item');

        let deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'x';
        deleteButton.addEventListener('click', () => {
            deleteArticle(element);
        });

        let itemSummary = document.createElement('p');
        itemSummary.classList.add('item-summary');
        itemSummary.innerText = `Summary: ${quizData.summary}`;

        let itemUrl = document.createElement('p');
        itemUrl.classList.add('item-url');
        itemUrl.innerHTML = `<a class='link-url' href='${quizData.url}' target='_blank'>${element}</a>`;

        let itemScore = document.createElement('p');
        itemScore.classList.add('item-score');
        itemScore.innerText = `${quizData.score}`;

        historyItem.appendChild(deleteButton);
        historyItem.appendChild(itemUrl);
        historyItem.appendChild(itemSummary);
        historyItem.appendChild(itemScore);

        quizHistory.appendChild(historyItem);
    });
}

function deleteArticle(key) {
    localStorage.removeItem(key);
    updateDashboard();
}

updateDashboard();