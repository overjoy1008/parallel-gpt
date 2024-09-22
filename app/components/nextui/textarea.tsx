// import React, { useState, useRef, useEffect } from 'react';
// import css from 'styled-jsx/css';

// export default function SingleLineTextarea({ minRows = 1, maxRows = Infinity, value, onChange, onKeyDown, placeholder, className }:
//     { minRows?: number, maxRows?: number, value: string, onChange?: (e: any) => void, onKeyDown?: (e: any) => void, placeholder?: string, className?: string }
// ) {
//     const textareaRef = useRef(null);
//     const [textareaHeight, setTextareaHeight] = useState('28px');
//     const [allowedLines, setAllowedLines] = useState(1);

//     // function getTextareaLineCount(textarea) {
//     //     // 현재 스크롤 높이와 클라이언트 높이를 저장
//     //     const originalScrollHeight = textarea.scrollHeight;
//     //     const originalClientHeight = textarea.clientHeight;
      
//     //     // textarea의 현재 스타일을 저장
//     //     const originalStyle = textarea.style.cssText;
      
//     //     // textarea를 일시적으로 높이 제한 없이 설정
//     //     textarea.style.cssText = 'height:auto;overflow:hidden;';
      
//     //     // 줄 수 계산
//     //     const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
//     //     const paddingTop = parseInt(getComputedStyle(textarea).paddingTop);
//     //     const paddingBottom = parseInt(getComputedStyle(textarea).paddingBottom);
//     //     const lines = Math.floor((textarea.scrollHeight - paddingTop - paddingBottom) / lineHeight);
//     //     console.log('lines', lines);
//     //     // 원래 스타일로 복원
//     //     textarea.style.cssText = originalStyle;
      
//     //     // 스크롤 위치 복원
//     //     textarea.scrollTop = originalScrollHeight - originalClientHeight;
        
//     //     return lines;
//     //   }

//     useEffect(() => {
//         const adjustHeight = () => {
//             setTextareaHeight(`${28}px`);
//             const textarea = textareaRef.current;
//             console.log('textarea.scrollHeight', textarea.scrollHeight);
//             const lineCount = Math.floor(textarea.scrollHeight / 28);
//             console.log('lineCount', lineCount);
//             //setTextareaHeight(`${lineCount * 28}px`);
//             if (textarea) {
//                 // const lineCount = value.split(/\r\n|\r|\n/).length;
                
                
//                 if ( minRows <= lineCount && lineCount <= maxRows ) {
//                     setAllowedLines(lineCount);
//                 }
//                 else if (lineCount > maxRows) {
//                     setAllowedLines(maxRows);
//                 }
//                 else {
//                     setAllowedLines(minRows);
//                 }
//                 setTextareaHeight(`${allowedLines * 28}px`);
//             }
//         };
    
//         adjustHeight();
//       }, [value, maxRows]);

  
//     return (
//         <div className={`group flex flex-col justify-center data-[hidden=true]:hidden w-full ${className}`} data-slot="base" data-filled="true" data-filled-within="true">
//             <div data-slot="input-wrapper" className="relative w-full inline-flex tap-highlight-transparent flex-row items-center px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-10 min-h-10 rounded-medium !h-auto transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background py-2 cursor-text" data-has-multiple-rows="true">
//                 <div data-slot="inner-wrapper" className="inline-flex w-full h-full box-border items-start group-data-[has-label=true]:items-start">
//                     <textarea
//                         ref={textareaRef}
//                         value={ value }
//                         onChange={ onChange }
//                         onKeyDown={ onKeyDown }
//                         placeholder={ placeholder }
//                         className={ "w-full font-normal bg-transparent !outline-none placeholder:text-foreground-400 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text resize-none data-[hide-scroll=true]:scrollbar-hide group-data-[has-value=true]:text-default-foreground transition-height !duration-100 motion-reduce:transition-none"}
//                         aria-label={ placeholder }
//                         // id="react-aria974887608-:r0:"
//                         data-hide-scroll="true"
//                         style={{ height: `${textareaHeight}` }}
//                     />
//                     {/* <textarea data-slot="input" class="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 file:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text text-small resize-none data-[hide-scroll=true]:scrollbar-hide group-data-[has-value=true]:text-default-foreground transition-height !duration-100 motion-reduce:transition-none" aria-label="메시지 ChatGPT" placeholder="메시지 ChatGPT" id="react-aria7251664680-:r0:" data-hide-scroll="true" style="height: 84px !important;"></textarea> */}
//                 </div>
//             </div>
//         </div>
//     );
// };