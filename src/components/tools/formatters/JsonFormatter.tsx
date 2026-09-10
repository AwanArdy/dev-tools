import React, { useState } from 'react';
import Editor from '../../common/Editor';

export default function JsonFormatter() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFormat = (): void => {
    if (!input.trim()) return;
    try {
      const parsed: unknown = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan parsing JSON');
      }
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">JSON Formatter</h1>
        <p className="text-sm text-slate-500 mt-1">Rapikan dan validasi sintaks JSON secara instant.</p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg font-mono">
          <strong>Invalid JSON:</strong> {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor
          label="Input JSON"
          value={input}
          onChange={setInput}
          placeholder='{"name": "john", "age": 30}'
        />
        <Editor
          label="Formatted Output"
          value={output}
          readOnly
          placeholder="Hasil akan muncul di sini..."
        />
      </div>

      <button
        onClick={handleFormat}
        className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition"
      >
        Format JSON
      </button>
    </div>
  );
}
