// chrome.action.onClicked.addListener((tab) => {
//     console.log("1212")
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: getSelectedText
//     }, (result) => {
//         console.log("selected text: ", result[0].result)
//     })
// })

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


const contextMenuItem = {
    "id": "summarize",
    "title": "Summarize",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) =>{
    if (clickData.menuItemId == "summarize" && clickData.selectionText) {
        const selectedText = clickData.selectionText
        console.log(selectedText)
        summarizeText = selectedText
    }
})