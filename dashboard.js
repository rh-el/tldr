window.addEventListener("storage", updateDashboard)

function updateDashboard() {
    let quizHistory = document.querySelector(".quiz-history");
    const quizUrls = Object.keys(localStorage);
    quizUrls.forEach((element) => {
        let quizData = JSON.parse(localStorage.getItem(element));
        let historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        let card = document.createElement('div');
        card.classList.add('card');
        let front = document.createElement('div');
        front.classList.add('front');
        let back = document.createElement('div');
        back.classList.add('back');
        let summarySection = document.createElement('div');
        summarySection.classList.add('summary-section');
        let itemSummary = document.createElement('p');
        itemSummary.classList.add('item-summary');
        itemSummary.innerHTML = `Summary: ${quizData.summary}`;
        let backButton = document.createElement('button');
        backButton.innerHTML = "Back";
        backButton.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.style.transform = 'rotateY(0)'
            console.log(event);
        });
        let itemUrl = document.createElement('p');
        itemUrl.classList.add('item-url');
        itemUrl.innerHTML = `<a href='${element}'>Page Link</a>`;
        let itemScore = document.createElement('p');
        itemScore.classList.add('item-score');
        itemScore.innerHTML = `${quizData.score}`;
        let viewSummary = document.createElement('button');
        viewSummary.innerHTML = "View summary";
        viewSummary.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.style.transform = 'rotateY(180deg)'
        });
        front.appendChild(itemUrl);
        front.appendChild(itemScore);
        front.appendChild(viewSummary);
        summarySection.appendChild(itemSummary);
        back.appendChild(summarySection);
        back.appendChild(backButton);
        card.appendChild(front);
        card.appendChild(back);
        historyItem.appendChild(card);
        quizHistory.appendChild(historyItem);
    })
}

updateDashboard();