import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s+/g, '').length;
  const lines = text ? text.split('\n').length : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Word & Character Counter</h1>
        <p className="text-sm text-slate-500 mt-1">Hitung statistik teks secara real-time saat mengetik.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
          <div className="text-2xl font-bold text-slate-900">{words}</div>
          <div className="text-xs text-slate-500">Kata</div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
          <div className="text-2xl font-bold text-slate-900">{chars}</div>
          <div className="text-xs text-slate-500">Karakter</div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
          <div className="text-2xl font-bold text-slate-900">{charsNoSpace}</div>
          <div className="text-xs text-slate-500">Karakter (Tanpa Spasi)</div>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
          <div className="text-2xl font-bold text-slate-900">{lines}</div>
          <div className="text-xs text-slate-500">Baris</div>
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik atau paste teks di sini..."
        rows={10}
        className="w-full p-3 font-mono text-sm rounded-lg border border-slate-300 focus:outline-none"
      />
    </div>
  );
}
