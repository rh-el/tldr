const apiKey = ''; // Remplacez par votre clé API OpenAI

let summarizedText = '';
let aiReponse;

const url = 'https://api.openai.com/v1/chat/completions';
const requestedFormat = "{'questions': [{'question0': 'question0', 'choices0': [ 'choice0', 'choice1', 'choice2'], 'answer0': 'answer0'}], 'summary': 'summary'}"

function formatRequestBody(str) {
  const formatStr = "``` \n" + str + "\n ```"
  console.log("formatStr: " + formatStr)
  const requestBody = {
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant"
      },
      {
        role: "user",
        content: `à partir de cet article: \n ${str} \n donne-moi un QCM de 3 questions en précisant la bonne réponse au format JSON; et résume moi l'article. format attendu: ` + requestedFormat
      }
    ],
    temperature: 1,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  };
  return requestBody
}


async function getAIResponse(textFromDom) {
  const formattedRequestBody = formatRequestBody(textFromDom)
  console.log("formattedRequestBody: " + formattedRequestBody)
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify(formattedRequestBody)
        });
        const data = await response.json();
        console.log(data);
        return data.choices[0].message.content
    } catch (error) {
        console.error('Error:', error);
    }
}
