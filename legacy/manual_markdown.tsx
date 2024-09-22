// import React, { useState } from 'react';
// import {code, Code} from "@nextui-org/react";
// // import {isFirstLine, setFirstLine} from "@/app/[id]/chat/page";
// import CodeSnippet from "@/app/components/chat/code_snippet";

// export default function ManualMarkdown(rawText: string) {

//     let content = rawText;
//     let transformedText = rawText;
//     let match;
    
//     let beforeCode = '';
//     // let detectedCode = '';
//     // let afterCode = '';

//     // let pythonCodeList = [];
//     // let nullCodeList = [];
//     let everyCodeList = [];

//     let totalMatchCount = 0;
//     let pythonMatchCount = 0;
//     let javascriptMatchCount = 0;
//     let nullMatchCount = 0;

//     let isStreaming = false;
//     let streamingLanguage = '';
//     let streamingCode = '';








    
//     // const regexPython = /```python\n([\s\S]*?)/g;  // /```\n도 처리해야 함!!
//     // const matchesPython = rawText.match(regexPython);
//     // pythonMatchCount = matchesPython ? matchesPython.length : 0;
//     // console.log(`파이썬 매치 횟수: ${pythonMatchCount}`);

//     // const regexJavascript = /```javascript\n([\s\S]*?)/g;  // /```\n도 처리해야 함!!
//     // const matchesJavascript = rawText.match(regexJavascript);
//     // javascriptMatchCount = matchesJavascript ? matchesJavascript.length : 0;
//     // console.log(`JS 매치 횟수: ${javascriptMatchCount}`);

//     // const regexNull = /```\n([\s\S]*?)```/g;
//     // const matchesNull = rawText.match(regexNull);
//     // nullMatchCount = matchesNull ? matchesNull.length : 0;
//     // console.log(`빈 자료 매치 횟수: ${nullMatchCount}`);


//     const regexPair = /```(\w+)?\n([\s\S]+?)```/g;
//     while ((match = regexPair.exec(rawText)) !== null) {
//         const language = match[1] || 'code';
//         const code = match[2].trim();
        
//         if (code.length > 0) {
//         everyCodeList.push({ "language": language, "code": code });
        
//         // Replace the original code block with CodeSnippet component
//         const replacement = `<CodeSnippet>`;
//         transformedText = transformedText.replace(match[0], replacement);
//         }
//     }

//     content = transformedText;



//     const regexSingle = /```(\w+)?\n/g;
    
//     // const matchesRegexSingle = content.match(regexSingle);
//     // const singleMatchCount = matchesRegexSingle ? matchesRegexSingle.length : 0;
//     // if (singleMatchCount % 2) {
//     //     match = regexSingle.exec(content)
//     //     let streamingLanguage = match[1] || 'code';
//     //     const front_part = content.split('```');
//     //     if (front_part.length > 1) {
//     //         beforeCode = front_part[0];
//     //         streamingCode = front_part.slice(1).join('```');
//     //         everyCodeList.push({"language": streamingLanguage, "code": streamingCode});
//     //         transformedText = beforeCode+'<CodeSnippetPython/>';
//     //     }
//     // }



//     // 스트리밍 중인 마지막 코드 블록 처리
//     //if (isStreaming) {
//         const matchesRegexSingle = content.match(regexSingle);
//         const singleMatchCount = matchesRegexSingle ? matchesRegexSingle.length : 0;
        
//         if (singleMatchCount % 2 !== 0) {  // 홀수 개의 ``` 가 있다면 스트리밍 중
//             isStreaming = true;
//             const lastCodeBlockStart = content.lastIndexOf('```');
//         if (lastCodeBlockStart !== -1) {
//             const beforeCode = content.substring(0, lastCodeBlockStart);
//             const streamingPart = content.substring(lastCodeBlockStart + 3);
//             const languageMatch = streamingPart.match(/^(\w+)?\n/);
//             streamingLanguage = languageMatch ? languageMatch[1] || 'code' : 'code';
//             streamingCode = streamingPart.replace(/^(\w+)?\n/, '').trim();
//             transformedText = beforeCode;
//         }
//         }
//     //}









//     // const matchesTotal = rawText.match(regexTotal);
//     // totalMatchCount = matchesTotal ? matchesTotal.length : 0;
//     // console.log(`총 매치 횟수: ${(totalMatchCount + (totalMatchCount%2)) / 2}`);







//     // for (let i = 0; i < pythonMatchCount; i++) {
//     //     const front_parts = rawText.split('```python\n');
//     //     if (front_parts.length > 1) {
//     //         beforeCode = front_parts[0];
//     //         detectedCode = front_parts.slice(1).join('```python\n');
//     //         const back_parts = detectedCode.split('```');
//     //         if (back_parts.length > 1) {
//     //             detectedCode = back_parts[0];
//     //             afterCode = back_parts.slice(1).join('```');
//     //         }
//     //     } else {
//     //         rawText = content;
//     //     }

//     //     console.log(i, 'beforeCode:', beforeCode);
//     //     console.log(i, 'detectedCode:', detectedCode);
//     //     console.log(i, 'afterCode:', afterCode);
//     //     everyCodeList.push({"language": "python", "code": detectedCode});
//     //     content = beforeCode+'<CodeSnippetPython/>'+afterCode;
//     //     rawText = content;
//     //     beforeCode = '';
//     //     detectedCode = '';
//     //     afterCode = '';
//     // }

//     // for (let i = 0; i < javascriptMatchCount; i++) {
//     //     const front_parts = rawText.split('```javascript\n');
//     //     if (front_parts.length > 1) {
//     //         beforeCode = front_parts[0];
//     //         detectedCode = front_parts.slice(1).join('```javascript\n');
//     //         const back_parts = detectedCode.split('```');
//     //         if (back_parts.length > 1) {
//     //             detectedCode = back_parts[0];
//     //             afterCode = back_parts.slice(1).join('```');
//     //         }
//     //     } else {
//     //         rawText = content;
//     //     }

//     //     console.log(i, 'beforeCode:', beforeCode);
//     //     console.log(i, 'detectedCode:', detectedCode);
//     //     console.log(i, 'afterCode:', afterCode);
//     //     everyCodeList.push({"language": "javascript", "code": detectedCode});
//     //     content = beforeCode+'<CodeSnippet/>'+afterCode;
//     //     rawText = content;
//     //     beforeCode = '';
//     //     detectedCode = '';
//     //     afterCode = '';
//     // }

//     // for (let i = 0; i < nullMatchCount; i++) {
//     //     const front_parts = rawText.split('```\n');
//     //     if (front_parts.length > 1) {
//     //         beforeCode = front_parts[0];
//     //         detectedCode = front_parts.slice(1).join('```\n');
//     //         const back_parts = detectedCode.split('```');
//     //         if (back_parts.length > 1) {
//     //             detectedCode = back_parts[0];
//     //             afterCode = back_parts.slice(1).join('```');
//     //         }
//     //     } else {
//     //         rawText = content;
//     //     }

//     //     console.log(i, 'beforeCode:', beforeCode);
//     //     console.log(i, 'detectedCode:', detectedCode);
//     //     console.log(i, 'afterCode:', afterCode);
//     //     everyCodeList.push({"language": "code", "code": detectedCode});
//     //     content = beforeCode+'<CodeSnippetNull/>'+afterCode;
//     //     rawText = content;
//     //     beforeCode = '';
//     //     detectedCode = '';
//     //     afterCode = '';
//     // }

    










//     // rawText = content;

//     // console.log('middle content:', content);

    


//     // const text = "Next.js is fast. Next.js is flexible.";

//     // const regex = /```python\n([\s\S]*?)```/;
//     // let count = 0;
//     // const newText = content.replace(regex, () => {
//     //     count++;
//     //     return `React${count}`;
//     //   });
 


//     let pythonReplaceCount = -1;
//     let nullReplaceCount = -1;
//     let codeReplaceCount = -1;

//     const lines = transformedText.split('\n');
//     console.log('lines:', lines);

//     const processLine = (line: string, index: number): JSX.Element => {
//         // console.log('line:', line);
        
//         // 들여쓰기 수준 계산
//         const indentLevel = line.search(/\S|$/);
//         let processedContent = line.trim();
        

//         // 헤더 처리 (# ~ ######)
//         const headerMatch = processedContent.match(/^(#{1,6})\s(.+)$/);
//         if (headerMatch) {
//         const level = headerMatch[1].length;
//         const HeaderTag = `h3` as keyof JSX.IntrinsicElements;
//         return <HeaderTag key={index} className={`markdown-content h3`} style={{marginLeft: `${indentLevel * 20}px`}}>{headerMatch[2]}</HeaderTag>;
//         }

//         // 볼드 및 이탤릭 처리
//         processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
//         processedContent = processedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');

//         // 인라인 코드 처리
//         processedContent = processedContent.replace(/`(.*?)`/g, '<Code size="lg">$1</Code>');

//         // 링크 처리
//         processedContent = processedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        

//         // 순서 있는 리스트 처리
//         const orderedListMatch = processedContent.match(/^(\d+)\.\s(.+)$/);
//         if (orderedListMatch) {
//         return (
//             <li key={index} style={{marginLeft: `${(indentLevel + 1) * 20}px`}}>
//             <span dangerouslySetInnerHTML={{__html: orderedListMatch[2]}} />
//             </li>
//         );
//         }

//         // 순서 없는 리스트 처리
//         if (processedContent.startsWith('- ')) {
//             return (
//             <li key={index} style={{marginLeft: `${(indentLevel + 1) * 20}px`}}>
//                 <span dangerouslySetInnerHTML={{__html: processedContent.slice(2)}} />
//             </li>
//             );
//         }



//         // // 파이썬 코드 블럭 처리
//         // if (processedContent.startsWith('<CodeSnippetPython')) {
//         //     pythonReplaceCount++;
//         //     return (
//         //     <CodeSnippet key={index} language="python" code={pythonCodeList[pythonReplaceCount]} />
//         //     );
//         // }
//         // // 미정 코드 블럭 처리
//         // if (processedContent.startsWith('<CodeSnippetNull')) {
//         //     nullReplaceCount++;
//         //     return (
//         //     <CodeSnippet key={index} language="" code={nullCodeList[nullReplaceCount]} />
//         //     );
//         // }

//         //모든 코드 블럭 처리
//         if (processedContent.startsWith('<CodeSnippet')) {
//             codeReplaceCount++;
//             return (
//             <CodeSnippet language={everyCodeList[codeReplaceCount]["language"]} code={everyCodeList[codeReplaceCount]["code"]} />
//             );
//         }



//         // 기본 텍스트 처리
//         return (
//         <p key={index} className={`markdown-content p`} style={{marginLeft: `${indentLevel * 20}px`, marginBottom: '0.5em'}}>
//             <span dangerouslySetInnerHTML={{__html: processedContent}} />
//         </p>
//         );
//     };

//     const processedLines = lines.map(processLine);

//     // console.log('processedLines[0]:', JSON.stringify(processedLines[0]));
//     // console.log('processedLines[1]:', JSON.stringify(processedLines[1]));

//     return <div className="whitespace-pre-wrap relative w-full min-w-0">{processedLines}
//         {isStreaming ? (
//   <CodeSnippet language={streamingLanguage} code={streamingCode} />
// ) : null}
//     </div>;
// }


// // import React from 'react';

// // const ManualMarkdown = (content: string): JSX.Element => {
// //   const lines = content.split('\n');
  
// //   const processLine = (line: string, index: number): JSX.Element => {
// //     // Calculate indentation level
// //     const indentLevel = line.search(/\S|$/);
    
// //     // Process headers
// //     const headerMatch = line.match(/^(#{1,6})\s(.+)/);
// //     if (headerMatch) {
// //       const level = headerMatch[1].length;
// //       const text = headerMatch[2];
// //       const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
// //       return <HeaderTag key={index} className={`text-${7-level}xl font-bold mb-2`}>{text}</HeaderTag>;
// //     }
    
// //     // Process bold and italic
// //     const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/);
// //     const processedParts = parts.map((part, partIndex) => {
// //       if (part.startsWith('**') && part.endsWith('**')) {
// //         return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
// //       } else if (part.startsWith('*') && part.endsWith('*')) {
// //         return <em key={partIndex}>{part.slice(1, -1)}</em>;
// //       }
// //       return part;
// //     });
    
// //     // Return processed line with indentation
// //     return (
// //       <p key={index} style={{ marginLeft: `${indentLevel * 20}px` }} className="mb-1">
// //         {processedParts}
// //       </p>
// //     );
// //   };
  
// //   return (
// //     <div>
// //       {lines.map((line, index) => processLine(line, index))}
// //     </div>
// //   );
// // };

// // export default ManualMarkdown;