import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    try {
      setOutput(btoa(input));
      setError(null);
    } catch {
      setError('Gagal meng-encode teks.');
    }
  };

  const handleDecode = () => {
    try {
      setOutput(atob(input));
      setError(null);
    } catch {
      setError('String Base64 tidak valid.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Base64 Encoder / Decoder</h1>
        <p className="text-sm text-slate-500 mt-1">Encode teks biasa ke Base64 dan sebaliknya.</p>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
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
