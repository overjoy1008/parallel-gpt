import { ReactNode } from 'react';

interface MarkdownNode {
  type: string;
  content: string | MarkdownNode[];
  depth?: number;
}

class ClaudeStyleMarkdownProcessor {
  private document: MarkdownNode[] = [];

  constructor(content: string) {
    this.parseDocument(content);
  }

  private parseDocument(content: string): void {
    const lines = content.split('\n');
    let currentSection: MarkdownNode | null = null;
    let listStack: MarkdownNode[] = [];

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine === '') return;

      const headerMatch = trimmedLine.match(/^(#{1,6})\s(.+)$/);
      if (headerMatch) {
        currentSection = { type: 'header', content: headerMatch[2], depth: headerMatch[1].length };
        this.document.push(currentSection);
        listStack = [];
      } else if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\.\s/)) {
        const listItem: MarkdownNode = { type: 'listItem', content: this.parseInlineElements(trimmedLine.replace(/^-\s|^\d+\.\s/, '')) };
        const depth = (line.match(/^\s*/)?.[0].length || 0) / 2;

        while (listStack.length > depth) {
          listStack.pop();
        }

        if (listStack.length === 0) {
          const list: MarkdownNode = { type: 'list', content: [listItem] };
          this.document.push(list);
          listStack.push(list);
        } else {
          const parentList = listStack[listStack.length - 1];
          if (Array.isArray(parentList.content)) {
            parentList.content.push(listItem);
          }
        }
      } else {
        const paragraph: MarkdownNode = { type: 'paragraph', content: this.parseInlineElements(trimmedLine) };
        this.document.push(paragraph);
        listStack = [];
      }
    });
  }

  private parseInlineElements(text: string): string {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Code
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    // Links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return text;
  }

  public render(): ReactNode {
    return this.renderNodes(this.document);
  }

  private renderNodes(nodes: MarkdownNode[]): ReactNode {
    return nodes.map((node, index) => {
      switch (node.type) {
        case 'header':
          const HeaderTag = `h${node.depth}` as keyof JSX.IntrinsicElements;
          return <HeaderTag key={index}>{node.content.toString()}</HeaderTag>;
        case 'paragraph':
          return <p key={index} dangerouslySetInnerHTML={{ __html: node.content as string }} />;
        case 'list':
          return <ul key={index}>{this.renderNodes(node.content as MarkdownNode[])}</ul>;
        case 'listItem':
          return <li key={index} dangerouslySetInnerHTML={{ __html: node.content as string }} />;
        default:
          return null;
      }
    });
  }
}

export default function ClaudeMarkdown({ content }: { content: string }) {
  const processor = new ClaudeStyleMarkdownProcessor(content);
  return <>{processor.render()}</>;
}