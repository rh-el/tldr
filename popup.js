const btn = document.getElementById('summary-button')

try {
    btn.addEventListener('click', () => {
        console.log("in popup")
        chrome.runtime.sendMessage({ action: 'injectContentScript' })
        let selection = getSelectedText()
        chrome.runtime.sendMessage({ selection })
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
    const tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'table'];
    const contents = [];

    tags.forEach(tag => {
        const elements = document.querySelectorAll(tag);
        elements.forEach(element => {
                        
                if (tag === 'ul' || tag === 'ol') {
                    const listItems = element.querySelectorAll('li');
                    
                    listItems.forEach(item => {
                        if (item.innerText.split(' ').length > 3) {
                            contents.push(item.textContent.trim());
                        } 
                    });
                } else if (tag === 'table') {
                    const cells = element.querySelectorAll('td, th');
                    cells.forEach(cell => {
                        if (cell.innerText.split(' ').length > 3) {
                        contents.push(cell.textContent.trim());
                        }
                    });
                } else {
                    contents.push(element.textContent.trim());
                }
            }

        )
    });
    return contents;
};





function test() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: () => extractContents(document)},
        (results) => {
            document.getElementsByTagName('h1')[0].innerText = results[0].result[0]
            console.log(results)
        }
      );
    });
}

document.addEventListener('DOMContentLoaded', test);