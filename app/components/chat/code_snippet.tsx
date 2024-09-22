import React, { useEffect, useState } from 'react';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import styles from '@/app/assets/css/CodeBlock.module.css';

const CodeSnippetHeader = ({ language, code }: { language: string, code: string }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };
  
    return (
      <div className={`flex items-center justify-between px-4 py-2 rounded-t-lg text-gray-300 font-medium codeHeader`}>
        <span className="text-sm">{language}</span>
        <button 
          onClick={handleCopy}
          className="text-sm hover:text-white focus:outline-none transition duration-150 ease-in-out"
        >
          {copied ? (
            <div className="flex items-center">
                <CheckIcon className="w-4 h-4 mr-1" />
                <span>Copied!</span>
            </div>
        ) : (
            <div className="flex items-center">
                <ClipboardIcon className="w-4 h-4 mr-1" />
                <span>Copy</span>
            </div>
        )}
        </button>
      </div>
    );
  };

const CodeHighlighter = ({ language, code }: { language: string, code: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`!mt-none rounded-md bg-gray-800 p-4 ${styles.codeBlock} overflow-x-auto`}>
      <code className={`language-${language} overflow-x-auto`}>{code}</code>
    </pre>
  );
};

export default function CodeSnippet({language, code}: {language: string, code: string}) {
  return (
    <div className="max-w-2xl mx-auto mt-2 overflow-x-auto">
      <CodeSnippetHeader language={language} code={code} />
      <CodeHighlighter language={language} code={code} />
    </div>
  );
}