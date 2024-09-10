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
    return articleContent
}   

const testObj = {
    'questions': [
        {'question0': 'Quelle est la fonction de la méthode Element.getElementsByTagName()?', 'choices0': [
            'Retourne une liste des éléments portant un certain nom de balise', 'Modifie la balise spécifiée', 'Supprime les éléments portant la balise donnée'
            ], 
            'answer0': 'Retourne une liste des éléments portant un certain nom de balise'
            }, 
            {
                'question1': 'Comment Element.getElementsByTagName() traite-t-elle les balises dans un document HTML?', 'choices1': [
                    'Elle les met en majuscules', 'Elle les laisse telles quelles', 'Elle les met en minuscule'
                    ], 'answer1': 'Elle les met en minuscule'
            }, 
            {'question2': 'Quel type de collection retourne Element.getElementsByTagName()?', 'choices2': [
                'Un tableau statique', 'Une NodeList live', 'Une HTMLCollection live'
                ], 'answer2': 'Une HTMLCollection live'
            }
        ], 
        'summary': 'La méthode Element.getElementsByTagName() retourne une HTMLCollection live des éléments portant le nom de balise donné à partir d\'un élément spécifié, excluant cet élément lui-même. La liste se met à jour automatiquement à chaque changement de l\'arbre DOM. Elle met en minuscule les balises dans les documents HTML, ce qui n\'est pas adapté pour les éléments SVG en camel-case. La méthode Element.getElementsByTagNameNS est recommandée dans ce cas. La compatibilité de cette méthode avec les navigateurs est étendue.'
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
                    // createSummary(testObj);
                } catch (error) {
                    console.error('Error fetching AI response:', error);
                } finally {
                    hideLoader(); 
                }
            }
        );
    });
}
