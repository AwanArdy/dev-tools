import { useState } from 'react';
import { html as beautifyHtml } from 'js-beautify';
import Editor from '../../common/Editor';

export default function HtmlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    if (!input.trim()) return;
    const formatted = beautifyHtml(input, { indent_size: 2, wrap_line_length: 80 });
    setOutput(formatted);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">HTML Formatter</h1>
        <p className="text-sm text-slate-500 mt-1">Rapikan struktur elemen HTML yang berantakan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input HTML" value={input} onChange={setInput} placeholder="<div><p>Hello</p></div>" />
        <Editor label="Formatted Output" value={output} readOnly placeholder="Hasil akan muncul di sini..." />
      </div>
      <button onClick={handleFormat} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Format HTML
      </button>
    </div>
  );
}
