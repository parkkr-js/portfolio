import React from 'react';
import { formatText } from './utils';

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-white">
    {items.map((it, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="self-center h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
        <span className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formatText(it) }} />
      </li>
    ))}
  </ul>
);

export const Paragraphs = ({ items }: { items: string[] }) => (
  <div className="space-y-2 text-white">
    {items.map((p, i) => (
      <p key={i} className="leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formatText(p) }} />
    ))}
  </div>
);


