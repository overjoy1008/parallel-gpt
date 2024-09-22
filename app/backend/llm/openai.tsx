import OpenAI from "openai";
export default class OpenAIService {
    async* ChatGPT4o(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }


    async* ChatGPT4oMini(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }


    async* ChatGPT4Turbo(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'gpt-4-turbo',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }


    async* ChatGPT4(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }


    async* ChatGPTO1Preview(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'o1-preview-2024-09-12',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }


    async* ChatGPTO1Mini(chatHistory: any, max_tokens: number) {
        const openai = new OpenAI({
            apiKey: process.env.CHATGPT_API_KEY,
        });
    
        const stream = await openai.chat.completions.create({
            model: 'o1-mini-2024-09-12',
            messages: chatHistory,
            temperature: 1,
            max_tokens: max_tokens,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: true,
        });
    
        for await (const chunk of stream) {
            yield chunk.choices[0]?.delta?.content || "";
        }
    }

}