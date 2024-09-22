import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import ManualMarkdown from "@/app/usecase/manual_markdown";


interface StreamingChatProps {
    streamingFirstResponse: string;
    isLoading: boolean;
}

const StreamingChat: React.FC<StreamingChatProps> = ({ streamingFirstResponse, isLoading }) => {
    if (!isLoading || !streamingFirstResponse) return null;

    return (
        <div className="text-base py-[18px] px-3 md:px-4 mx-auto w-full md:px-5 lg: px-4 xl:px-5">
            <div className="mx-auto flex flex-1 gap-4 md:gap-5 lg:gap-6 md:max-w-3xl">
                <div className='flex-shrink-0 flex flex-col relative items-end w-6 h-full'>
                    <div className="mt-5">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
                {ManualMarkdown(streamingFirstResponse)}
                {/* {streamingFirstResponse} */}
            </div>
        </div>
    );
};

export default StreamingChat;