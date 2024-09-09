const btn = document.getElementById('summary-button')

try {
    btn.addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => checkArticle(document)},
                (results) => {
                    results[0].result ? fetchAPI() : alert('No article found on this page...')
                }
            )
        })
    })
} catch (error) {
    console.log(error)
}

function checkArticle(document) {
    return document.getElementsByTagName('article').length > 0 ? true : false
}



function extractContents(document) {
    const articleContent = document.querySelectorAll('article')[0].textContent
    return articleContent;
};



async function fetchAPI() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => extractContents(document)},
        async (results) => {                      
            const aiResponse = await getAIResponse(results[0].result)
            aiResponseJSON = JSON.parse(aiResponse);
            createSummary(aiResponseJSON)
        }
      );
    });
}