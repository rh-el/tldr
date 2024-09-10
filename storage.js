async function getTabUrl() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    return [tab.title, tab.url]
};



const storeElement = async element => {
    const [tabTitle, tabUrl] = await getTabUrl()
    const jsonPlusUrl = addUrlToJson(element, tabUrl)
    const jsonPlusScore = addScoreToJson(jsonPlusUrl)
    localStorage.setItem(tabTitle, JSON.stringify(jsonPlusScore))
    const items = { ...localStorage }
    console.log(items)
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