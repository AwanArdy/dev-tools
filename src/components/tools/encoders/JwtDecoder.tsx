import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function JwtDecoder() {
  const [input, setInput] = useState('');
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleDecode = () => {
    if (!input.trim()) return;
    const parts = input.split('.');
    if (parts.length !== 3) {
      setError('JWT Token harus memiliki 3 bagian (Header.Payload.Signature)');
      setHeader('');
      setPayload('');
      return;
    }
    try {
      const decodedHeader = JSON.parse(atob(parts[0]));
      const decodedPayload = JSON.parse(atob(parts[1]));
      setHeader(JSON.stringify(decodedHeader, null, 2));
      setPayload(JSON.stringify(decodedPayload, null, 2));
      setError(null);
    } catch {
      setError('Gagal parse payload JWT.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">JWT Decoder</h1>
        <p className="text-sm text-slate-500 mt-1">Bongkar isi Header dan Payload dari JSON Web Token secara instant.</p>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
      <Editor label="Paste JWT Token" value={input} onChange={setInput} rows={4} placeholder="eyJhbGciOiJIUzI1NiIsInR..." />
      <button onClick={handleDecode} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Decode Token
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Header" value={header} readOnly rows={8} />
        <Editor label="Payload" value={payload} readOnly rows={8} />
      </div>
    </div>
  );
}
