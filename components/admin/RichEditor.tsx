'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import { Node, mergeAttributes } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useState, useRef, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

// ── Instagram embed node ────────────────────────────────────────────────────────
const Instagram = Node.create({
  name: 'instagram',
  group: 'block',
  atom: true,

  addAttributes() {
    return { shortcode: { default: null } };
  },

  parseHTML() {
    return [{
      tag: 'blockquote[data-instgrm-permalink]',
      getAttrs: (el) => {
        const href = (el as HTMLElement).getAttribute('data-instgrm-permalink') ?? '';
        const match = href.match(/instagram\.com\/p\/([A-Za-z0-9_-]+)/);
        return { shortcode: match ? match[1] : null };
      },
    }];
  },

  renderHTML({ HTMLAttributes }) {
    const sc = HTMLAttributes.shortcode;
    return ['blockquote', mergeAttributes({
      class: 'instagram-media',
      'data-instgrm-captioned': '',
      'data-instgrm-permalink': `https://www.instagram.com/p/${sc}/`,
      'data-instgrm-version': '14',
      style: 'background:#FFF;border:0;border-radius:3px;box-shadow:0 0 1px 0 rgba(0,0,0,.5),0 1px 10px 0 rgba(0,0,0,.15);margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;',
    })];
  },

  addNodeView() {
    return ({ node }) => {
      const sc = node.attrs.shortcode;
      const dom = document.createElement('div');
      dom.style.cssText = 'width:100%;max-width:540px;margin:16px auto;border:1px solid rgba(201,168,76,0.2);border-radius:4px;overflow:hidden;';

      const label = document.createElement('div');
      label.style.cssText = 'padding:7px 12px;font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(201,168,76,0.8);font-family:sans-serif;border-bottom:1px solid rgba(201,168,76,0.15);display:flex;align-items:center;gap:6px;';
      label.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg> Instagram Embed`;

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.instagram.com/p/${sc}/embed/captioned/`;
      iframe.style.cssText = 'width:100%;height:660px;border:none;display:block;';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowtransparency', 'true');

      dom.appendChild(label);
      dom.appendChild(iframe);
      return { dom };
    };
  },
});

// ── UI helpers ─────────────────────────────────────────────────────────────────
function ToolBtn({ active, onClick, title, children, loading }: {
  active?: boolean; onClick: () => void; title: string; children: React.ReactNode; loading?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={loading}
      style={{
        padding: '4px 8px',
        background: active ? 'rgba(201,168,76,0.2)' : 'transparent',
        border: `1px solid ${active ? 'rgba(201,168,76,0.5)' : 'transparent'}`,
        color: loading ? 'var(--text-muted)' : active ? 'var(--gold)' : 'var(--text-muted)',
        cursor: loading ? 'not-allowed' : 'pointer',
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

// ── Main component ─────────────────────────────────────────────────────────────
interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkBar, setShowLinkBar] = useState(false);
  const [showInstaBar, setShowInstaBar] = useState(false);
  const [instaUrl, setInstaUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);
  const instaInputRef = useRef<HTMLInputElement>(null);

  // Focus without scrolling — prevents page jumping when toolbar is sticky
  useEffect(() => {
    if (showLinkBar) linkInputRef.current?.focus({ preventScroll: true });
  }, [showLinkBar]);

  useEffect(() => {
    if (showInstaBar) instaInputRef.current?.focus({ preventScroll: true });
  }, [showInstaBar]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' } }),
      TiptapImage.configure({ allowBase64: false }),
      Placeholder.configure({ placeholder: placeholder || 'Write the full article here…' }),
      Instagram,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  function applyLink() {
    if (linkUrl) editor!.chain().focus().setLink({ href: linkUrl }).run();
    else editor!.chain().focus().unsetLink().run();
    setLinkUrl('');
    setShowLinkBar(false);
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    setUploading(true);
    const supabase = createClient();
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('news-images').upload(filename, file, { upsert: true });
    if (!error) {
      const { data } = supabase.storage.from('news-images').getPublicUrl(filename);
      editor.chain().focus().setImage({ src: data.publicUrl }).run();
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function extractShortcode(url: string): string | null {
    const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  }

  function insertInstagram() {
    const shortcode = extractShortcode(instaUrl);
    if (!shortcode || !editor) return;
    editor.chain().focus().insertContent({ type: 'instagram', attrs: { shortcode } }).run();
    setInstaUrl('');
    setShowInstaBar(false);
  }

  return (
    <div style={{ border: '1px solid var(--border-subtle)' }}>
      <style>{`
        .rich-editor .ProseMirror { outline: none; min-height: 320px; padding: 16px 18px; color: rgba(245,240,232,0.82); font-family: var(--font-body); font-size: 15px; line-height: 1.85; }
        .rich-editor .ProseMirror p { margin: 0 0 1em; }
        .rich-editor .ProseMirror h2 { font-family: var(--font-display); font-size: 22px; font-weight: 400; font-style: italic; color: var(--cream); margin: 1.6em 0 0.5em; }
        .rich-editor .ProseMirror h3 { font-family: var(--font-display); font-size: 18px; font-weight: 400; font-style: italic; color: var(--cream); margin: 1.4em 0 0.4em; }
        .rich-editor .ProseMirror ul { padding-left: 24px; margin: 0 0 1em; list-style-type: disc; }
        .rich-editor .ProseMirror ol { padding-left: 24px; margin: 0 0 1em; list-style-type: decimal; }
        .rich-editor .ProseMirror li { margin-bottom: 4px; }
        .rich-editor .ProseMirror blockquote { border-left: 3px solid var(--gold); padding-left: 16px; margin: 1.2em 0; color: rgba(245,240,232,0.55); font-style: italic; }
        .rich-editor .ProseMirror a { color: var(--gold); text-decoration: underline; }
        .rich-editor .ProseMirror img { max-width: 100%; height: auto; margin: 12px 0; }
        .rich-editor .ProseMirror p.is-empty:first-child::before { content: attr(data-placeholder); color: rgba(245,240,232,0.22); pointer-events: none; float: left; height: 0; }
        [data-theme='light'] .rich-editor .ProseMirror { color: rgba(10,22,40,0.85); }
        [data-theme='light'] .rich-editor .ProseMirror h2, [data-theme='light'] .rich-editor .ProseMirror h3 { color: #0a1628; }
        [data-theme='light'] .rich-editor .ProseMirror p.is-empty:first-child::before { color: rgba(10,22,40,0.28); }
      `}</style>

      {/* ── Single sticky wrapper: toolbar + all inline bars ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--navy-mid)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        {/* Toolbar row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: '8px 12px' }}>
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
            onClick={() => { setShowInstaBar(false); setShowLinkBar(s => !s); setLinkUrl(editor.getAttributes('link').href || ''); }}
            title="Insert / edit link"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </ToolBtn>

          {/* Image upload */}
          <ToolBtn active={uploading} loading={uploading} onClick={() => fileInputRef.current?.click()} title={uploading ? 'Uploading…' : 'Upload image'}>
            {uploading
              ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
              : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            }
          </ToolBtn>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />

          {/* Instagram embed */}
          <ToolBtn active={showInstaBar} onClick={() => { setShowLinkBar(false); setShowInstaBar(s => !s); }} title="Embed Instagram post">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </ToolBtn>
        </div>

        {/* Link bar — inside sticky wrapper so it stays pinned */}
        {showLinkBar && (
          <div style={{ padding: '8px 12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              ref={linkInputRef}
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

        {/* Instagram bar — inside sticky wrapper so it stays pinned */}
        {showInstaBar && (
          <div style={{ padding: '8px 12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              ref={instaInputRef}
              type="url"
              value={instaUrl}
              onChange={e => setInstaUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && insertInstagram()}
              placeholder="Paste Instagram post or Reel URL…"
              style={{ ...inlineInputStyle, flex: 1, minWidth: 260 }}
            />
            <button type="button" onClick={insertInstagram} style={inlineBtnStyle}>Embed</button>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              Works with /p/, /reel/, and /tv/ links
            </span>
          </div>
        )}
      </div>

      {/* Editor content */}
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
