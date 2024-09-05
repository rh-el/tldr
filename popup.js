const btn = document.getElementById('summary-button')

try {
    btn.addEventListener('click', () => {
        test()

    })
} catch (error) {
    console.log(error)
}



const getSelectedText = () => {
    const selection = window.getSelection();
    const text = selection.toString();
    return text
}


function extractContents(document) {
    const contents = [];

    const articleContent = document.querySelectorAll('article')[0]
    articleContent.childNodes.forEach((element) => {
        contents.push(recursiveSearch(element))
        
    })
    // console.log(contents)
    return contents;
};




function recursiveSearch(elements) {
    const myVar = elements.childNodes
    if (isNaN(myVar)) {
        return elements.textContent
    }
    recursiveSearch(elements.childNodes)
}



function formatContent(content) {
    let formattedStr = '';
    content.forEach(element => {
        formattedStr += `${element} \n`
    })
    return formattedStr
}


async function test() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => formatContent(extractContents(document))},
        async (results) => {
            // console.log(results[0].result)
            console.log(results[0].result);
            

            // const aiResponse = await getAIResponse(results[0].result)
            // console.log(aiResponse)
        }
      );
    });
}

// document.addEventListener('DOMContentLoaded', test);