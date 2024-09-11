async function getTabUrl() {
    tabInfos = await chrome.tabs.query({active: true, lastFocusedWindow: true});
};



const storeElement = async element => {
    const jsonPlusUrl = addUrlToJson(element, tabInfos[0].url)
    const jsonPlusScore = addScoreToJson(jsonPlusUrl)
    localStorage.setItem(tabInfos[0].title, JSON.stringify(jsonPlusScore))
}


const addScoreToJson = (json) => {
    const score = countScore(aiResponseJSON)
    json.score = score
    return json
}


const addUrlToJson = (json, url) => {
    json.url = url
    return json
}