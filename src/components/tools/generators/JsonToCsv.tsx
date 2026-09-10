import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function JsonToCsv() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      const array = JSON.parse(input);
      if (!Array.isArray(array) || array.length === 0) {
        throw new Error('Input harus berupa Array dari Object JSON.');
      }
      const headers = Object.keys(array[0]);
      const csvRows = [
        headers.join(','),
        ...array.map((row) =>
          headers.map((fieldName) => JSON.stringify(row[fieldName] ?? '')).join(',')
        ),
      ];
      setOutput(csvRows.join('\n'));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON Array');
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">JSON to CSV Converter</h1>
        <p className="text-sm text-slate-500 mt-1">Konversi array object JSON menjadi format CSV.</p>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input JSON Array" value={input} onChange={setInput} placeholder='[{"name":"Budi","age":25}]' />
        <Editor label="CSV Output" value={output} readOnly />
      </div>
      <button onClick={handleConvert} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Convert to CSV
      </button>
    </div>
  );
}
