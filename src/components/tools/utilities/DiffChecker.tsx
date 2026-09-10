import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function DiffChecker() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diffResult, setDiffResult] = useState<Array<{ value: string; added?: boolean; removed?: boolean }>>([]);

  const handleCompare = () => {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    const max = Math.max(lines1.length, lines2.length);
    const result = [];

    for (let i = 0; i < max; i++) {
      if (lines1[i] === lines2[i]) {
        result.push({ value: lines1[i] || '' });
      } else {
        if (lines1[i] !== undefined) result.push({ value: `- ${lines1[i]}`, removed: true });
        if (lines2[i] !== undefined) result.push({ value: `+ ${lines2[i]}`, added: true });
      }
    }
    setDiffResult(result);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Text Diff Checker</h1>
        <p className="text-sm text-slate-500 mt-1">Bandingkan dua blok teks untuk melihat baris yang berubah.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Teks Asli" value={text1} onChange={setText1} />
        <Editor label="Teks Baru" value={text2} onChange={setText2} />
      </div>
      <button onClick={handleCompare} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Bandingkan Teks
      </button>
      {diffResult.length > 0 && (
        <div className="p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-lg overflow-x-auto space-y-1">
          {diffResult.map((item, index) => (
            <div
              key={index}
              className={
                item.added
                  ? 'bg-emerald-900/60 text-emerald-200 px-2 py-0.5 rounded'
                  : item.removed
                  ? 'bg-rose-900/60 text-rose-200 px-2 py-0.5 rounded'
                  : 'text-slate-400 px-2'
              }
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
