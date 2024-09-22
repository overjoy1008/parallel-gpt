"use client";

import { jost, pretendard } from "@/app/assets/fonts/font_collection";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Footer from "@/app/components/layout/footer";
import ChatHistoryUsecase from "@/app/usecase/chat_history_usecase";
import PastChat from "@/app/components/chat/past_chat";
import StreamingChat from "@/app/components/chat/streaming_chat";

export default function Page() {
    const [message, setMessage] = useState('');
    // const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [streamingResponse, setStreamingResponse] = useState('');
    const chat_history_usecase = new ChatHistoryUsecase();
    const chatEndRef = useRef(null);
    

    const [chatFirstHistory, setChatFirstHistory] = useState([]);
    const [chatSecondHistory, setChatSecondHistory] = useState([]);
    const [chatThirdHistory, setChatThirdHistory] = useState([]);

    const [streamingFirstResponse, setStreamingFirstResponse] = useState('');
    const [streamingSecondResponse, setStreamingSecondResponse] = useState('');
    const [streamingThirdResponse, setStreamingThirdResponse] = useState('');


    const [selectedFirstKeys, setSelectedFirstKeys] = useState(new Set(["Select First Model"]));
    const [selectedSecondKeys, setSelectedSecondKeys] = useState(new Set(["Select Second Model"]));
    const [selectedThirdKeys, setSelectedThirdKeys] = useState(new Set(["Select Third Model"]));

    const selectedFirstModel = React.useMemo(
        () => Array.from(selectedFirstKeys).join(", ").replaceAll("_", " "),
        [selectedFirstKeys]
    );
    const selectedSecondModel = React.useMemo(
        () => Array.from(selectedSecondKeys).join(", ").replaceAll("_", " "),
        [selectedSecondKeys]
    );
    const selectedThirdModel = React.useMemo(
        () => Array.from(selectedThirdKeys).join(", ").replaceAll("_", " "),
        [selectedThirdKeys]
    );

    // console.log('selectedFirstKeys:', selectedFirstModel);
    // console.log('selectedSecondKeys:', selectedSecondModel);
    // console.log('selectedThirdKeys:', selectedThirdModel);



    useEffect(() => {
        chat_history_usecase.customPrompt(setChatFirstHistory, "너는 코딩 전문가야.");
        chat_history_usecase.customPrompt(setChatSecondHistory, "너는 코딩 전문가야.");
        chat_history_usecase.customPrompt(setChatThirdHistory, "너는 코딩 전문가야.");
    }, []);

    useEffect(() => {
        (chatEndRef.current as HTMLElement | null)?.scrollIntoView({ behavior: "smooth" });
    }, [chatFirstHistory, streamingResponse]);

    const handleTextInput = async (textInput: string) => {
        chat_history_usecase.inputText(chatFirstHistory, setChatFirstHistory, textInput);
        chat_history_usecase.inputText(chatSecondHistory, setChatSecondHistory, textInput);
        chat_history_usecase.inputText(chatThirdHistory, setChatThirdHistory, textInput);
        console.log('chatFirstHistory before fetch:\n', chatFirstHistory);
        console.log('chatSecondHistory before fetch:\n', chatSecondHistory);
        console.log('chatThirdHistory before fetch:\n', chatThirdHistory);
        // console.log('selectedFirstKeys:', selectedFirstKeys);
        
        setIsLoading(true);
        try {
            setStreamingFirstResponse('');


            const firstResponse = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: selectedFirstModel,
                    chatHistory: chatFirstHistory,
                    max_tokens: 1000
                }),
            });

            if (!firstResponse.ok) {
                throw new Error(`HTTP error! status: ${firstResponse.status}`);
            }

            const firstReader = firstResponse.body?.getReader();
            const firstDecoder = new TextDecoder();
            let fullFirstResponse = '';

            while (true) {
                const { value, done } = firstReader ? await firstReader.read() : { value: null, done: true };
                if (done) break;
                const firsrChunk = firstDecoder.decode(value || new Uint8Array());
                const firstLines = firsrChunk.split('~~data~~');

                for (const firstParsedLine of firstLines) {
                    if (firstParsedLine === '[~~DONE~~]') continue;
                    fullFirstResponse += firstParsedLine;
                    setStreamingFirstResponse(prevFirstResponse => prevFirstResponse + firstParsedLine);
                }
            }

            //setChatFirstHistory(prevHistory => [...prevHistory, { role: 'assistant', content: fullResponse }] as never[]);
            chat_history_usecase.responseText(chatFirstHistory, setChatFirstHistory, fullFirstResponse);
            console.log('chatFirstHistory after fetch:\n', chatFirstHistory);

            
//-------------------------------------------------------------------------


            setStreamingSecondResponse('');

            const secondResponse = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: selectedSecondModel,
                    chatHistory: chatSecondHistory,
                    max_tokens: 1000
                }),
            });

            if (!secondResponse.ok) {
                throw new Error(`HTTP error! status: ${secondResponse.status}`);
            }

            const secondReader = secondResponse.body?.getReader();
            const secondDecoder = new TextDecoder();
            let fullSecondResponse = '';

            while (true) {
                const { value, done } = secondReader ? await secondReader.read() : { value: null, done: true };
                if (done) break;
                const secondChunk = secondDecoder.decode(value || new Uint8Array());
                const secondLines = secondChunk.split('~~data~~');

                for (const secondParsedLine of secondLines) {
                    if (secondParsedLine === '[~~DONE~~]') continue;
                    fullSecondResponse += secondParsedLine;
                    setStreamingSecondResponse(prevSecondResponse => prevSecondResponse + secondParsedLine);
                }
            }

            //setChatSecondHistory(prevHistory => [...prevHistory, { role: 'assistant', content: fullResponse }] as never[]);
            chat_history_usecase.responseText(chatSecondHistory, setChatSecondHistory, fullSecondResponse);
            console.log('chatSecondHistory after fetch:\n', chatSecondHistory);






        } catch (error) {
            console.error(`Error during response fetch:`, error);
        } finally {
            setIsLoading(false);
            setStreamingResponse('');
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-y-auto overflow-x-auto">
            <main className={`custom-scrollbar ${pretendard.className} flex-grow w-full flex flex-col pt-2 pb-6 px-0 overflow-y-auto overflow-x-auto`}>
                <PastChat chatFirstHistory={chatFirstHistory} />
                <StreamingChat streamingFirstResponse={streamingFirstResponse} isLoading={isLoading} />
                <div ref={chatEndRef} />
            </main>
            <Footer
                message={message} 
                setMessage={setMessage}
                handleTextInput={handleTextInput}
                selectedFirstKeys={selectedFirstKeys}
                setSelectedFirstKeys={setSelectedFirstKeys}
                selectedSecondKeys={selectedSecondKeys}
                setSelectedSecondKeys={setSelectedSecondKeys}
            />
        </div>
    );
}