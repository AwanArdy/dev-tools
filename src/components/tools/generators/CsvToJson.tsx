import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function CsvToJson() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    const lines = input.trim().split('\n');
    if (lines.length < 2) return;
    const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));
    const result = lines.slice(1).map((line) => {
      const values = line.split(',').map((v) => v.trim().replace(/^"|"$/g, ''));
      const obj: Record<string, string> = {};
      headers.forEach((header, index) => {
        obj[header] = values[index] || '';
      });
      return obj;
    });
    setOutput(JSON.stringify(result, null, 2));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CSV to JSON Converter</h1>
        <p className="text-sm text-slate-500 mt-1">Konversi data tabel CSV menjadi format array JSON.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input CSV" value={input} onChange={setInput} placeholder="name,age&#10;Budi,25" />
        <Editor label="JSON Output" value={output} readOnly />
      </div>
      <button onClick={handleConvert} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Convert to JSON
      </button>
    </div>
  );
}
