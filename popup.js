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



// function extractContents(document) {
//     const contents = [];

//     const articleContent = document.querySelectorAll('article')
//     console.log(articleContent);
    
//     articleContent.forEach(element => {
//         console.log(element)
//     })
//         const tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol'];
    
//         tags.forEach(tag => {
//             const elements = articleContent.querySelectorAll(tag);
//             elements.forEach(element => {
    
                            
//                     if (tag === 'ul' || tag === 'ol') {
//                         const listItems = element.querySelectorAll('li');
                        
//                         listItems.forEach(item => {
//                             if (item.innerText.split(' ').length > 3) {
//                                 contents.push(item.textContent.trim());
//                             } 
//                         });
//                     } else {
//                         contents.push(element.textContent.trim());
//                     }
//                 }
    
//             )
//         });
//     return contents;
// };




function extractContents(document) {
    const contents = [];

    const articleContent = document.querySelectorAll('article')[0]
    articleContent.childNodes.forEach((element) => {
        contents.push(recursiveSearch(element))
        
    })
    // console.log(contents)
    return contents;
};



// let contents = []
// function extractContents(document, i) {
//     const articleContent = document.querySelectorAll('article')
//     console.log(articleContent[i])

//     if (index >= articleContent.length) {
//         console.log(contents)
//         return
//     }
//     if (articleContent[i].childNodes.) {
//         extractContents(document[i].childNodes, 0)
//     }
//     if (articleContent.childNodes.length == 0) {
//         contents.push(articleContent.textContent)
//     }
//     i++
//     extractContents(articleContent, i)


//     // return contents;
// };





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