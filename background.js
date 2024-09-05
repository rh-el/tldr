chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectContentScript') {
        console.log('in background if '+  message);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['script.js']
            })
        })
    }
    console.log('in background not if ' + message)
})

function createSummaryy(response) {
    
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




const contextMenuItem = {
    "id": "summarize",
    "title": "Summarize",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onClicked.addListener((clickData) =>{
    if (clickData.menuItemId == "summarize" && clickData.selectionText) {
        const selectedText = clickData.selectionText
        summarizedText = selectedText
        console.log(summarizeText)
        // aiResponse = await getAIResponse(summarizedText)
        createSummary(responseTest)
    }
})
