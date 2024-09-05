chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
});



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
