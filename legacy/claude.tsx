// import Anthropic from "@anthropic-ai/sdk";

// export default async function* ClaudeSonnetStandard( chatHistory: any, max_tokens: number) {
//     const system_prompt = chatHistory.shift()['content'];
    
//     const anthropic = new Anthropic({
//         apiKey: process.env.CLAUDE_API_KEY,
//     });
    
//     const stream = await anthropic.messages.stream({
//         messages: chatHistory,
//         system: system_prompt,
//         model: 'claude-3-5-sonnet-20240620',
//         max_tokens: max_tokens,
//     });

//     for await (const chunk of stream) {
//         if (chunk.type === 'content_block_delta') {
//             if ('text' in chunk.delta) {
//                 yield chunk.delta.text;
//             }
//         }
//     }
// }