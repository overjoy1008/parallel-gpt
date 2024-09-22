import React, { useState } from 'react';
// import {isFirstLine, setFirstLine} from "@/app/[id]/chat/page";
import CodeSnippet from "@/app/components/chat/code_snippet";

export default function ManualMarkdown(rawText: string) {

    let content = rawText;
    let transformedText = rawText;
    let match;

    // let pythonCodeList = [];
    // let nullCodeList = [];
    let everyCodeList = [];

    let isStreaming = false;
    let streamingLanguage = '';
    let streamingCode = '';

    const regexSingle = /```(\w+)?\n/g;
    const regexPair = /```(\w+)?\n([\s\S]+?)```/g;


    while ((match = regexPair.exec(rawText)) !== null) {
        const language = match[1] || 'code';
        const code = match[2].trim();
        
        if (code.length > 0) {
        everyCodeList.push({ "language": language, "code": code });
        
        // Replace the original code block with CodeSnippet component
        const replacement = `<CodeSnippet>`;
        transformedText = transformedText.replace(match[0], replacement);
        }
    }

    content = transformedText;
    


    // 스트리밍 중인 마지막 코드 블록 처리
    //if (isStreaming) {
        const matchesRegexSingle = content.match(regexSingle);
        const singleMatchCount = matchesRegexSingle ? matchesRegexSingle.length : 0;
        
        if (singleMatchCount % 2 !== 0) {  // 홀수 개의 ``` 가 있다면 스트리밍 중
            isStreaming = true;
            const lastCodeBlockStart = content.lastIndexOf('```');
        if (lastCodeBlockStart !== -1) {
            const beforeCode = content.substring(0, lastCodeBlockStart);
            const streamingPart = content.substring(lastCodeBlockStart + 3);
            const languageMatch = streamingPart.match(/^(\w+)?\n/);
            streamingLanguage = languageMatch ? languageMatch[1] || 'code' : 'code';
            streamingCode = streamingPart.replace(/^(\w+)?\n/, '').trim();
            transformedText = beforeCode;
        }
        }
    //}



    let codeReplaceCount = -1;

    const lines = transformedText.split('\n');
    console.log('lines:', lines);

    const processLine = (line: string, index: number): JSX.Element => {
        
        // 들여쓰기 수준 계산
        const indentLevel = line.search(/\S|$/);
        let processedContent = line.trim();
        

        // 헤더 처리 (# ~ ######)
        const headerMatch = processedContent.match(/^(#{1,6})\s(.+)$/);
        if (headerMatch) {
        const level = headerMatch[1].length;
        const HeaderTag = `h3` as keyof JSX.IntrinsicElements;
        return <HeaderTag key={index} className={`markdown-content h3`} style={{marginLeft: `${indentLevel * 20}px`}}>{headerMatch[2]}</HeaderTag>;
        }

        // 볼드 및 이탤릭 처리
        processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        processedContent = processedContent.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // 인라인 코드 처리
        processedContent = processedContent.replace(/`(.*?)`/g, '<code>$1</code>');

        // 링크 처리
        processedContent = processedContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        

        // 순서 있는 리스트 처리
        const orderedListMatch = processedContent.match(/^(\d+)\.\s(.+)$/);
        if (orderedListMatch) {
        return (
            <li key={index} style={{marginLeft: `${(indentLevel + 1) * 20}px`}}>
            <span dangerouslySetInnerHTML={{__html: orderedListMatch[2]}} />
            </li>
        );
        }

        // 순서 없는 리스트 처리
        if (processedContent.startsWith('- ')) {
            return (
            <li key={index} style={{marginLeft: `${(indentLevel + 1) * 20}px`}}>
                <span dangerouslySetInnerHTML={{__html: processedContent.slice(2)}} />
            </li>
            );
        }

        // 코드 스니펫 처리
        if (processedContent.startsWith('<CodeSnippet')) {
            codeReplaceCount++;
            return (
            <CodeSnippet language={everyCodeList[codeReplaceCount]["language"]} code={everyCodeList[codeReplaceCount]["code"]} />
            );
        }

        // 기본 텍스트 처리
        if (processedContent) {
            return (
            <p key={index} className={`markdown-content p`} style={{marginLeft: `${indentLevel * 20}px`, marginBottom: '0.5em'}}>
                <span dangerouslySetInnerHTML={{__html: processedContent}} />
            </p>
            );
        }

        // 코드 스니펫 주위에 생기는 빈 줄 처리
        else {
            return <></>;
        }
    };

    const processedLines = lines.map(processLine);

    return <div className="whitespace-pre-wrap relative w-full min-w-0">{processedLines}
        {isStreaming ? (
  <CodeSnippet language={streamingLanguage} code={streamingCode} />
) : null}
    </div>;
}