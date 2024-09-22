export default class ChatHistoryUsecase {
    async customPrompt( setChatHistory: any, systemPrompt: string ) {
        const chat_history = [
            { role: "system", content: systemPrompt },
            { role: "user", content: `And, or, not 게이트를 코드로 작성해줘!\npython코드를 사용해야 해.` },
            { role: "assistant", content: `물론입니다! Python에서는 기본적으로 \`AND\`, \`OR\`, \`NOT\` 연산자가 내장되어 있지만, 이를 함수로 구현해보겠습니다. AND, OR, NOT 연산자를 함수로 구현하는 방법은 다음과 같습니다:

\`\`\`python
# AND 연산자 함수 구현
def logical_and(a, b):
return a and b

# OR 연산자 함수 구현
def logical_or(a, b):
return a or b

# NOT 연산자 함수 구현
def logical_not(a):
return not a

# 테스트 사례
print(f"AND(True, True) => {logical_and(True, True)}")
print(f"AND(True, False) => {logical_and(True, False)}")
print(f"OR(True, False) => {logical_or(True, False)}")
print(f"OR(False, False) => {logical_or(False, False)}")
print(f"NOT(True) => {logical_not(True)}")
print(f"NOT(False) => {logical_not(False)}")
\`\`\`

위의 예제에서는 다음과 같은 결과를 얻을 수 있습니다:

\`\`\`
AND(True, True) => True
AND(True, False) => False
OR(True, False) => True
OR(False, False) => False
NOT(True) => False
NOT(False) => True
\`\`\`

\`and_gate(a, b)\`

이렇게 하면 Python에서 직접 공통 논리 연산자를 함수 형태로 구현할 수 있습니다. 필요한 경우 이러한 함수를 사용하여 더 복잡한 논리 연산을 수행할 수 있습니다.
`},
{ role: "user", content: "js로도 써볼래?" },
{ role: "assistant", content: `물론이죠! JavaScript에서도 논리 연산자를 함수로 구현할 수 있어요. 아래는 AND, OR, NOT 연산자를 함수로 구현한 예입니다:

\`\`\`javascript
// AND 연산자 함수 구현
function logicalAnd(a, b) {
    return a && b;
}

// OR 연산자 함수 구현
function logicalOr(a, b) {
    return a || b;
}

// NOT 연산자 함수 구현
function logicalNot(a) {
    return !a;
}

// 테스트 사례
console.log(AND(true, true) => \${logicalAnd(true, true)});
console.log(AND(true, false) => \${logicalAnd(true, false)});
console.log(OR(true, false) => \${logicalOr(true, false)});
console.log(OR(false, false) => \${logicalOr(false, false)});
console.log(NOT(true) => \${logicalNot(true)});
console.log(NOT(false) => \${logicalNot(false)});
\`\`\`

위의 코드를 실행하면 다음과 같은 결과를 얻을 수 있습니다:

\`\`\`
AND(true, true) => true
AND(true, false) => false
OR(true, false) => true
OR(false, false) => false
NOT(true) => false
NOT(false) => true
\`\`\`

이렇게 하면 JavaScript에서 논리 연산을 쉽게 함수로 처리할 수 있습니다. 필요한 경우 복잡한 논리 연산을 구성할 때 유용하게 사용할 수 있습니다.

`},
//             { role: "user", content: "NAND, NOR, XOR 게이트도 구현해줘." },
//             { role: "assistant", content: `물론입니다! 다음은 NAND, NOR, XOR 게이트를 각각 구현한 코드입니다:

// NAND 게이트:
// \`\`\`python
// def NAND_gate(input1, input2):
//     # NAND 게이트의 진리표에 따라 결과 계산
//     if input1 == 1 and input2 == 1:
//         return 0
//     else:
//         return 1

// # 입력 값 설정
// input1 = 1
// input2 = 0

// # NAND 게이트 호출 및 결과 출력
// output = NAND_gate(input1, input2)
// print("NAND 게이트의 결과: ", output)
// \`\`\`

// NOR 게이트:
// \`\`\`python
// def NOR_gate(input1, input2):
//     # NOR 게이트의 진리표에 따라 결과 계산
//     if input1 == 0 and input2 == 0:
//         return 1
//     else:
//         return 0

// # 입력 값 설정
// input1 = 0
// input2 = 1

// # NOR 게이트 호출 및 결과 출력
// output = NOR_gate(input1, input2)
// print("NOR 게이트의 결과: ", output)
// \`\`\`

// XOR 게이트:
// \`\`\`python
// def XOR_gate(input1, input2):
//     # XOR 게이트의 진리표에 따라 결과 계산
//     if input1 != input2:
//         return 1
//     else:
//         return 0

// # 입력 값 설정
// input1 = 1
// input2 = 1

// # XOR 게이트 호출 및 결과 출력
// output = XOR_gate(input1, input2)
// print("XOR 게이트의 결과: ", output)
// \`\`\`
// 각 코드에서는 해당 게이트의 진리표에 따라 결과를 계산하고 출력하고 있습니다.
// ` },
]
        console.log('Custom Prompt called');
        setChatHistory(chat_history);
    }

    async inputText( chat_history: object[], setChatHistory: any, text_input: string ) {
        // console.log('Input Text called', chat_history);
        chat_history.push({
            role: "user",
            content:  text_input
        });
        //console.log('Input Text called', chat_history);
        setChatHistory(chat_history);
    }

    async responseText( chat_history: object[], setChatHistory: any, full_response: string ) {
        chat_history.push({
            role: "assistant",
            content: full_response
        });
        setChatHistory(chat_history);
    }

    // async inputText( chat_history: object[], setChatHistory: any, text_input: string ) {
    //     // console.log('Input Text called', chat_history);
    //     chat_history.push({
    //         role: "user",
    //         content: [
    //             {
    //                 "type": "text",
    //                 "text": text_input
    //             }
    //         ]
    //     });
    //     //console.log('Input Text called', chat_history);
    //     setChatHistory(chat_history);
    // }

    // async responseText( chat_history: object[], setChatHistory: any, full_response: string ) {
    //     chat_history.push({
    //         role: "assistant",
    //         content: [
    //             {
    //                 "type": "text",
    //                 "text": full_response
    //             }
    //         ]
    //     });
    //     setChatHistory(chat_history);
    // }

    // 추후 기능 (다중 파일 멀티모달)
    async inputImage( chat_history: object[], setChatHistory: any, image_url: string ) {}
    async inputImages ( chat_history: object[], setChatHistory: any, image_urls: string[] ) {}
    async inputPDF ( chat_history: object[], setChatHistory: any, pdf_url: string ) {}
    async inputAudio ( chat_history: object[], setChatHistory: any, audio_url: string ) {}
    async inputCode ( chat_history: object[], setChatHistory: any, code_snippet: string ) {}

}