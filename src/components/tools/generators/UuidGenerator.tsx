import React, { useState } from 'react';

export default function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);

  const handleGenerate = () => {
    const generated = Array.from({ length: count }, () => crypto.randomUUID());
    setUuids(generated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">UUID / GUID Generator</h1>
        <p className="text-sm text-slate-500 mt-1">Generate UUID v4 secara acak langsung di browser.</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="text-sm font-medium text-slate-700">Jumlah:</label>
        <input
          type="number"
          min={1}
          max={50}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-20 px-3 py-1.5 border border-slate-300 rounded-md text-sm"
        />
        <button onClick={handleGenerate} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
          Generate UUID
        </button>
      </div>
      {uuids.length > 0 && (
        <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-2 font-mono text-sm">
          {uuids.map((u, i) => (
            <div key={i} className="text-slate-800 select-all">{u}</div>
          ))}
        </div>
      )}
    </div>
  );
}
