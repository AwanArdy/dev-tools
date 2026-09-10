import { useState } from 'react';
import Editor from '../../common/Editor';

export default function JsonMinifier() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
      setOutput('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">JSON Minifier</h1>
        <p className="text-sm text-slate-500 mt-1">Hapus spasi dan newline pada JSON agar hemat resource.</p>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input JSON" value={input} onChange={setInput} />
        <Editor label="Minified Output" value={output} readOnly />
      </div>
      <button onClick={handleMinify} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Minify JSON
      </button>
    </div>
  );
}
