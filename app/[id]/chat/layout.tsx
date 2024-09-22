"use client";

import { jost, pretendard } from "@/app/assets/fonts/font_collection";
import React, { useState, useEffect, useRef } from "react";
import Header from "@/app/components/layout/header";
import SideNav from "@/app/components/layout/sidenav";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    // const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 768);
    const [isOpen, setIsOpen] = useState(false);
    const prevWidthRef = useRef(window.innerWidth);

    // 윈도우 크기에 따라 사이드바 열림/닫힘 상태 변경 (단 아직은 부족함: chatGPT는 내가 열어/닫아두고자 하면 내 의도대로 그 상태를 지속함)
    // useEffect(() => {
    //     const handleResize = () => {
    //       const currentWidth = window.innerWidth;
    //       const prevWidth = prevWidthRef.current;
    
    //       if ((prevWidth < 768 && currentWidth >= 768) || (prevWidth >= 768 && currentWidth < 768)) {
    //         setIsOpen(currentWidth >= 768);
    //       }
    
    //       prevWidthRef.current = currentWidth;
    //     };
    
    //     // 초기 설정
    //     handleResize();
    
    //     // 리사이즈 이벤트 리스너 추가
    //     window.addEventListener('resize', handleResize);
    
    //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);



    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={`${pretendard.className} flex w-screen h-screen`}>
            <button
                className="fixed top-3 left-4 z-50 w-9 h-9 hover flex justify-center items-center rounded-md transition-colors duration-200"
                onClick={toggleSideNav}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-8 h-8 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                    <path
                    className={`transform transition-all duration-300 origin-center ${
                        isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    }`}
                    d="M5.33333 8H26.6667M5.33333 16H26.6667M5.33333 24H26.6667"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    />
                    <path
                    className={`transform transition-all duration-300 origin-center ${
                        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                    d="M8 8L24 24M8 24L24 8"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    />
                </svg>
            </button>
            <SideNav isOpen={isOpen}/>
            <div className={`flex flex-col w-full h-screen transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}>
                {/* <Header title="새미랑 사귀는 방법 101"/> */}
                <Header title="Parallel GPT" />
                {children}
            </div>
        </div>
    
    );
}