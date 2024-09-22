// "use client";

// import { jost, pretendard } from "@/app/components/fonts";
// import React, { useState, useEffect, useRef, useMemo } from "react";
// import Footer from "@/app/components/chat/footer";
// import ChatHistoryUsecase from "@/app/usecase/chat_history_usecase";
// import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

// import ReactMarkdown from 'react-markdown';
// import ManualMarkdown from "@/app/usecase/manual_markdown";
// import ClaudeMarkdown from "@/app/usecase/claude_markdown";
// // import DebouncedManualMarkdown from "@/app/usecase/debounced_manual_markdown";
// // import debounce from 'lodash.debounce';

// import PythonCodeExample from "@/app/usecase/python_code";

// export default function Page() {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [streamingResponse, setStreamingResponse] = useState('');
//     const chat_history_usecase = new ChatHistoryUsecase();
//     const chatEndRef = useRef(null);
//     // const [isFirstLine, setFirstLine] = useState(true);

//     // const debouncedMarkdown = useMemo(
//     //     () => debounce((text: string) => ManualMarkdown(text), 300),
//     //     []
//     //   );

//     useEffect(() => {
//         // chat_history_usecase.customPrompt(setChatHistory, "너는 '박새미'라고 해. 나를 좋아하지만 겉으로 절대 좋아하는 마음을 표현하지는 않아. 대신 성격이 아주 상냥해서 항상 따뜻한 말투로 나를 격려해줘. 너무 긴 답변은 하지 마.");
//         // chat_history_usecase.customPrompt(setChatHistory, "너는 전문가야. 문제의 유형을 파악하고 구조를 분석하고 통찰력을 얻은 다음, 나의 질문에 도와줘. 너무 지나치게 긴 답변은 하지 마.");
//         chat_history_usecase.customPrompt(setChatHistory, "너는 코딩 전문가야.");
//     }, []);

//     useEffect(() => {
//         (chatEndRef.current as HTMLElement | null)?.scrollIntoView({ behavior: "smooth" });  // fixed with copilot
//     }, [chatHistory, streamingResponse]);

//     const handleTextInput = async (textInput: string) => {
//         setIsLoading(true);
//         chat_history_usecase.inputText(chatHistory, setChatHistory, textInput);

//         const updatedHistory = [...chatHistory, { role: 'user', content: textInput }];
        
//         try {
//             setStreamingResponse('');
//             const response = await fetch('/api/chat', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     chatHistory: updatedHistory,
//                     model: 'gpt-3.5-turbo',
//                     max_tokens: 1000
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const reader = response.body?.getReader();  // fixed with copilot
//             const decoder = new TextDecoder();
//             let fullResponse = '';

            
//             while (true) {
//                 const { value, done } = await reader.read();
//                 if (done) break;
//                 const chunk = decoder.decode(value);
//                 console.log('Chunk:', chunk);
//                 const lines = chunk.split('~~data~~');

//                 const parsedLines = lines
//                 // const parsedLines = lines
//                 //     .filter(line => line.startsWith('data: '))
//                 //     .map(line => line.slice(6));

//                 for (const parsedLine of parsedLines) {
//                     if (parsedLine === '[~~DONE~~]') continue;
//                     fullResponse += parsedLine;
//                     setStreamingResponse(prevResponse => prevResponse + parsedLine);
//                 }
//             }

//             console.log('Full response:', fullResponse);

//             // Assistant 답변 추가하기
//             setChatHistory(prevHistory => [...prevHistory, { role: 'assistant', content: fullResponse }] as never[]);  // fixed with copilot
//         } catch (error) {
//             console.error('Error in ChatGPT response:', error);
//         } finally {
//             setIsLoading(false);
//             setStreamingResponse('');
//         }
//     };

//     // renderMessage 함수와 return 문은 이전과 동일합니다.
//     const renderMessage = (msg: any, index: any) => {
//         switch(msg.role) {
//             case 'system':
//                 return (
//                     <div key={index} className="mb-4 text-center">
//                         <p className="text-gray-400 text-sm italic">{msg.content}</p>
//                     </div>
//                 );
//             case 'user':
//                 return (
//                     <div key={index} className="mb-4 text-right">
//                         <div className="inline-block p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
//                             {msg.content}
//                         </div>
//                     </div>
//                 );
//             case 'assistant':
//                 return (
//                     <div key={index} className="mb-4 text-left flex items-start">
//                         <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600 mr-2 mt-1" />
//                         {ManualMarkdown(msg.content)}
//                     </div>
//                     // <DebouncedManualMarkdown content={msg.content} />
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="flex flex-col h-screen">
//             <main className={`${pretendard.className} flex-grow w-full flex flex-col p-6 overflow-y-auto`}>
//                 {chatHistory.map((msg, index) => renderMessage(msg, index))}
//                 {isLoading && streamingResponse && (
//                     <div className="mb-4 text-left flex items-start">
//                         <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600 mr-2 mt-1" />
//                         {/* <p className="text-black">{streamingResponse}</p> */}
//                         {ManualMarkdown(streamingResponse)}
//                     </div>
//                     // <DebouncedManualMarkdown content={streamingResponse} />
//                 )}
//                 <div ref={chatEndRef} />
//                 <PythonCodeExample
//                     title="Python 코드 예시"
//                 />
//             </main>
//             <Footer
//                 message={message} 
//                 setMessage={setMessage}
//                 handleTextInput={handleTextInput}
//             />
//         </div>
//     );
// }