import { NextResponse } from 'next/server';
import OpenAIService from '@/app/backend/llm/openai';
import AnthropicService from '@/app/backend/llm/anthropic';


export async function POST(request: Request) {
  const { model, chatHistory, max_tokens } = await request.json();


  const open_ai_service = new OpenAIService();
  const anthropic_service = new AnthropicService();


  const stream = new ReadableStream({
    async start(controller) {
      try {




        // Model selection
      
        if (model === "ChatGPT-4o") {
          console.log('ChatGPT-4o response');
          const chatStream = open_ai_service.ChatGPT4o(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "ChatGPT-4o-Mini") {
          console.log('ChatGPT-4o-Mini response');
          const chatStream = open_ai_service.ChatGPT4oMini(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "ChatGPT-4-Turbo") {
          console.log('ChatGPT-4-Turbo response');
          const chatStream = open_ai_service.ChatGPT4Turbo(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "ChatGPT-4") {
          console.log('ChatGPT-4 response');
          const chatStream = open_ai_service.ChatGPT4(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "ChatGPT-o1-Preview") {
          console.log('ChatGPT-o1-Preview response');
          const chatStream = open_ai_service.ChatGPTO1Preview(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "ChatGPT-o1-Mini") {
          console.log('ChatGPT-o1-Mini response');
          const chatStream = open_ai_service.ChatGPTO1Mini(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //



        } else if (model === "Claude-3.5-Sonnet") {
          console.log('Claude-3.5-Sonnet response');
          const chatStream = anthropic_service.Claude35Sonnet(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "Claude-3-Opus") {
          console.log('Claude-3-Opus response');
          const chatStream = anthropic_service.Claude3Opus(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


        } else if (model === "Claude-3-Haiku") {
          console.log('Claude-3-Haiku response');
          const chatStream = anthropic_service.Claude3Haiku(chatHistory, max_tokens);
          for await (const chunk of chatStream) {
            controller.enqueue(new TextEncoder().encode(`~~data~~${chunk}`));  //
          }
          controller.enqueue(new TextEncoder().encode('~~data~~[~~DONE~~]'));  //


          
        } else {
          console.error('Invalid model');
          throw new Error('Invalid model');
        }








      } catch (error) {
        console.error(`Error in ${model} response:`, error);
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}