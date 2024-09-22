import React from 'react';

const BackslashN = (content: string): JSX.Element => {
  const lines = content.split('\n');
  
  const processLine = (line: string, index: number): JSX.Element => {
    // Calculate indentation level
    const indentLevel = line.search(/\S|$/);
    
    // Process headers
    // const headerMatch = line.match(/^(#{1,6})\s(.+)/);
    // if (headerMatch) {
    //   const level = headerMatch[1].length;
    //   const text = headerMatch[2];
    //   const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;
    //   return <HeaderTag key={index} className={`text-${7-level}xl font-bold mb-2`}>{text}</HeaderTag>;
    // }
    
    // Process bold and italic
    const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/);
    const processedParts = parts.map((part, partIndex) => {
    //   if (part.startsWith('**') && part.endsWith('**')) {
    //     return <strong key={partIndex}>{part.slice(2, -2)}</strong>;
    //   } else if (part.startsWith('*') && part.endsWith('*')) {
    //     return <em key={partIndex}>{part.slice(1, -1)}</em>;
    //   }
      return part;
    });
    
    // Return processed line with indentation
    return (
      <p key={index} style={{ marginLeft: `${indentLevel * 20}px` }} className="mb-1">
        {processedParts}
      </p>
    );
  };
  
  return (
    <div>
      {lines.map((line, index) => processLine(line, index))}
    </div>
  );
};

export default BackslashN;