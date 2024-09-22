// import { useEffect, useState } from "react";
// import { Textarea } from "@nextui-org/react";
// import SingleLineTextarea from "@/app/components/nextui/textarea";

// // export default function Input({ type, placeholder, title, required, toParent, value }:
// //     { type?: string, placeholder?: string, title?: string, required?: boolean, toParent?: (value: string | string[] | number) => void, value?: string }) {

// export default function Input({ message, setMessage, handleTextInput }:
//     { message: string, setMessage: (value: string) => void, handleTextInput: (value: string) => void }
// ) {

//     const [input, setInput] = useState<string>(message || "")
//     const [lineCount, setLineCount] = useState(1);

//     useEffect(() => {
//         setInput(message || "")
//     }, [])
    
//     return (
//         // <div className="flex min-w-0 flex-1 flex-col">
//         <SingleLineTextarea
//             maxRows={1}
//             value={message}
//             onChange={(e) => {
//                 setMessage(e.target.value);
//                 console.log('onchange', e.target.value);
//                 console.log('message', message);
//             }}
//             onKeyDown={(e) =>{
//                 if(e.key === 'Enter' && !e.shiftKey) {
//                     setInput(message);
//                     e.preventDefault();
//                     setMessage("");
//                     // console.log('input', e.target.value);
//                     handleTextInput(message);
//                 }
//                 // else if (e.key === 'Enter' && e.shiftKey) {
//                 //     setInput(e.target.value + '\n');
//                 // }
//             }}
//             placeholder="메시지 ChatGPT"
//             className="flex-1 h-12 text-lg placeholder:font-normal font-semibold bg-transparent focus:outline-none"
//         />
//         // <input
//         //     type="text"
//         //     value={message}
//         //     onChange={(e) => {
//         //         setMessage(e.target.value);
//         //         console.log('onchange', e.target.value);
//         //     }}
//         //     onKeyDown={(e) =>{
//         //         if(e.key === 'Enter' && !e.shiftKey) {
//         //             e.preventDefault();
//         //             setMessage("");
//         //             setLineCount(lineCount + 1);
//         //         }
//         //     }}
//         //     placeholder="메시지 ChatGPT"
//         //     className={`flex-1 h-12 text-lg placeholder:font-normal font-semibold bg-transparent focus:outline-none border-none`}
//         // />
        
//     );
// }