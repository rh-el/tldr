async function getTabUrl() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    return tab.url
};



const storeElement = async element => {
    const tabUrl = await getTabUrl()
    const jsonPlusScore = addScoreToJson(element)
    localStorage.setItem(tabUrl, JSON.stringify(jsonPlusScore))
    const items = { ...localStorage }
    console.log(items)
}


const addScoreToJson = (json) => {
    const score = countScore(aiResponseJSON)
    json.score = score
    return json
}