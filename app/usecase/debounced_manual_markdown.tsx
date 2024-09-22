// import React, { useMemo } from 'react';
// import debounce from 'lodash.debounce';
// import ManualMarkdown from "@/app/usecase/manual_markdown";
// import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

// export default function DebouncedManualMarkdown({ content = '' }: { content?: string }) {
//   const debouncedMarkdown = useMemo(
//     () => debounce((text: string) => ManualMarkdown(text), 300),
//     []
//   );

//   return (
//     <div className="mb-4 text-left flex items-start">
//       <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600 mr-2 mt-1" />
//       {debouncedMarkdown(content)}
//     </div>
//   );
// }

import React, { useMemo } from 'react';
import debounce from 'lodash.debounce';
import ManualMarkdown from "@/app/usecase/manual_markdown";  // 경로를 적절히 수정하세요
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function DebouncedManualMarkdown({ content = '' }: { content?: string }) {
  const debouncedMarkdown = useMemo(
    () => debounce((text: string) => ManualMarkdown(text), 300),
    []
  );

  return (
    <div className="mb-4 text-left flex items-start">
      <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600 mr-2 mt-1" />
      {debouncedMarkdown(content)}
    </div>
  );
}