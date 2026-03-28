import { useState, useEffect } from 'react';
import { COURSES } from '../data/courses.js';

const LEVEL_COLOR = {
  'Débutant': '#10B981',
  'Intermédiaire': '#F59E0B',
  'Avancé': '#EF4444',
};

function MarkdownRenderer({ content }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    // Simple markdown parser (no dependencies needed)
    let result = content;

    // Code blocks with language
    result = result.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `<pre class="md-code-block" data-lang="${lang}"><code>${escaped}</code></pre>`;
    });

    // Tables
    result = result.replace(/^\|(.+)\|\s*\n\|[-| :]+\|\s*\n((?:\|.+\|\s*\n?)+)/gm, (_, header, rows) => {
      const ths = header.split('|').filter(s => s.trim()).map(s => `<th>${s.trim()}</th>`).join('');
      const trs = rows.trim().split('\n').map(row => {
        const tds = row.split('|').filter(s => s.trim()).map(s => `<td>${s.trim()}</td>`).join('');
        return `<tr>${tds}</tr>`;
      }).join('');
      return `<table class="md-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    });

    // Headings
    result = result.replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>');
    result = result.replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>');
    result = result.replace(/^# (.+)$/gm, '<h1 class="md-h1">$1</h1>');

    // Bold and italic
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Inline code
    result = result.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');

    // Paragraphs and line breaks
    result = result
      .split('\n\n')
      .map(block => {
        if (block.startsWith('<h') || block.startsWith('<pre') || block.startsWith('<table')) {
          return block;
        }
        const trimmed = block.trim();
        if (!trimmed) return '';
        return `<p class="md-p">${trimmed.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('\n');

    setHtml(result);
  }, [content]);

  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  // Parse HTML blocks to add copy buttons to code blocks
  const parts = html.split(/(<pre class="md-code-block"[^>]*>[\s\S]*?<\/pre>)/g);

  return (
    <div className="markdown-body">
      <style>{`
        .markdown-body { color: #e0e0e0; line-height: 1.7; font-size: 14px; }
        .md-h1 { font-size: 22px; font-weight: 700; color: #fff; margin: 24px 0 12px; }
        .md-h2 { font-size: 17px; font-weight: 600; color: #c0c0e0; margin: 20px 0 8px; border-bottom: 1px solid #2a2a3a; padding-bottom: 4px; }
        .md-h3 { font-size: 15px; font-weight: 600; color: #a0a0c0; margin: 16px 0 6px; }
        .md-p { margin: 0 0 12px; }
        .md-inline-code { background: #2a2a3a; color: #e0a07a; padding: 1px 5px; border-radius: 4px; font-family: monospace; font-size: 13px; }
        .md-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
        .md-table th { background: #2a2a3a; color: #c0c0e0; padding: 8px 12px; text-align: left; border: 1px solid #3a3a4a; }
        .md-table td { padding: 7px 12px; border: 1px solid #2a2a3a; color: #e0e0e0; }
        .md-table tr:nth-child(even) td { background: #1e1e2a; }
        .code-block-wrapper { position: relative; margin: 12px 0; }
        .code-block-wrapper pre { background: #12121a; border: 1px solid #2a2a3a; border-radius: 8px; padding: 14px 16px; overflow-x: auto; margin: 0; }
        .code-block-wrapper code { font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 13px; color: #c9d1d9; }
        .code-lang-badge { position: absolute; top: 6px; right: 40px; font-size: 10px; color: #8a8aaa; text-transform: uppercase; font-family: monospace; background: #2a2a3a; padding: 1px 6px; border-radius: 4px; }
        .copy-code-btn { position: absolute; top: 6px; right: 8px; background: #2a2a3a; border: none; color: #8a8aaa; cursor: pointer; border-radius: 4px; padding: 2px 6px; font-size: 11px; }
        .copy-code-btn:hover { background: #3a3a4a; color: #e0e0e0; }
      `}</style>
      {parts.map((part, idx) => {
        const codeMatch = part.match(/^<pre class="md-code-block" data-lang="([^"]*)">([\s\S]*?)<\/pre>$/);
        if (codeMatch) {
          const lang = codeMatch[1];
          const codeHtml = codeMatch[2];
          const rawCode = codeHtml.replace(/<code>|<\/code>/g, '')
            .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
          return (
            <div key={idx} className="code-block-wrapper">
              {lang && <span className="code-lang-badge">{lang}</span>}
              <button className="copy-code-btn" onClick={() => handleCopy(rawCode, idx)}>
                {copiedIdx === idx ? '✓' : '⎘'}
              </button>
              <pre><code dangerouslySetInnerHTML={{ __html: codeHtml }} /></pre>
            </div>
          );
        }
        return <div key={idx} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </div>
  );
}

const CATEGORIES = [
  { id: 'all', label: 'Tous', emoji: '📚' },
  { id: 'Fondamentaux', label: 'Fondamentaux', emoji: '🧱' },
  { id: 'Frontend', label: 'Frontend', emoji: '🎨' },
  { id: 'Backend', label: 'Backend', emoji: '⚙️' },
  { id: 'Base de données', label: 'Base de données', emoji: '🗄️' },
  { id: 'Architecture', label: 'Architecture', emoji: '🏛️' },
  { id: 'DevOps', label: 'DevOps', emoji: '🚀' },
  { id: 'Serveurs & Infra', label: 'Serveurs & Infra', emoji: '🖥️' },
  { id: 'Sécurité', label: 'Sécurité', emoji: '🔒' },
  { id: 'IA & LLM', label: 'IA & LLM', emoji: '🤖' },
];

export default function CoursesLibrary({ accentColor = '#8B5CF6' }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = COURSES.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Vue leçon
  if (selectedCourse && selectedLesson) {
    const lesson = selectedCourse.lessons.find(l => l.id === selectedLesson);
    const lessonIdx = selectedCourse.lessons.findIndex(l => l.id === selectedLesson);
    const prev = selectedCourse.lessons[lessonIdx - 1];
    const next = selectedCourse.lessons[lessonIdx + 1];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0f0f13' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: '#1a1a24', borderBottom: '1px solid #2a2a3a', flexShrink: 0 }}>
          <button
            onClick={() => setSelectedLesson(null)}
            style={{ background: 'none', border: 'none', color: '#8a8aaa', cursor: 'pointer', fontSize: 18, padding: '2px 6px' }}
          >←</button>
          <span style={{ fontSize: 18 }}>{selectedCourse.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#e0e0e0', fontWeight: 600, fontSize: 14 }}>{lesson.title}</div>
            <div style={{ color: '#8a8aaa', fontSize: 11 }}>{selectedCourse.title} · {lesson.duration}</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {selectedCourse.lessons.map((l, i) => (
              <div
                key={l.id}
                onClick={() => setSelectedLesson(l.id)}
                style={{
                  width: 8, height: 8, borderRadius: '50%', cursor: 'pointer',
                  background: l.id === selectedLesson ? accentColor : '#3a3a4a'
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          <MarkdownRenderer content={lesson.content} />
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', borderTop: '1px solid #2a2a3a', background: '#1a1a24', flexShrink: 0 }}>
          <button
            onClick={() => prev && setSelectedLesson(prev.id)}
            disabled={!prev}
            style={{
              background: prev ? '#25252f' : 'transparent', border: '1px solid #2a2a3a',
              color: prev ? '#e0e0e0' : '#3a3a4a', padding: '6px 14px', borderRadius: 6,
              cursor: prev ? 'pointer' : 'default', fontSize: 13
            }}
          >← {prev?.title || 'Début'}</button>
          <button
            onClick={() => next && setSelectedLesson(next.id)}
            disabled={!next}
            style={{
              background: next ? accentColor : 'transparent', border: `1px solid ${next ? accentColor : '#2a2a3a'}`,
              color: next ? '#fff' : '#3a3a4a', padding: '6px 14px', borderRadius: 6,
              cursor: next ? 'pointer' : 'default', fontSize: 13, fontWeight: 500
            }}
          >{next?.title || 'Fin'} →</button>
        </div>
      </div>
    );
  }

  // Vue liste des leçons d'un cours
  if (selectedCourse) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0f0f13' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: '#1a1a24', borderBottom: '1px solid #2a2a3a' }}>
          <button
            onClick={() => setSelectedCourse(null)}
            style={{ background: 'none', border: 'none', color: '#8a8aaa', cursor: 'pointer', fontSize: 18, padding: '2px 6px' }}
          >←</button>
          <span style={{ fontSize: 22 }}>{selectedCourse.emoji}</span>
          <div>
            <div style={{ color: '#e0e0e0', fontWeight: 700, fontSize: 16 }}>{selectedCourse.title}</div>
            <div style={{ color: '#8a8aaa', fontSize: 12 }}>{selectedCourse.description}</div>
          </div>
          <span style={{
            marginLeft: 'auto', fontSize: 11, padding: '3px 8px', borderRadius: 10,
            background: LEVEL_COLOR[selectedCourse.level] + '22',
            color: LEVEL_COLOR[selectedCourse.level], border: `1px solid ${LEVEL_COLOR[selectedCourse.level]}44`
          }}>{selectedCourse.level}</span>
        </div>

        {/* Lessons list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
          <div style={{ color: '#8a8aaa', fontSize: 12, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
            {selectedCourse.lessons.length} leçon{selectedCourse.lessons.length > 1 ? 's' : ''}
          </div>
          {selectedCourse.lessons.map((lesson, idx) => (
            <button
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson.id)}
              style={{
                width: '100%', textAlign: 'left', background: '#1a1a24',
                border: '1px solid #2a2a3a', borderRadius: 10, padding: '14px 16px',
                marginBottom: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
                transition: 'border-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = accentColor}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a3a'}
            >
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: accentColor + '22',
                border: `2px solid ${accentColor}44`, display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: accentColor, fontWeight: 700, fontSize: 13, flexShrink: 0
              }}>{idx + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#e0e0e0', fontWeight: 500, fontSize: 14 }}>{lesson.title}</div>
                <div style={{ color: '#8a8aaa', fontSize: 12, marginTop: 2 }}>⏱ {lesson.duration}</div>
              </div>
              <span style={{ color: '#8a8aaa', fontSize: 16 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Vue catalogue
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0f0f13' }}>
      {/* Header */}
      <div style={{ padding: '16px 16px 12px', background: '#1a1a24', borderBottom: '1px solid #2a2a3a', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 20 }}>📚</span>
          <span style={{ color: '#e0e0e0', fontWeight: 700, fontSize: 16 }}>Bibliothèque de cours</span>
          <span style={{ marginLeft: 'auto', background: '#25252f', color: '#8a8aaa', fontSize: 11, padding: '2px 8px', borderRadius: 10 }}>
            {filtered.length}/{COURSES.length} cours
          </span>
        </div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Rechercher un cours..."
          style={{
            width: '100%', background: '#25252f', border: '1px solid #3a3a4a',
            borderRadius: 8, padding: '8px 12px', color: '#e0e0e0', fontSize: 13,
            outline: 'none', boxSizing: 'border-box', marginBottom: 10
          }}
        />
        {/* Category filters */}
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
          {CATEGORIES.map(cat => {
            const count = cat.id === 'all'
              ? COURSES.length
              : COURSES.filter(c => c.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  flexShrink: 0,
                  background: isActive ? accentColor + '22' : '#25252f',
                  border: `1px solid ${isActive ? accentColor : '#3a3a4a'}`,
                  color: isActive ? accentColor : '#8a8aaa',
                  borderRadius: 20, padding: '4px 10px', fontSize: 11,
                  cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.15s'
                }}
              >
                {cat.emoji} {cat.label} <span style={{ opacity: 0.6 }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Course grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#8a8aaa', marginTop: 40 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
            <div>Aucun cours trouvé pour "{search}"</div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {filtered.map(course => (
              <button
                key={course.id}
                onClick={() => { setSelectedCourse(course); setSelectedLesson(null); }}
                style={{
                  textAlign: 'left', background: '#1a1a24', border: '1px solid #2a2a3a',
                  borderRadius: 12, padding: '16px 14px', cursor: 'pointer',
                  transition: 'all 0.15s', display: 'flex', flexDirection: 'column', gap: 8
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = course.color;
                  e.currentTarget.style.background = '#1e1e2a';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#2a2a3a';
                  e.currentTarget.style.background = '#1a1a24';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: 26, width: 44, height: 44, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: course.color + '18', borderRadius: 10
                  }}>{course.emoji}</span>
                  <span style={{
                    fontSize: 10, padding: '2px 7px', borderRadius: 8,
                    background: LEVEL_COLOR[course.level] + '22',
                    color: LEVEL_COLOR[course.level], border: `1px solid ${LEVEL_COLOR[course.level]}44`
                  }}>{course.level}</span>
                </div>
                <div>
                  <div style={{ color: '#e0e0e0', fontWeight: 600, fontSize: 14 }}>{course.title}</div>
                  <div style={{ color: '#8a8aaa', fontSize: 12, marginTop: 3, lineHeight: 1.4 }}>{course.description}</div>
                </div>
                <div style={{ color: '#8a8aaa', fontSize: 11, marginTop: 2 }}>
                  📖 {course.lessons.length} leçon{course.lessons.length > 1 ? 's' : ''}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
