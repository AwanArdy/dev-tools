import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function CssMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleMinify = () => {
    const minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s*([\{\}:;,])\s*/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    setOutput(minified);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CSS Minifier</h1>
        <p className="text-sm text-slate-500 mt-1">Kompres aturan CSS menjadi satu baris rapat.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input CSS" value={input} onChange={setInput} />
        <Editor label="Minified Output" value={output} readOnly />
      </div>
      <button onClick={handleMinify} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Minify CSS
      </button>
    </div>
  );
}
