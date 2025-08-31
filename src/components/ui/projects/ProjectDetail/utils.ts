export type ParsedContent = { bullets: string[]; paragraphs: string[] };

export const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

// **text** => bold + accent color
// *text*  => bold
export const formatText = (raw: string): string => {
  let s = escapeHtml(raw);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary-300">$1</strong>');
  s = s.replace(/\*(.+?)\*/g, '<strong>$1</strong>');
  s = s.replace(/\n/g, '<br />');
  return s;
};

export const parseContent = (raw?: string | string[]): ParsedContent => {
  if (!raw) return { bullets: [], paragraphs: [] };
  if (Array.isArray(raw)) {
    return { bullets: raw, paragraphs: [] };
  }
  const lines = raw.split('\n');
  const bullets: string[] = [];
  const blocks: string[] = [];
  let current: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (current.length) {
        blocks.push(current.join(' ').trim());
        current = [];
      }
      bullets.push(trimmed.slice(2));
      continue;
    }
    if (trimmed.length === 0) {
      if (current.length) {
        blocks.push(current.join(' ').trim());
        current = [];
      }
      continue;
    }
    if ([
      '문제상황', '문제', '해결', '해결방안', '원인', '기술적 원인(사실)', '선택 이유', '문제(VoC)', '문제(VoC 기반)', '원인'
    ].some((h) => trimmed.startsWith(h))) {
      continue;
    }
    current.push(trimmed);
  }
  if (current.length) blocks.push(current.join(' ').trim());
  return { bullets, paragraphs: blocks };
};


