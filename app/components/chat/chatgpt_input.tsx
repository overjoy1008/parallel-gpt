// UNDER CONSTRUCTION
// 엔터 키 뿐 아니라 실제 textarea의 줄 수를 가져오는 방법 찾아보기

import React, { useState, useRef, useEffect } from 'react';
// import { Textarea } from "@nextui-org/react";
import "@/app/assets/css/chatgpt_input.css";
// import SingleLineTextarea from "@/app/components/nextui/textarea";

export default function ChatGPTInput({ message, setMessage, handleTextInput }:
    { message: string, setMessage: (value: string) => void, handleTextInput: (value: string) => void }
) {

    const [input, setInput] = useState<string>(message || "")
    const [lineCount, setLineCount] = useState(1);
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('28px');
    const [allowedLines, setAllowedLines] = useState(1);

    useEffect(() => {
        setInput(message || "")
    }, [])

    // useEffect(() => {
    //     const adjustHeight = () => {
    //         setTextareaHeight(`${28}px`);
    //         const textarea = textareaRef.current;
    //         console.log('textarea.scrollHeight', textarea.scrollHeight);
    //         const lineCount = Math.floor(textarea.scrollHeight / 28);
    //         console.log('lineCount', lineCount);
    //         //setTextareaHeight(`${lineCount * 28}px`);
    //     };
    
    //     adjustHeight();
    //   }, [message]);


    return (
        <div className="flex min-w-0 flex-1 flex-col" style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
            <div className="_prosemirror-parent_15ceg_1 text-token-text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
                <textarea
                    // maxRows={1}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        console.log('onchange', e.target.value);
                        console.log('message', message);
                    }}
                    onKeyDown={(e) =>{
                        if(e.key === 'Enter' && !e.shiftKey) {
                            setInput(message);
                            e.preventDefault();
                            setMessage("");
                            // console.log('input', e.target.value);
                            handleTextInput(message);
                        }
                        else if (e.key === 'Enter' && e.shiftKey) {
                            setLineCount(lineCount + 1);
                        }
                    }}
                    placeholder="모델 선택 후 메시지를 입력해보세요..."
                    className={`custom-scrollbar flex-1 lines-${lineCount>5 ? 6 : lineCount} text-lg placeholder:font-normal font-semibold bg-transparent focus:outline-none block h-10 w-full resize-none border-0 bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary`}
                />
            </div>
        </div>
        
    );
}
//<textarea class="block h-10 w-full resize-none border-0 bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary" autofocus="" placeholder="메시지 ChatGPT" style="display: none;"></textarea><script nonce="">requestAnimationFrame((function(){window.__oai_logTTI?window.__oai_logTTI():window.__oai_SSR_TTI=window.__oai_SSR_TTI??Date.now()}))</script><div contenteditable="true" translate="no" class="ProseMirror" id="prompt-textarea"><p data-placeholder="메시지 ChatGPT" class="placeholder"><br class="ProseMirror-trailingBreak"></p></div></div></div>