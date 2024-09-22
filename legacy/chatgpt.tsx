// import OpenAI from "openai";

// export default async function* ChatGPT4oStandard(chatHistory: any, max_tokens: number) {
//     const openai = new OpenAI({
//         apiKey: process.env.CHATGPT_API_KEY,
//     });

//     const stream = await openai.chat.completions.create({
//         model: 'gpt-4o',
//         messages: chatHistory,
//         temperature: 1,
//         max_tokens: max_tokens,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         stream: true,
//     });

//     for await (const chunk of stream) {
//         yield chunk.choices[0]?.delta?.content || "";
//     }
// }