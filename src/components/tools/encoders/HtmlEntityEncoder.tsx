import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function HtmlEntityEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    const encoded = input.replace(/[\u00A0-\u9999<>&"]/g, (i) => `&#${i.charCodeAt(0)};`);
    setOutput(encoded);
  };

  const handleDecode = () => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    setOutput(doc.documentElement.textContent || '');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">HTML Entity Encoder / Decoder</h1>
        <p className="text-sm text-slate-500 mt-1">Ubah karakter khusus seperti &lt;, &gt;, &amp; ke entitas HTML.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input" value={input} onChange={setInput} />
        <Editor label="Output" value={output} readOnly />
      </div>
      <div className="flex gap-3">
        <button onClick={handleEncode} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
          Encode
        </button>
        <button onClick={handleDecode} className="px-4 py-2 bg-slate-100 text-slate-800 border border-slate-300 text-sm font-semibold rounded-md hover:bg-slate-200 transition">
          Decode
        </button>
      </div>
    </div>
  );
}
