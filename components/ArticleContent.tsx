import type { ReactNode } from 'react';

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*.+?\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="rounded bg-slate-800 px-1.5 py-0.5 text-indigo-200">{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

export function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split('\n').map((line) => line.trim());
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index];

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith('# ')) {
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(
        <h2 key={index} className="mt-8 text-xl font-bold text-white">
          {renderInline(line.slice(3))}
        </h2>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^[-*] /.test(lines[index])) {
        items.push(<li key={index}>{renderInline(lines[index].slice(2))}</li>);
        index += 1;
      }
      blocks.push(<ul key={`ul-${index}`} className="list-disc space-y-2 pl-6">{items}</ul>);
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(<li key={index}>{renderInline(lines[index].replace(/^\d+\. /, ''))}</li>);
        index += 1;
      }
      blocks.push(<ol key={`ol-${index}`} className="list-decimal space-y-2 pl-6">{items}</ol>);
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index] && !/^#{1,6} /.test(lines[index]) && !/^[-*] /.test(lines[index]) && !/^\d+\. /.test(lines[index])) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(<p key={index}>{renderInline(paragraph.join(' '))}</p>);
  }

  return <div className="max-w-none space-y-4 leading-relaxed text-slate-300">{blocks}</div>;
}
