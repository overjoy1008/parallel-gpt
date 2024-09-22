// UNDER CONSTRUCTION
// Assistant 혹은 Model의 답변은 병렬로 보이게 만들기

import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import ManualMarkdown from "@/app/usecase/manual_markdown";
import BackslashN from "@/app/usecase/backslash_n";


interface Message {
    role: string;
    content: string;
}

interface PastChatProps {
    chatFirstHistory: Message[];
}

const PastChat: React.FC<PastChatProps> = ({ chatFirstHistory }) => {

    const renderMessage = (msg: Message, index: number) => {
        switch(msg.role) {
            case 'system':
                return (
                    <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                        <div key={index} className="mx-auto flex flex-col md:max-w-7xl mb-4 text-center">
                            <div className="triple-parallel flex justify-around">
                                <div className="text-gray-400 text-sm italic">
                                    {BackslashN(msg.content)}
                                </div>
                                <div className="text-gray-400 text-sm italic">
                                    {BackslashN(msg.content)}
                                </div>
                                {/* <div className="text-gray-400 text-sm italic">
                                    {(msg.content)}
                                </div> */}
                            </div>
                        </div>
                    </div>
                );
            case 'user':
                return (
                    <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                        <div key={index} className="flex justify-center mx-auto flex-col gap-1 empty:hidden items-end rtl:items-start md:max-w-7xl">
                            <div className="inline-block py-2.5 px-5 rounded-3xl userPrompt font-medium max-w-[80%]">
                                {BackslashN(msg.content)}
                            </div>
                        </div>
                    </div>
                );
            case 'assistant':
                return (
                    <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                        <div className="mx-auto md:max-w-5xl">
                            <div className="w-3xl triple-parallel flex justify-around gap-x-5 overflow-x-auto">


                                <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                                    <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">
                                        <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                            <div className="mt-5">
                                                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                            </div>
                                        </div>
                                        {ManualMarkdown(msg.content)}
                                    </div>
                                </div>


                                <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                                    <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">
                                        <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                            <div className="mt-5">
                                                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                            </div>
                                        </div>
                                        {ManualMarkdown(msg.content)}
                                    </div>
                                </div>


                                <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
                                    <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">
                                        <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                            <div className="mt-5">
                                                <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                            </div>
                                        </div>
                                        {ManualMarkdown(msg.content)}
                                    </div>
                                </div>



                            </div>

                            {/* <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">
                                <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                    <div className="mt-5">
                                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>
                                {ManualMarkdown(msg.content)}
                            </div> */}


                            {/* <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">
                                <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                    <div className="mt-5">
                                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>
                                {ManualMarkdown(msg.content)}
                            </div>

                            
                            <div key={index} className="mx-auto flex flex-1 gap-2 md:gap-3 lg:gap-4">

                                <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                                    <div className="mt-5">
                                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                                    </div>
                                </div>
                                {ManualMarkdown(msg.content)}
                            </div> */}


                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {chatFirstHistory.map((msg, index) => renderMessage(msg, index))}
            {/* <PythonCodeExample title="Python 코드 예시" pythonCode={pythonCode} /> */}
        </>
    );
};

export default PastChat;