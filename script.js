const btn = document.getElementById('summary-button');
const dashboardBtn = document.getElementById('dashboard-button');
const loader = document.querySelector('.loader');

try {
    btn.addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => checkArticle(document)},
                (results) => {
                    if (results[0].result) {
                        fetchAPI()
                        showLoader()
                    } else {
                        alert('No article found on this page...')
                    }
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

// show loader and hide buttons
function showLoader() {
    loader.classList.add('active');
    btn.classList.add('hidden');          
    dashboardBtn.classList.add('hidden'); 
}

// hide loader and show buttons
function hideLoader() {
    loader.classList.remove('active');
    btn.classList.remove('hidden');          
    dashboardBtn.classList.remove('hidden'); 
}

function extractContents(document) {
    const articleContent = document.querySelectorAll('article')[0].textContent;
    return articleContent;
}

async function fetchAPI() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                function: () => extractContents(document)
            },
            async (results) => {  
                try {
                    const aiResponse = await getAIResponse(results[0].result);
                    aiResponseJSON = JSON.parse(aiResponse);
                    createSummary(aiResponseJSON);
                } catch (error) {
                    console.error('Error fetching AI response:', error);
                } finally {
                    hideLoader(); 
                }
            }
        );
    });
}
