// UNDER CONSTRUCTION

import React, { useState, useEffect, useRef } from 'react';
import { PaperClipIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
// import Input from "@/app/components/input";
import ChatGPTInput from '@/app/components/chat/chatgpt_input';
import ModelDropdown from '@/app/components/nextui/dropdown'

export default function Footer({ message, setMessage, handleTextInput,
    selectedFirstKeys, setSelectedFirstKeys, selectedSecondKeys, setSelectedSecondKeys }:

    { message: string, setMessage: (message: string) => void, handleTextInput: (message: string) => void,
        selectedFirstKeys: Set<string>, setSelectedFirstKeys: (selectedKeys: Set<string>) => void,
        selectedSecondKeys: Set<string>, setSelectedSecondKeys: (selectedKeys: Set<string>) => void }
) {

    const selectedFirstModel = React.useMemo(
        () => Array.from(selectedFirstKeys).join(", ").replaceAll("_", " "),
        [selectedFirstKeys]
    );

    console.log('selectedFirstKeys::::', selectedFirstModel);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (message.trim()) {
            // onSubmit(message);
            // console.log("Send button clicked: ", message);
            handleTextInput(message);
            setMessage('');
        }
    };

    const [lineCount, setLineCount] = useState(1);
    // const textareaRef = useRef(null);
    // useEffect(() => {
    //     const updateHeight = () => {
    //       const textarea = textareaRef.current;
    //       if (textarea) {
    //         const newHeight = Math.min(scrollHeight, 8 * 12); // 최대 8줄(8 * 48px)
    //         setLineCount(newHeight);
    //       }
    //     };
    //     updateHeight();
    //   }, [message]);


    return (
        <footer className="z-30 bg-transparent rounded-t-3xl py-2 px-4">
            <div className="flex justify-around mb-2">
                <ModelDropdown
                    title="Select First Model"
                    selectedKeys={selectedFirstKeys}
                    setSelectedKeys={setSelectedFirstKeys}
                />
                {/* <ModelDropdown
                    title="Select Second Model"
                    selectedKeys={selectedSecondKeys}
                    setSelectedKeys={setSelectedSecondKeys}
                /> */}
                {/* <ModelDropdown
                    title="Select Third Model"
                    selectedKeys={selectedThirdKeys}
                    handleSelectionChange={handleThirdSelectionChange}
                /> */}
            </div>
            <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                <form onSubmit={handleSubmit} className="w-full" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R3ai6t94hd35:" data-state="closed">
                    <div className="relative flex h-full max-w-full flex-1 flex-col">
                        <div className="absolute bottom-full left-0 right-0 z-20">
                            <div className="relative h-full w-full">
                                <div className="mb-2 flex flex-col gap-3.5 pt-2"></div>
                            </div>
                        </div>
                        <div className="group relative flex w-full items-center">
                            <div className="absolute bottom-16 space-y-2 z-20"></div>
                            <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-2 transition-colors bg-[#f7f7f7] dark:bg-token-main-surface-secondary">
                                <div className="flex items-end gap-1.5 pl-1 md:gap-2">
                                    <div className="">
                                        <button
                                            type="button"
                                            className="flex justify-center items-center w-10 h-10 rounded-full"
                                        >
                                            <PaperClipIcon className="w-6 gray-900" />
                                        </button>
                                    </div>
                                    {/* <div className="-ml-2.5 flex" style="opacity: 1;"><div className="relative"><div className="relative"><div className="flex flex-col"><input multiple="" type="file" tabindex="-1" className="hidden" style="display: none;"><button type="button" id="radix-:r8:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0"></button><span className="flex" data-state="closed"><span><button className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary dark:text-white focus-visible:outline-black dark:focus-visible:outline-white mb-1" aria-disabled="false" aria-label="파일 첨부"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path></svg></button></span></span><div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rb:" data-state="closed"></div></div></div></div></div> */}
                                    <ChatGPTInput
                                        message={message}
                                        setMessage={setMessage}
                                        handleTextInput={handleTextInput}
                                    />
                                    <button 
                                        type="submit" 
                                        className={`flex ml-2 justify-center items-center w-10 h-10 rounded-full transition-colors duration-200 ${
                                            message.trim() 
                                            ? "text-gray-100 background-orange-500" 
                                            : "text-gray-100 bg-gray-300"
                                        }`}
                                        disabled={!message.trim() && selectedFirstModel === "Select First Model"}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1 0 0 0 1.169 1.409l5-1.429A1 1 0 0 0 9 15.571V11a1 1 0 1 1 2 0v4.571a1 1 0 0 0 .725.962l5 1.428a1 1 0 0 0 1.17-1.408z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <p className="mt-2 text-xs text-center text-gray-400">Parallel GPT는 실수를 할 수 있습니다. 중요한 정보를 확인하세요</p>      
        </footer>
    );
  }
  
        // <footer className="z-30 bg-white rounded-t-3xl py-2 px-4">
        //     <div className="flex justify-around mb-2">
        //         <ModelDropdown
        //             title="Select First Model"
        //             selectedKeys={selectedFirstKeys}
        //             setSelectedKeys={setSelectedFirstKeys}
        //         />
        //         {/* <ModelDropdown
        //             title="Select Second Model"
        //             selectedKeys={selectedSecondKeys}
        //             setSelectedKeys={setSelectedSecondKeys}
        //         /> */}
        //         {/* <ModelDropdown
        //             title="Select Third Model"
        //             selectedKeys={selectedThirdKeys}
        //             handleSelectionChange={handleThirdSelectionChange}
        //         /> */}
        //     </div>
        //     <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex justify-center items-center space-x-2">
        //         <div className={`flex justify-between items-center flex-grow h-14 py-2 px-2 bg-gray-100 rounded-full text-sm focus:outline-none`}>
        //             <button
        //                 type="button"
        //                 className="flex justify-center items-center w-10 h-10 rounded-full"
        //             >
        //                 <PaperClipIcon className="w-6 gray-900" />
        //             </button>
        //             <ChatGPTInput
        //                 message={message}
        //                 setMessage={setMessage}
        //                 handleTextInput={handleTextInput}
        //             />
        //             <button 
        //                 type="submit" 
        //                 className={`flex ml-2 justify-center items-center w-10 h-10 rounded-full transition-colors duration-200 ${
        //                     message.trim() 
        //                     ? "text-gray-100 background-orange-500" 
        //                     : "text-gray-100 bg-gray-300"
        //                 }`}
        //                 disabled={!message.trim()}
        //             >
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.894 2.553a1 1 0 0 0-1.788 0l-7 14a1 1 0 0 0 1.169 1.409l5-1.429A1 1 0 0 0 9 15.571V11a1 1 0 1 1 2 0v4.571a1 1 0 0 0 .725.962l5 1.428a1 1 0 0 0 1.17-1.408z"></path></svg>
        //             </button>
        //         </div>
        //     </form>
        //     <p className="mt-2 text-xs text-center text-gray-400">Parallel GPT는 실수를 할 수 있습니다. 중요한 정보를 확인하세요</p>      
        // </footer>