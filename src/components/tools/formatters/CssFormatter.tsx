import React, { useState } from 'react';
import { css as beautifyCss } from 'js-beautify';
import Editor from '../../common/Editor';

export default function CssFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    if (!input.trim()) return;
    const formatted = beautifyCss(input, { indent_size: 2 });
    setOutput(formatted);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CSS Formatter</h1>
        <p className="text-sm text-slate-500 mt-1">Format aturan CSS agar mudah dibaca.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input CSS" value={input} onChange={setInput} placeholder="body{color:red;margin:0;}" />
        <Editor label="Formatted Output" value={output} readOnly placeholder="Hasil akan muncul di sini..." />
      </div>
      <button onClick={handleFormat} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Format CSS
      </button>
    </div>
  );
}
