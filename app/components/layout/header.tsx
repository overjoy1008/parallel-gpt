import Link from 'next/link';
import { useState } from 'react';
// import ModelDropdown from '@/app/components/nextui/dropdown'

export default function Header({ title }:
    { title: string }
) {
    
    return (
        <header className="flex h-14 items-center bg-transparent shadow-sm z-30 p-4">
            <div className="flex grow justify-center ml-10 cursor-pointer text-center truncate">
                <h1 className="text-lg font-bold text-gray-500 px-2 py-1 hover rounded-md transition-colors duration-200">
                    {title}
                </h1>
                
            </div>
            <div className="flex justify-end">
                <Link href="/1/profile" passHref>
                    <span className="text-sm cursor-pointer text-gray-500">
                        Profile
                    </span>
                </Link>
            </div>
        </header>
    );

}