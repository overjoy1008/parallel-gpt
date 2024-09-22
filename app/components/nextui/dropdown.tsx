import React, { useState, useMemo } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDownIcon } from 'lucide-react';

export default function ModelDropdown({ title, selectedKeys, setSelectedKeys }:
    { title: string, selectedKeys: Set<string>, setSelectedKeys: (selectedKeys: Set<string>) => void }
) {

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown className="bg-gray-100">
            <DropdownTrigger>
                <Button 
                    variant="light"
                    className={`h-7 capitalize text-base font-${ selectedValue === title ? "medium" : "bold" } text-gray-${ selectedValue === title ? 400 : 500 } px-2 py-1 hover transition-colors duration-200`}
                >
                <span>{selectedValue}</span>
                <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label={title}
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                disabledKeys={["ChatGPT-o1-Preview", "ChatGPT-o1-Mini", "Gemini-1.5-Flash", "Gemini-1.5-Pro", "More coming soon..."]}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection title="OpenAI" showDivider>
                    <DropdownItem key="ChatGPT-4o">ChatGPT-4o</DropdownItem>
                    <DropdownItem key="ChatGPT-4o-Mini">ChatGPT-4o-Mini</DropdownItem>
                    <DropdownItem key="ChatGPT-4-Turbo">ChatGPT-4-Turbo</DropdownItem>
                    <DropdownItem key="ChatGPT-4">ChatGPT-4</DropdownItem>
                    <DropdownItem key="ChatGPT-o1-Preview">ChatGPT-o1-Preview</DropdownItem>
                    <DropdownItem key="ChatGPT-o1-Mini">ChatGPT-o1-Mini</DropdownItem>
                </DropdownSection>
                <DropdownSection title="Anthropic" showDivider>
                    <DropdownItem key="Claude-3.5-Sonnet">Claude-3.5-Sonnet</DropdownItem>
                    <DropdownItem key="Claude-3-Opus">Claude-3-Opus</DropdownItem>
                    <DropdownItem key="Claude-3-Haiku">Claude-3-Haiku</DropdownItem>
                </DropdownSection>
                <DropdownSection title="Google AI Studio" showDivider>
                    <DropdownItem key="Gemini-1.5-Flash">Gemini-1.5-Flash</DropdownItem>
                    <DropdownItem key="Gemini-1.5-Pro">Gemini-1.5-Pro</DropdownItem>
                </DropdownSection>
                <DropdownItem key="More coming soon...">More coming soon...</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}