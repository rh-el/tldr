window.addEventListener("storage", updateDashboard)


function updateDashboard() {
    let quizHistory = document.querySelector(".quiz-history");
    quizHistory.innerHTML = ''
    const quizUrls = Object.keys(localStorage);
    quizUrls.forEach((element) => {
        if (element !== 'apiKey') {
            let quizData = JSON.parse(localStorage.getItem(element));
            let historyItem = createItem('div', 'history-item')
            let itemSummary = createItem('p', 'item-summary', 'innerText', quizData.summary)
            let itemUrl = createItem('p', 'item-url', 'innerHTML', `<a class='link-url' href='${quizData.url}' target='_blank'>${element}</a>`)
            let itemScore = createItem('p', 'item-score', 'innerText', quizData.score)
    
            const deleteButton = createItem('span', 'delete-button', 'innerText', 'x')
            deleteButton.addEventListener('click', () => {
                deleteArticle(element);
            });
    
            historyItem.appendChild(deleteButton);
            historyItem.appendChild(itemUrl);
            historyItem.appendChild(itemSummary);
            historyItem.appendChild(itemScore);
            quizHistory.appendChild(historyItem);

        }
    })
}


function deleteArticle(key) {
    localStorage.removeItem(key);
    updateDashboard();
}

updateDashboard();