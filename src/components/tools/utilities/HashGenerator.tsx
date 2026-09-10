import { useState } from 'react';

export default function HashGenerator() {
  const [input, setInput] = useState('');
  const [sha256, setSha256] = useState('');
  const [sha1, setSha1] = useState('');

  const handleHash = async () => {
    if (!input) return;
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hash256Buffer = await crypto.subtle.digest('SHA-256', data);
    setSha256(Array.from(new Uint8Array(hash256Buffer)).map((b) => b.toString(16).padStart(2, '0')).join(''));

    const hash1Buffer = await crypto.subtle.digest('SHA-1', data);
    setSha1(Array.from(new Uint8Array(hash1Buffer)).map((b) => b.toString(16).padStart(2, '0')).join(''));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Hash Generator</h1>
        <p className="text-sm text-slate-500 mt-1">Buat nilai hash cryptographic (SHA-256, SHA-1) secara instant.</p>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ketik teks yang mau di-hash..."
        rows={4}
        className="w-full p-3 font-mono text-sm rounded-lg border border-slate-300 focus:outline-none"
      />
      <button onClick={handleHash} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Generate Hashes
      </button>
      <div className="space-y-3 font-mono text-xs">
        <div>
          <span className="font-bold text-slate-700 block">SHA-256:</span>
          <div className="p-2 bg-slate-100 rounded border border-slate-200 select-all">{sha256 || '-'}</div>
        </div>
        <div>
          <span className="font-bold text-slate-700 block">SHA-1:</span>
          <div className="p-2 bg-slate-100 rounded border border-slate-200 select-all">{sha1 || '-'}</div>
        </div>
      </div>
    </div>
  );
}
