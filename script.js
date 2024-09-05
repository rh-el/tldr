const btn = document.getElementById('summary-button')

try {
    btn.addEventListener('click', () => {
        fetchAPI()

    })
} catch (error) {
    console.log(error)
}



function extractContents(document) {
    const articleContent = document.querySelectorAll('article')[0].textContent
    return articleContent;
};



async function fetchAPI() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => extractContents(document)},
        async (results) => {
            // console.log(results[0].result);                        
            // aiResponse = await getAIResponse(results[0].result)
            createSummary(responseTest)
            // console.log(aiResponse)
        }
      );
    });
}