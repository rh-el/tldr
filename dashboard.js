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
        itemSummary.innerText = `Summary: ${quizData.summary}`;
        let backButton = document.createElement('button');
        backButton.innerText = "Back";
        backButton.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.style.transform = 'rotateY(0)'
            console.log(event);
        });
        let itemUrl = document.createElement('p');
        itemUrl.classList.add('item-url');
        itemUrl.innerText = `<a href='${quizData.url}' target='_blank'>${element}</a>`;
        let titleSection = document.createElement('div');
        titleSection.classList.add('title-section');
        let itemScore = document.createElement('p');
        itemScore.classList.add('item-score');
        itemScore.innerText = `${quizData.score}`;
        let viewSummary = document.createElement('button');
        viewSummary.innerText = "View summary";
        viewSummary.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.style.transform = 'rotateY(180deg)'
        });
        titleSection.appendChild(itemUrl);
        front.appendChild(titleSection);
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