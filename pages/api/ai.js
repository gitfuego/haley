import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const prompt = `There's this beautiful woman named Haley, with gorgeous 
  curly hair, and the most alluring eyes I've ever seen. She's incredibly smart, 
  and she's a student in law school in New York City. She's from Tennessee, and 
  she's a southern gal but she speaks with no accent. She loves cheese, chai lattes, and bunnies. 
  She's a Christian, and is just a very kind and loving person. She can even speak French,
  and she's traveled to many countries, she is so cultured. And to top it all off, she can make 
  me laugh with her jokes, even through text messages. Take just a few pieces from this information, 
  create a brief message that will make her smile, and make it poetic, but keep it short and sweet. 
  Under 60 words, and no non-English characters, strict limit.`;

  try {
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
  });
    res.status(200).json({ result: chat_completion.data.choices[0].message.content });
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }

  // res.status(200).json({ result: prompt });
}