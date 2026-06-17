'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useState } from 'react';

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

function ToolBtn({
  active,
  onClick,
  title,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      style={{
        padding: '4px 8px',
        background: active ? 'rgba(201,168,76,0.2)' : 'transparent',
        border: `1px solid ${active ? 'rgba(201,168,76,0.5)' : 'transparent'}`,
        color: active ? 'var(--gold)' : 'var(--text-muted)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 600,
        borderRadius: 2,
        transition: 'all 0.15s',
        lineHeight: 1,
        minWidth: 28,
        height: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </button>
  );
}

const Divider = () => (
  <div style={{ width: 1, background: 'rgba(201,168,76,0.15)', margin: '0 4px', alignSelf: 'stretch' }} />
);

export default function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkBar, setShowLinkBar] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [imgAlt, setImgAlt] = useState('');
  const [showImgBar, setShowImgBar] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' } }),
      TiptapImage.configure({ allowBase64: false }),
      Placeholder.configure({ placeholder: placeholder || 'Write the full article here…' }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  function applyLink() {
    if (linkUrl) {
      editor!.chain().focus().setLink({ href: linkUrl }).run();
    } else {
      editor!.chain().focus().unsetLink().run();
    }
    setLinkUrl('');
    setShowLinkBar(false);
  }

  function insertImage() {
    if (imgUrl) {
      editor!.chain().focus().setImage({ src: imgUrl, alt: imgAlt }).run();
    }
    setImgUrl('');
    setImgAlt('');
    setShowImgBar(false);
  }

  return (
    <div style={{ border: '1px solid var(--border-subtle)' }}>
      <style>{`
        .rich-editor .ProseMirror { outline: none; min-height: 280px; padding: 16px 18px; color: rgba(245,240,232,0.82); font-family: var(--font-body); font-size: 15px; line-height: 1.85; }
        .rich-editor .ProseMirror p { margin: 0 0 1em; }
        .rich-editor .ProseMirror h2 { font-family: var(--font-display); font-size: 22px; font-weight: 400; font-style: italic; color: var(--cream); margin: 1.6em 0 0.5em; }
        .rich-editor .ProseMirror h3 { font-family: var(--font-display); font-size: 18px; font-weight: 400; font-style: italic; color: var(--cream); margin: 1.4em 0 0.4em; }
        .rich-editor .ProseMirror ul, .rich-editor .ProseMirror ol { padding-left: 24px; margin: 0 0 1em; }
        .rich-editor .ProseMirror li { margin-bottom: 4px; }
        .rich-editor .ProseMirror blockquote { border-left: 3px solid var(--gold); padding-left: 16px; margin: 1.2em 0; color: rgba(245,240,232,0.55); font-style: italic; }
        .rich-editor .ProseMirror a { color: var(--gold); text-decoration: underline; }
        .rich-editor .ProseMirror img { max-width: 100%; height: auto; margin: 12px 0; }
        .rich-editor .ProseMirror p.is-empty:first-child::before { content: attr(data-placeholder); color: rgba(245,240,232,0.22); pointer-events: none; float: left; height: 0; }
      `}</style>

      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: '8px 12px', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
        <ToolBtn active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold"><strong>B</strong></ToolBtn>
        <ToolBtn active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic"><em>I</em></ToolBtn>
        <Divider />
        <ToolBtn active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2">H2</ToolBtn>
        <ToolBtn active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3">H3</ToolBtn>
        <Divider />
        <ToolBtn active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>
        </ToolBtn>
        <ToolBtn active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered list">1.</ToolBtn>
        <ToolBtn active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
        </ToolBtn>
        <Divider />
        <ToolBtn
          active={editor.isActive('link') || showLinkBar}
          onClick={() => { setShowImgBar(false); setShowLinkBar(s => !s); setLinkUrl(editor.getAttributes('link').href || ''); }}
          title="Insert / edit link"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </ToolBtn>
        <ToolBtn
          active={showImgBar}
          onClick={() => { setShowLinkBar(false); setShowImgBar(s => !s); }}
          title="Insert image"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </ToolBtn>
      </div>

      {/* Link bar */}
      {showLinkBar && (
        <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
          <input
            autoFocus
            type="url"
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && applyLink()}
            placeholder="https://…"
            style={inlineInputStyle}
          />
          <button type="button" onClick={applyLink} style={inlineBtnStyle}>Apply</button>
          {editor.isActive('link') && (
            <button type="button" onClick={() => { editor.chain().focus().unsetLink().run(); setShowLinkBar(false); }} style={{ ...inlineBtnStyle, background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}>Remove</button>
          )}
        </div>
      )}

      {/* Image bar */}
      {showImgBar && (
        <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', background: 'rgba(255,255,255,0.02)' }}>
          <input
            autoFocus
            type="url"
            value={imgUrl}
            onChange={e => setImgUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && insertImage()}
            placeholder="Image URL (https://…)"
            style={{ ...inlineInputStyle, flex: 1, minWidth: 180 }}
          />
          <input
            type="text"
            value={imgAlt}
            onChange={e => setImgAlt(e.target.value)}
            placeholder="Alt text (describe the image)"
            style={{ ...inlineInputStyle, flex: 1, minWidth: 160 }}
          />
          <button type="button" onClick={insertImage} style={inlineBtnStyle}>Insert</button>
        </div>
      )}

      {/* Editor */}
      <div className="rich-editor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

const inlineInputStyle: React.CSSProperties = {
  padding: '6px 10px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  outline: 'none',
};

const inlineBtnStyle: React.CSSProperties = {
  padding: '6px 14px',
  background: 'var(--gold)',
  color: 'var(--navy)',
  border: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: 10,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};
